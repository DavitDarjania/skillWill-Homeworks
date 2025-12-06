import { useSelector } from "react-redux";

const TasksPage = () => {
  const { todoList } = useSelector((state) => state.todo);
  return (
    <div>
      {todoList.map((el) => (
        <TasksPage title={el.name} id={el.id} />
      ))}
    </div>
  );
};

export default TasksPage;
