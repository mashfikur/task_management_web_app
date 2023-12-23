import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const AddTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user.uid)
  const [startDate, setStartDate] = useState(new Date());

  const { register, handleSubmit, control, reset } = useForm();

  const options = [
    { value: "low", label: "Low" },
    { value: "moderate", label: "Moderate" },
    { value: "high", label: "High" },
  ];

  const onSubmit = (data) => {
    const dateString = startDate;
    const dateObject = new Date(dateString);
    const milliseconds = dateObject.getTime();
    const taskInfo = {
      ...data,
      deadline: milliseconds,
      priority: data.priority.value,
      userid: user.uid,
      status: "todo",
    };

    // adding the task info to database
    axiosSecure
      .post("/api/v1/user/add-task", taskInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Task Added to your list");
          reset();
          setStartDate(new Date());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="hero">
        <div className="flex flex-col w-[60%] gap-4 mt-4">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Add Task</h1>
          </div>
          <div className="card shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Task Name"
                  className="input input-bordered focus:outline-none"
                  required
                  {...register("task")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      required
                      className="border-2 border-[#D2D4D7] w-full rounded-lg "
                      showIcon
                      selected={startDate}
                      minDate={new Date()}
                      onChange={(date) => {
                        field.onChange(date);
                        setStartDate(date);
                      }}
                    />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>

                <Controller
                  name="priority"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} options={options} required />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="resize-none border-2 border-[#D2D4D7] px-4 py-2 rounded-lg"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Task Description"
                  {...register("description")}
                  required
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
