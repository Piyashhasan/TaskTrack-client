import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="bg-red-300 h-100vh">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
