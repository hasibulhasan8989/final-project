import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const Users = () => {
  const axiosSecure = useAxios();
  

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const makeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: `You Successfully Made ${user.name} Admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };

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
        axiosSecure.delete(`/users/${id}`)
         .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
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
        time={"---How many??---"}
        title={"MANAGE ALL USERS"}
      ></SectionTitle>

      <div className="cinzel  mb-4 md:mb-12 ">
        <p className=" md:text-3xl font-bold text-xl">
          Total Users: {users.length}
        </p>
      </div>
      <div className="overflow-x-auto  md:px-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>
                  <p>{idx + 1}</p>
                </th>
                <th>
                  <p>{user.name}</p>
                </th>
                <td>
                  <div>{user.email}</div>
                </td>
                <td>
                  {user.role === "admin" ? (
                    <span>
                      {" "}
                      <span className="text-red-500">*</span>Admin
                    </span>
                  ) : (
                    <button
                      onClick={() => makeAdmin(user)}
                      className="bg-[#D1A054] p-2 rounded-[5px] cursor-pointer "
                    >
                      <FaUser size={30} color="#FFF"></FaUser>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default Users;
