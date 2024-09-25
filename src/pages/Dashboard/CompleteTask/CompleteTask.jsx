import Task from "../../../components/Dashboard/Task/Task";
import { useSelector } from "react-redux";

const CompleteTask = () => {
  const { allTasks } = useSelector((state) => state.tasks);

  const completeTask = allTasks?.filter((task) => task.completed === true);

  return (
    <div className="p-4 bg-[#EDEDED] rounded-t-[20px] h-[calc(100vh-90px)] overflow-y-scroll scrollbar-hide">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold leading-8 text-black">
          Complete Tasks
        </h2>
      </div>
      <Task filterTasks={completeTask} />
    </div>
  );
};

export default CompleteTask;
