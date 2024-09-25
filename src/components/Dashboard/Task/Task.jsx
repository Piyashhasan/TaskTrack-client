import TaskItems from "../TaskItems/TaskItems";

const Task = ({ filterTasks }) => {
  return (
    <div className="mt-5">
      <TaskItems filterTasks={filterTasks} />
    </div>
  );
};

export default Task;
