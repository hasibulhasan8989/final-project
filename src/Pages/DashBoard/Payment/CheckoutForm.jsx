import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [secret, setSecret] = useState(null);
  const { user } = useAuth();
  const navigate=useNavigate()

  const axiosSecure = useAxios();
  const { cart, refetch } = useCart();

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if(totalAmount>0){
        axiosSecure
      .post("/create-payment-intent", { price: totalAmount })
      .then((res) => setSecret(res.data.clientSecret));
    }
  }, [axiosSecure, totalAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(secret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirmError", error);
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        email: user.email,
        price: totalAmount,
        date: new Date(),
        menuIds: cart.map((item) => item.menuId),
        orderIds: cart.map((item) => item._id),
        transactionId: paymentIntent.id,
        status: "pending",
      };
      axiosSecure.post("/payment", payment).then((res) => {
        if (res.data.result.insertedId) {
          refetch();
          Swal.fire({
            title: "Transaction Complete",
            icon: "success",
            draggable: true,
          });
          navigate('/dashboard/payment-history')
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        className="btn my-10 btn-accent"
        type="submit"
        disabled={!stripe || !secret ||totalAmount===0}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
