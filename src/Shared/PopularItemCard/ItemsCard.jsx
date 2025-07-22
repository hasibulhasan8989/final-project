import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";

const ItemsCard = ({ item }) => {
  const { name, recipe, price, image, _id } = item;

  const {refetch}=useCart()
  const axiosSecure = useAxios();
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCart = () => {
    if (user && user?.email) {
      const cartItem = {
        email: user.email,
        menuId:_id,
        image,
        name,
        price,
      };

      

      axiosSecure
        .post("/carts", cartItem)
        .then(() => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Added to Cart",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch()
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            
          });
        });
    } else {
      Swal.fire({
        title: "Please log in to continue",
        text: "You must be logged in to add items to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };

  return (
    <div className=" rounded-2xl  overflow-auto bg-[#F3F3F3] relative  text-center">
      <img className="h-[300px]" src={image} alt="" />
      <p className="absolute right-6 font-semibold text-lg rounded-2xl bg-[#111827] text-orange-500 px-4 py-1 top-4">
        $ {price}
      </p>

      <p className="mt-8 text-2xl font-semibold">{name}</p>
      <p className="max-w-[345px] mt-2 mx-auto  text-sm">{recipe}</p>
      <button
        onClick={() => handleCart(item)}
        className="uppercase mx-auto mb-4 block hover:bg-[#1F2937] hover:border-none border-[#BB8506]  text-[#BB8506]  mt-4  text-xl font-medium px-7 py-5 border-b-4 rounded-xl cursor-pointer"
      >
        add to cart
      </button>
    </div>
  );
};

export default ItemsCard;
