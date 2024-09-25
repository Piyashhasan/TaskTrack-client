import { useEffect, useState } from "react";
import { useCreateTaskMutation } from "../../../services/tasksApi";
import toast from "react-hot-toast";

const AddTaskForm = ({ setVisible }) => {
  const [createTask, { isLoading, isSuccess, isError }] =
    useCreateTaskMutation();

  // --- form state ---
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "low",
    dueDate: "",
    completed: "",
  });

  // --- handle form input change value ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- handle form submit ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...formData,
      completed: formData.completed === "true",
    };

    if (taskData) {
      const res = await createTask(taskData);
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

  // --- handle toast notifications ---
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading ...", { id: "createTask" });
    }
    if (!isLoading && isError) {
      toast.error("Task not added.", { id: "createTask" });
    }
    if (isSuccess) {
      toast.success("Created Task!", { id: "createTask" });
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="px-5 pb-5">
      {/* --- form start --- */}
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
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="description">
            Description
          </label>
          <textarea
            className="bg-[#F9F9F9] py-2 px-3 rounded-md border text-[14px] resize-none"
            name="description"
            id="description"
            placeholder="Task Description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="priority">
            Select Priority
          </label>
          <select
            className="bg-[#F9F9F9] py-2 px-3 text-[14px] rounded-md border cursor-pointer"
            name="priority"
            id="priority"
            value={formData.priority}
            onChange={handleChange}
            required
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
            id="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
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
            <div>
              <select
                className="bg-[#F9F9F9] text-[14px] py-2 px-3 rounded-md border cursor-pointer"
                name="completed"
                id="completed"
                value={formData.completed}
                onChange={handleChange}
                required
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`text-white text-[14px] py-2 rounded-md w-full hover:bg-blue-500 transition duration-200 ease-in-out bg-green-400`}
        >
          Create Task
        </button>
      </form>
      {/* --- form end --- */}
    </div>
  );
};

export default AddTaskForm;
