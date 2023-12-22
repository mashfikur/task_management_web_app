const AddTask = () => {
  return (
    <div>
      <div className="hero">
        <div className="flex flex-col w-[60%] gap-12 mt-12">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Add Task</h1>
          </div>
          <div className="card shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Task Name"
                  className="input input-bordered focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <select name="" id="">
                  <option value="low">Low</option>
                  <option value="low">Low</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="resize-none border-2 border-black rounded-lg"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#3389FF] hover:bg-[#3389FF] text-white">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
