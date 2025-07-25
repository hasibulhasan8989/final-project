
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const {menu,refetch} = useMenu();
  const axiosSecure=useAxios()

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
          axiosSecure.delete(`/menu/${id}`).then((res) => {
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
        time={"---Hurry Up!---"}
        title={"MANAGE ALL ITEMS"}
      ></SectionTitle>
      {/* Table */}
      <div className="cinzel  mb-4 ">
        <p className=" md:text-3xl text-xl">Total Items: {menu.length}</p>
      </div>
      <div className="overflow-x-auto  md:px-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#index</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>

                <td>
                  <img
                    className="mask rounded-xl h-12 w-12"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>
                  <div>{item.name}</div>
                </td>
                <td>
                  <p>${item.price}</p>
                </td>
                <td>
                    <Link to={`/dashboard/update-item/${item._id}`}>
                    <button
                    
                    className="bg-[#D1A054] p-2 rounded-[5px] cursor-pointer "
                  >
                    <FaPen size={25} color="#FFF"></FaPen>
                  </button>
                    </Link>
                  
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

export default ManageItems;
