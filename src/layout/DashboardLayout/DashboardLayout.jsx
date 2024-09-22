import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashNav from "../../components/Dashboard/DashNav/DashNav";
import AsideBar from "../../components/Dashboard/AsideBar/AsideBar";

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-[#F9F9F9]">
          <Outlet />
        </div>
        <AsideBar />
      </div>
    </>
  );
};

export default Dashboard;
