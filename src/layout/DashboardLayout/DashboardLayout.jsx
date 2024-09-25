import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashNav from "../../components/Dashboard/DashNav/DashNav";
import AsideBar from "../../components/Dashboard/AsideBar/AsideBar";
import { useGetAllTasksQuery } from "../../services/tasksApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAllTasks } from "../../features/task/tasksSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllTasksQuery({});

  useEffect(() => {
    if (data) {
      dispatch(setAllTasks(data?.tasks));
    }
  }, [data, dispatch]);

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
