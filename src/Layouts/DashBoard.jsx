import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    
      <div className="flex">
        <div className="bg-[#D1A054] min-h-screen min-w-sm  ">
           
        </div>

        <div className="grow">
            <Outlet></Outlet>
        </div>
      </div>
    
  );
};

export default DashBoard;
