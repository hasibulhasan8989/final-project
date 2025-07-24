import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import DashBoard from "../Layouts/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/Mycart";

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/our-shop/:category',
          element:<OurShop></OurShop>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
          
        },
        {
          path:'/contact-us',
          element:<ContactUs></ContactUs>
          
        }
    ]
  },
  {
    path:'dashboard',
    element:<DashBoard></DashBoard>,
    children:[
      {
        path:'my-cart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      }
    ]
  }
]);