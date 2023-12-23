import Completed from "../../components/Tasks/completed/Completed";
import OnGoing from "../../components/Tasks/ongoing/Ongoing";
import Todo from "../../components/Tasks/todo/Todo";
import { DragDropContext } from "react-beautiful-dnd";

const onDragEnd = (result) => {
  console.log(result);
  console.log("done");
};

const MyTasks = () => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div className="grid grid-cols-3 gap-4 h-[75vh] mt-2 overflow-y-auto ">
          <div className=" rounded-xl p-2 bg-neutral text-white">
            <Todo></Todo>
          </div>
          <div className=" rounded-xl p-2 bg-yellow-500 ">
            <OnGoing></OnGoing>
          </div>
          <div className=" rounded-xl p-2 bg-[#12A150]">
            {" "}
            <Completed></Completed>{" "}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default MyTasks;
