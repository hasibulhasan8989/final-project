import React from "react";
import useCart from "../../../Hooks/useCart";
import { MdDelete } from "react-icons/md";

import SectionTitle from "../../../Components/SectionTitle";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const MyCart = () => {
  const { cart,refetch } = useCart();
  const axiosSecure = useAxios();

  const totalPrice = parseFloat(
    cart.reduce((acc, current) => acc + current.price, 0).toFixed(2)
  );
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        time={"---My Cart---"}
        title={"WANNA ADD MORE?"}
      ></SectionTitle>
      <div className="cinzel flex mb-4 justify-evenly items-center">
        <p className=" md:text-3xl text-xl">Total Order: {cart.length}</p>
        <p className=" md:text-3xl text-xl">Total Price: {totalPrice}</p>
        <button className="btn md:text-2xl text-xl bg-[#D1A054]">Pay</button>
      </div>
      <div className="overflow-x-auto  md:px-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <th>
                  <img
                    className="mask rounded-xl h-12 w-12"
                    src={item.image}
                    alt=""
                  />
                </th>
                <td>
                  <div>{item.name}</div>
                </td>
                <td>
                  <p>${item.price}</p>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-[#B91C1C] p-2 rounded-[5px] cursor-pointer "
                  >
                    <MdDelete size={30} color="#FFF"></MdDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
