import TaskSection from "../../components/Tasks/TaskSection/TaskSection";
import { DragDropContext } from "react-beautiful-dnd";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";

const common = "rounded-xl p-2";

const MyTasks = () => {
  const axiosSecure = useAxiosSecure();
  const [statusUpdated, setStatusUpdated] = useState(false);

  const onDragEnd = (result) => {
    const { draggableId, destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //updating task status
    axiosSecure
      .patch(
        `/api/v1/update-task-status?id=${draggableId}&status=${destination.droppableId}`
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Task Status Changed");
          setStatusUpdated(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div className="grid grid-cols-3 gap-4 h-[75vh] mt-2 overflow-y-auto ">
          <div
            className={`${common} bg-neutral text-white h-[75vh] overflow-auto `}
          >
            <TaskSection
              statusUpdated={statusUpdated}
              setStatusUpdated={setStatusUpdated}
              section={"To-Do"}
              query={"todo"}
            ></TaskSection>
          </div>
          <div
            className={`${common} bg-yellow-500 text-white h-[75vh] overflow-auto`}
          >
            <TaskSection
              statusUpdated={statusUpdated}
              setStatusUpdated={setStatusUpdated}
              section={"On Going"}
              query={"ongoing"}
            ></TaskSection>
          </div>
          <div className={`${common}  text-white bg-[#12A150]`}>
            {" "}
            <TaskSection
              statusUpdated={statusUpdated}
              setStatusUpdated={setStatusUpdated}
              section={"Completed"}
              query={"completed"}
            ></TaskSection>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default MyTasks;
