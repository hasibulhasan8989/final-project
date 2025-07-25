import { useLoaderData } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle";
import Loader from "../../../Components/Loader";

const api = import.meta.env.VITE_IMAGE_API;
const url = `https://api.imgbb.com/1/upload?key=${api}`;

const UpdateMenuItem = () => {
  const menu = useLoaderData();
  const {name,category,recipe,price,_id}=menu
  const { register, handleSubmit,  } = useForm();
  const axiosSecure = useAxios();
  const [loading, setLoading] = useState(false);

   const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);
        

    try {
      const result = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (result.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: result.data.data.display_url,
        };

        const res = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        if (res.data) {
            
          setLoading(false);
          
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} Updated SuccessFully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch  {
      setLoading(false);
       Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${data.name} failed to post`,
            showConfirmButton: false,
            timer: 1200,
          });
    }
    
  };


  
  return (
    <div>
      <SectionTitle
        time={`---What's new?---`}
        title={"ADD AN ITEM"}
      ></SectionTitle>
      {loading ? <Loader></Loader> : ""}
      {/* form */}
      <div className="max-w-4xl  mx-auto bg-gray-100 p-8 md:p-22 rounded-md shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Recipe Name */}
          <div>
            <label className="block font-semibold mb-1">
              Recipe name<span className="text-red-500">*</span>
            </label>
            <input
             defaultValue={name}
              {...register("name")}
              type="text"
              placeholder="Recipe name"
              className="w-full px-4 py-2 border input border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Category & Price */}
          <div className="md:flex gap-6">
            <div className="md:flex-1">
              <label className="block font-semibold mb-1">
                Category<span className="text-red-500">*</span>
              </label>
              <select
              defaultValue={category}
                {...register("category")}
                className="w-full px-4 py-2 border input border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soups</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="md:flex-1 mt-4 md:mt-0">
              <label className="block font-semibold mb-1">
                Price<span className="text-red-500">*</span>
              </label>
              <input
               defaultValue={price}
                {...register("price")}
                type="number"
                placeholder="Price"
                className="w-full  input px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="block font-semibold mb-1">
              Recipe Details<span className="text-red-500">*</span>
            </label>
            <textarea
            defaultValue={recipe}
              {...register("recipe")}

              placeholder="Recipe Details"
              rows="5"
              className="w-full  px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="flex items-center space-x-4">
            <input
            required
              {...register("image")}
              type="file"
              className="file:mr-4 file:py-2 input file:px-4 file:rounded file:border-0 file:text-sm file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-6 py-2 rounded flex items-center"
            >
              Add Item 🍽️
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMenuItem;
