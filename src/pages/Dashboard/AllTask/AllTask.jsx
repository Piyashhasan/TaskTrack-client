import { useSelector } from "react-redux";
import PriorityFilterBtn from "../../../components/Dashboard/PriorityFilterBtn/PriorityFilterBtn";
import Task from "../../../components/Dashboard/Task/Task";

const AllTask = () => {
  const { filterTasks } = useSelector((state) => state.tasks);

  return (
    <div className="p-4 bg-[#EDEDED] rounded-t-[20px] h-[calc(100vh-90px)] overflow-y-scroll scrollbar-hide">
      <div className="flex flex-wrap gap-y-3 items-center justify-between">
        <h2 className="text-[24px] font-bold leading-8 text-black">
          All Tasks
        </h2>
        <PriorityFilterBtn />
      </div>
      <Task filterTasks={filterTasks} />
    </div>
  );
};

export default AllTask;
