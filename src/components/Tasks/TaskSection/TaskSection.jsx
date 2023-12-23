import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Droppable } from "react-beautiful-dnd";
import Item from "../item/Item";
import PropTypes from "prop-types";

const TaskSection = ({ section, query, statusUpdated, setStatusUpdated }) => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data, refetch } = useQuery({
    queryKey: [query, statusUpdated],
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(
          `/api/v1/user/get-tasks/${user.uid}?status=${query}`
        );

        return res.data;
      }
    },
  });

  if (statusUpdated) {
    refetch();
    //es-lint
    setStatusUpdated(false);
  }

  return (
    <div>
      <h3 className="font-semibold text-3xl">{section}</h3>

      {data && (
        <Droppable droppableId={query}>
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

export default TaskSection;

TaskSection.propTypes = {
  section: PropTypes.string,
  query: PropTypes.string,
  statusUpdated: PropTypes.bool,
  setStatusUpdated: PropTypes.func,
};
