import { useSelector } from "react-redux";
import Task from "../../../components/Dashboard/Task/Task";

const PendingTask = () => {
  const { allTasks } = useSelector((state) => state.tasks);

  const pendingTask = allTasks?.filter((task) => task.completed === false);

  return (
    <div className="p-4 bg-[#EDEDED] rounded-t-[20px] h-[calc(100vh-118px)] sm:h-[calc(100vh-90px)] overflow-y-scroll scrollbar-hide">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold leading-8 text-black">
          Pending Tasks
        </h2>
      </div>
      <Task filterTasks={pendingTask} />
    </div>
  );
};

export default PendingTask;
