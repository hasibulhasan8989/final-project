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
import Users from "../Pages/DashBoard/Users/Users";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateMenuItem from "../Pages/DashBoard/UpdateMenu/UpdateMenuItem";

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
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      // user route
      {
        path:'my-cart',
        element:<MyCart></MyCart>
      },

      // admin route
     
      {
        path:'users',
        element:<AdminRoute><Users></Users></AdminRoute>
      },
      
      {
        path:'manage-items',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'update-item/:id',
        element:<AdminRoute><UpdateMenuItem></UpdateMenuItem></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        
      },

    ]
  }
]);