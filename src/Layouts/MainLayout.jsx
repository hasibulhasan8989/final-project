import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
  const location = useLocation();
 

  const isLogin =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");

  return (
    <div className="inter">
      {isLogin || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
