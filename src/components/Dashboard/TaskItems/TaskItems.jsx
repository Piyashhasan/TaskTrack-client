import { FaRegEdit, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { formatDate } from "../../../utils/getRelativeTime";
import { useDeleteTaskMutation } from "../../../services/tasksApi";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Dialog } from "primereact/dialog";
import TaskEditForm from "../TaskEditForm/TaskEditForm";

const TaskItems = ({ filterTasks }) => {
  const [visible, setVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const dispatch = useDispatch();

  // --- delete task function call from rtq query ---
  const [deleteTask, { isLoading, isSuccess, isError }] =
    useDeleteTaskMutation();

  // --- dispatch deleteTask function ---
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  // --- Toast notifications ---
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading ...", { id: "deleteTask" });
    }
    if (!isLoading && isError) {
      toast.error("Task not deleted.", { id: "deleteTask" });
    }
    if (isSuccess) {
      toast.success("Delete Task!", { id: "deleteTask" });
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {filterTasks?.length > 0 ? (
        filterTasks?.map((task) => {
          return (
            <div key={task?._id}>
              <div className="relative bg-[#F9F9F9] p-5 rounded-lg h-[250px] z-10">
                <h5 className="text-xl font-bold leading-8">
                  {task?.completed ? <s>{task.title}</s> : task.title}
                </h5>
                <p className="text-[14px] mt-2">{task.description}</p>
                <div className="flex items-center justify-between w-full px-5 absolute bottom-3 left-0 right-0">
                  <p className="text-[#9CA3AF] text-[12px]">
                    {formatDate(task?.dueDate)}
                  </p>
                  <p
                    className={`text-[12px] font-semibold capitalize ${
                      task?.priority === "high"
                        ? "text-red-500"
                        : task?.priority === "medium"
                        ? "text-yellow-500"
                        : task?.priority === "low"
                        ? "text-green-500"
                        : ""
                    }`}
                  >
                    {task?.priority}
                  </p>
                  <div className="flex items-center gap-3">
                    <FaStar
                      className={` ${
                        task?.completed ? "text-orange-400" : "text-[#9CA3AF]"
                      }  text-[18px] cursor-pointer`}
                    />
                    <FaRegEdit
                      onClick={() => {
                        setSelectedTask(task);
                        setVisible(true);
                      }}
                      className="text-[#00A1F1] text-[18px] cursor-pointer"
                    />
                    <MdDelete
                      onClick={() => handleDeleteTask(task?._id)}
                      className="text-[#F65314] text-[20px] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <Dialog
                visible={visible}
                onHide={() => {
                  if (!visible) return;
                  setVisible(false);
                }}
                style={{ width: "35vw" }}
                breakpoints={{ "960px": "75vw", "641px": "100vw" }}
              >
                <TaskEditForm setVisible={setVisible} task={selectedTask} />
              </Dialog>
            </div>
          );
        })
      ) : (
        <div className="text-gray-500">
          <p>No tasks found...</p>
        </div>
      )}
    </div>
  );
};

export default TaskItems;
