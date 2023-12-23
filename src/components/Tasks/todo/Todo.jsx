import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Droppable } from "react-beautiful-dnd";
import Item from "../item/Item";

const Todo = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(
          `/api/v1/user/get-tasks/${user.uid}?status=todo`
        );

        return res.data;
      }
    },
  });

  return (
    <div>
      <h3 className="font-semibold text-3xl">To-Do</h3>

      {data && (
        <Droppable droppableId="to-do">
          {(provided) => (
            <div
              className=" "
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}

              {data && (
                <div className="flex flex-col gap-4 mt-4">
                  {data.map((task, idx) => (
                    <Item task={task} key={idx} id={idx}></Item>
                  ))}
                </div>
              )}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default Todo;
