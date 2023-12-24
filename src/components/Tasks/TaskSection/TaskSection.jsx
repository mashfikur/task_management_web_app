import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Droppable } from "react-beautiful-dnd";
import Item from "../item/Item";
import PropTypes from "prop-types";
import { useEffect } from "react";

const TaskSection = ({ section, query, statusUpdated, setStatusUpdated }) => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data, refetch, isPending, isFetching, isError } = useQuery({
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

  useEffect(() => {
    if (statusUpdated) {
      refetch();
      setStatusUpdated(false);
    }
  }, [statusUpdated, setStatusUpdated, refetch]);

  return (
    <div>
      <h3 className="font-semibold text-3xl">{section}</h3>

      {isPending ? (
        <div>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        data && (
          <Droppable droppableId={query}>
            {(provided) => (
              <div
                className=" h-[68vh] overflow-auto "
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {provided.placeholder}

                {isFetching ? (
                  <div>
                    <span className="loading loading-dots loading-lg"></span>
                  </div>
                ) : isError ? (
                  <div>Error fetching data</div>
                ) : (
                  data && (
                    <div className="flex flex-col gap-4 mt-4">
                      {data.map((task, idx) => (
                        <Item
                          task={task}
                          refetch={refetch}
                          key={idx}
                          id={idx}
                        ></Item>
                      ))}
                    </div>
                  )
                )}
              </div>
            )}
          </Droppable>
        )
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
