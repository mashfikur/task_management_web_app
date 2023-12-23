import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { TbCalendarDue } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Item = ({ task, id, refetch }) => {
  const axiosSecure = useAxiosSecure();

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

  return (
    <Draggable draggableId={`${task._id}`} index={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="  relative bg-white shadow-xl text-black rounded-lg p-2 "
        >
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="capitalize text-xl font-bold "> {task.task}</h3>
              <h3 className="text-xs flex items-center font-bold text-gray-400 ">
                <TbCalendarDue className="text-xs" />
                {new Date(task.deadline).toLocaleDateString()}{" "}
              </h3>
            </div>
            <p className="text-gray-400 text-lg "> {task.description} </p>
          </div>

          <div className="flex absolute cursor-pointer right-4 text-lg gap-2 bottom-3">
            <FaEdit />
            <MdDelete onClick={() => handleDelete(task._id)} />
          </div>
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
