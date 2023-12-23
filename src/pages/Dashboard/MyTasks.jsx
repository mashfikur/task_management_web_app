const MyTasks = () => {
  return (
    <div>
      <h3>Welcome to my tasks</h3>
      <div className="grid grid-cols-3 gap-4 h-[70vh] overflow-y-auto ">
        <div className="border-2">todo</div>
        <div className="border-2">ongoing</div>
        <div className="border-2">completed</div>
      </div>
    </div>
  );
};

export default MyTasks;
