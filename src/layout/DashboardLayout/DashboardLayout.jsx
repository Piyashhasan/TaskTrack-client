import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashNav from "../../components/Dashboard/DashNav/DashNav";
import AsideBar from "../../components/Dashboard/AsideBar/AsideBar";
import { useGetAllTasksQuery } from "../../services/tasksApi";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setAllTasks } from "../../features/task/tasksSlice";
import ToggleAsideBar from "../../shared/ToggleAsideBar/ToggleAsideBar";

const Dashboard = () => {
  const [visibleRight, setVisibleRight] = useState(false);
  const dispatch = useDispatch();
  const { data } = useGetAllTasksQuery({});

  useEffect(() => {
    if (data) {
      dispatch(setAllTasks(data?.tasks));
    }
  }, [data, dispatch]);

  return (
    <>
      <DashNav setVisibleRight={setVisibleRight} />
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-[#F9F9F9]">
          <Outlet />
        </div>
        <div className="hidden lg:block">
          <AsideBar />
        </div>
      </div>
      <ToggleAsideBar
        visibleRight={visibleRight}
        setVisibleRight={setVisibleRight}
      />
    </>
  );
};

export default Dashboard;
