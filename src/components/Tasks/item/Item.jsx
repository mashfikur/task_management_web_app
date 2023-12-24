import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { TbCalendarDue } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCloseCircle } from "react-icons/io5";
import moment from "moment";

const Item = ({ task, id, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const [startDate, setStartDate] = useState(task.deadline);

  const { register, handleSubmit, control } = useForm();

  const options = [
    { value: "low", label: "Low" },
    { value: "moderate", label: "Moderate" },
    { value: "high", label: "High" },
  ];

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Do You want to delete the task?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/v1/user/delete-task/${_id}`).then((res) => {
          if (res.data.deletedCount) {
            toast.success("Deleted the task");
            refetch();
          }
        });
      }
    });
  };

  const handleUpdateTask = (data) => {
    const dateString = startDate;
    const dateObject = new Date(dateString);
    const milliseconds = dateObject.getTime();

    const taskInfo = {
      ...data,
      deadline: data.deadline ? milliseconds : task.deadline,
      priority: data.priority ? data.priority.value : task.priority,
    };

    //udpating the task
    axiosSecure
      .patch(`/api/v1/user/update-task/${task._id}`, taskInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Updated Task");
          document.getElementById(task._id).close();
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const taskPriority =
    task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

  return (
    <Draggable draggableId={`${task._id}`} index={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="  relative bg-white shadow-xl text-black rounded-lg p-2 "
        >
          {/* task card */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              {" "}
              <div
                className={`badge px-4  ${
                  task.priority === "low"
                    ? "badge-neutral"
                    : task.priority === "moderate"
                    ? "badge-accent"
                    : "badge-warning"
                } `}
              >
                {task.priority}
              </div>{" "}
              <h3 className="text-xs flex gap-1 items-center font-bold text-gray-400 ">
                <TbCalendarDue className="text-xs" />
                {moment(task.deadline).format("MMM Do , YYYY")}
              </h3>
            </div>
            <div className="flex justify-between gap-4 items-center">
              <h3 className="capitalize text-xl  font-bold "> {task.task}</h3>
            </div>
            <div className="text-lg flex items-center justify-between">
              {" "}
              <div className="text-gray-400   w-[70%] ">
                {task.description}
              </div>{" "}
              <div className="flex  text-lg gap-2  w-[30%]  justify-end ">
                <FaEdit
                  onClick={() => document.getElementById(task._id).showModal()}
                  className="cursor-pointer"
                />
                <MdDelete
                  className="cursor-pointer"
                  onClick={() => handleDelete(task._id)}
                />
              </div>
            </div>
          </div>

          {/* task updating modal */}
          <dialog id={task._id} className="modal">
            <div className="modal-box relative pt-12">
              <div className="">
                <form
                  className=" w-full"
                  onSubmit={handleSubmit(handleUpdateTask)}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Task Name</span>
                    </label>
                    <input
                      defaultValue={task.task}
                      type="text"
                      placeholder="Task Name"
                      className="input input-bordered focus:outline-none"
                      {...register("task")}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Deadline</span>
                    </label>
                    <Controller
                      name="deadline"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
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
                        <Select
                          {...field}
                          defaultValue={{
                            label: taskPriority,
                            value: task.priority,
                          }}
                          options={options}
                        />
                      )}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      className="resize-none border-2 border-[#D2D4D7] px-4 py-2 rounded-lg"
                      defaultValue={task.description}
                      cols="30"
                      rows="5"
                      placeholder="Task Description"
                      {...register("description")}
                    ></textarea>
                  </div>
                  <button className="btn mt-4 mx-auto flex flex-col items-center btn-success text-white">
                    Update
                  </button>
                </form>
                <div className="modal-action absolute top-0 right-6 ">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="">
                      <IoCloseCircle className="text-4xl text-red-700" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </Draggable>
  );
};

Item.propTypes = {
  task: PropTypes.object,
  id: PropTypes.number,
  refetch: PropTypes.func,
};

export default Item;
