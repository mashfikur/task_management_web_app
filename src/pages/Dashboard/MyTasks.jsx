import Todo from "../../components/Tasks/todo/Todo";
import { DragDropContext } from "react-beautiful-dnd";

const onDragEnd = (result) => {
  console.log(result)
  console.log("done");
};

const MyTasks = () => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div className="grid grid-cols-3 gap-4 h-[75vh] mt-2 overflow-y-auto ">
          <div className="border-2 rounded-xl p-2">
            <Todo></Todo>
          </div>
          <div className="border-2 rounded-xl p-2">ongoing</div>
          <div className="border-2 rounded-xl p-2">completed</div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default MyTasks;
