import { useEffect, useState } from "react";
import { useUpdateTaskMutation } from "../../../services/tasksApi";
import toast from "react-hot-toast";

const TaskEditForm = ({ setVisible, task }) => {
  const [updateTask, { isLoading, isSuccess, isError }] =
    useUpdateTaskMutation();

  // --- form data state ---
  const [formData, setFormData] = useState({
    id: task?._id,
    title: task?.title || "",
    description: task?.description || "",
    priority: task?.priority || "low",
    dueDate: task?.dueDate
      ? new Date(task.dueDate).toISOString().split("T")[0]
      : "",
    completed: task?.completed ? "true" : "false",
  });

  //   --- handle input change ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   --- handle form submit ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...formData,
      completed: formData.completed === "true",
    };

    if (taskData) {
      const res = await updateTask(taskData);
      if (res) {
        setVisible(false);
      }
    }

    setFormData({
      title: "",
      description: "",
      priority: "",
      dueDate: "",
      completed: "",
    });
  };

  // --- Toast notifications ---
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading ...", { id: "updateTask" });
    }
    if (!isLoading && isError) {
      toast.error("Task not update.", { id: "updateTask" });
    }
    if (isSuccess) {
      toast.success("Updated Task!", { id: "updateTask" });
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="px-5 pb-5">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="title">
            Title
          </label>
          <input
            className="border py-2 px-3 bg-[#F9F9F9] text-[14px] rounded-md"
            placeholder="Task Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="description">
            Description
          </label>
          <textarea
            className="bg-[#F9F9F9] py-2 px-3 rounded-md border text-[14px] resize-none"
            name="description"
            placeholder="Task Description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="priority">
            Select Priority
          </label>
          <select
            className="bg-[#F9F9F9] py-2 px-3 text-[14px] rounded-md border cursor-pointer"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="dueDate">
            Due Date
          </label>
          <input
            className="bg-[#F9F9F9] py-2 px-3 text-[14px] rounded-md border"
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={(e) =>
              setFormData({ ...formData, dueDate: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="completed">
            Task Completed
          </label>
          <div className="flex items-center justify-between bg-[#F9F9F9] p-2 rounded-md border">
            <label className="text-[14px]" htmlFor="completed">
              Completed
            </label>
            <select
              className="bg-[#F9F9F9] text-[14px] py-2 px-3 rounded-md border cursor-pointer"
              name="completed"
              value={formData.completed}
              onChange={handleChange}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className={`text-white text-[14px] py-2 rounded-md w-full hover:bg-blue-500 transition duration-200 ease-in-out bg-green-400`}
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default TaskEditForm;
