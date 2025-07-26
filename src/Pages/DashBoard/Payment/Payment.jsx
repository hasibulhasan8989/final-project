import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT)
const Payment = () => {
   
    return (
        <div>
            <SectionTitle time={'---At a Glance!---'} title={'Make Payment'}></SectionTitle>
            {/* Payment Related Work */}
            <div>
                <Elements stripe={stripePromise}>
                 <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;