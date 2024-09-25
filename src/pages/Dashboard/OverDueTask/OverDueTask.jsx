import { useSelector } from "react-redux";
import Task from "../../../components/Dashboard/Task/Task";

const OverDueTask = () => {
  const { allTasks } = useSelector((state) => state.tasks);
  const currentDate = new Date();

  const overdueTasks = allTasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    return dueDate < currentDate && !task.completed;
  });

  return (
    <div className="p-4 bg-[#EDEDED] rounded-t-[20px] h-[calc(100vh-90px)] overflow-y-scroll scrollbar-hide">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold leading-8 text-black">
          Overdue Tasks
        </h2>
      </div>
      <Task filterTasks={overdueTasks} />
    </div>
  );
};

export default OverDueTask;
