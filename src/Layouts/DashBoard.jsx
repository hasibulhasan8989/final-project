import { FaBook, FaCalendar, FaCommentDots, FaHome, FaWallet } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

import { ImSpoonKnife } from "react-icons/im";

import { MdEditCalendar } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { MdEmail } from "react-icons/md";


import { FaCartShopping, FaListCheck, FaShop } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const { cart } = useCart();
  const {isAdmin}=useAdmin()
  
  
  return (
    <div className="flex md:flex-row flex-col">
      <div className="">
        <div className="drawer   lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn bg-[#D1A054] drawer-button lg:hidden"
            >
              Open Dashboard
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu cinzel text-xl bg-[#D1A054] text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <div className="flex flex-col mb-6 justify-center items-center">
                <Link
                  to={"/"}
                  className="cinzel cursor-pointer text-2xl font-medium "
                >
                  BISTRO BOSS
                </Link>
                <span className="tracking-wider">Restaurant</span>
              </div>

              {
                isAdmin ?<>
                {/* admin Panel */}
                <li>
                <Link to={'/dashboard/adminHome'}>
                  {" "}
                  <FaHome size={30}></FaHome> Admin Home
                </Link>
              </li>
              <li>
                <NavLink to={'/dashboard/add-items'}>
                  {" "}
                  <ImSpoonKnife size={25}></ImSpoonKnife> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/manage-items'}>
                  {" "}
                  <FaListCheck size={25}></FaListCheck> Manage Items
                </NavLink>
              </li>
              <li>
                <Link >
                  {" "}
                  <FaBook size={25}></FaBook> Manage Booking 
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/users'}>
                  {" "}
                  <IoIosPeople size={25}></IoIosPeople> All Users
                </Link>
              </li>
              
                </> :<>
                {/* normal user */}
                <li>
                <Link to={'/dashboard/userHome'}>
                  {" "}
                  <FaHome size={30}></FaHome> User Home
                </Link>
              </li>
              <li>
                <Link>
                  {" "}
                  <FaCalendar size={25}></FaCalendar> Reservation
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/payment-history'}>
                  {" "}
                  <FaWallet size={25}></FaWallet> Payment History
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/my-cart"}>
                  {" "}
                  <FaCartShopping size={25}></FaCartShopping> My Cart (
                  {cart.length}){" "}
                </Link>
              </li>
              <li>
                <Link>
                  {" "}
                  <FaCommentDots size={25}></FaCommentDots> Add Review
                </Link>
              </li>
              <li>
                <Link>
                  {" "}
                  <MdEditCalendar size={25}></MdEditCalendar> My Booking
                </Link>
              </li>
                </>
              }


              <p
                className="divider
"
              ></p>
              <li>
                <Link to={'/'}>
                  {" "}
                  <FaHome size={25}></FaHome> Home
                </Link>
              </li>
              <li>
                <Link to={'/menu'}>
                  {" "}
                  <CiBoxList size={25}></CiBoxList> Menu
                </Link>
              </li>
              <li>
                <Link to={'/our-shop/salad'}>
                  {" "}
                  <FaShop size={25} ></FaShop>Shop
                </Link>
              </li>
              <li>
                <Link to={'/contact-us'}>
                  {" "}
                  <MdEmail size={25} ></MdEmail>Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grow container mx-auto px-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
