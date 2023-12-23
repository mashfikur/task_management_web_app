import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

const Item = ({ task, id }) => {
  console.log(task._id)
  return (
    <Draggable  draggableId={task._id} index={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="border-2 hover:cursor-move"
        >
          <h3 className="capitalize">
            {" "}
             {task.task}
          </h3>
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
