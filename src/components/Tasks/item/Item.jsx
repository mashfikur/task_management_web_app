import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

const Item = ({ task, id }) => {
  return (
    <Draggable draggableId={task._id} index={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className=" hover:cursor-move bg-white shadow-xl text-black rounded-lg p-2"
        >
          <h3 className="capitalize text-lg font-bold"> {task.task}</h3>
          <p className="text-gray-400"> {task.description} </p>
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
