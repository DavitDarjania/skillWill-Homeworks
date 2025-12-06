import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tasks from "./Tasks";

const TasksPage = () => {
  const { todoList } = useSelector((state) => state.todo);
  return (
    <div className="mx-auto flex flex-col items-center w-[400px] border border-cyan-400 bg-green-400 gap-2">
      <Link className="bg-cyan-500 rounded-md px-3 mt-3" to={"/"}>
        Create Task
      </Link>
      {todoList.map((el, i) => (
        <Tasks key={i} name={el.name} status={el.status} id={el.id} />
      ))}
    </div>
  );
};

export default TasksPage;
