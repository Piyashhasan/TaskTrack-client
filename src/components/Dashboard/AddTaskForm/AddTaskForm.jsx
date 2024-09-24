const AddTaskForm = () => {
  return (
    <div className="px-5 pb-5">
      <form className="flex flex-col gap-4" action="">
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="title">
            Title
          </label>
          <input
            className="border py-2 px-3 bg-[#F9F9F9] text-[14px] rounded-md"
            placeholder="Task Title"
            type="text"
            name=""
            id=""
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
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black" htmlFor="priority">
            Select Priority
          </label>
          <select
            className="bg-[#F9F9F9] py-2 px-3 text-[14px] rounded-md border cursor-pointer"
            name="priority"
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
    </div>
  );
};

export default AddTaskForm;
