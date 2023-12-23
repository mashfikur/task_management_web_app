import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { TbCalendarDue } from "react-icons/tb";

const Item = ({ task, id }) => {
  return (
    <Draggable draggableId={`${task._id}`} index={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className=" hover:cursor-move bg-white shadow-xl text-black rounded-lg p-2 "
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
        </div>
      )}
    </Draggable>
  );
};

Item.propTypes = {
  task: PropTypes.object,
  id: PropTypes.number,
};

export default Item;
