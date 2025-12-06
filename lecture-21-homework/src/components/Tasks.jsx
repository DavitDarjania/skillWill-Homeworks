import { useDispatch } from "react-redux";
import NotDoneIcon from "../assets/close.png";
import DoneIcon from "../assets/correct.png";
import { deleteTodoAction, updateTodoAction } from "../redux/todo/todo.action";

const Tasks = ({ name, status, id }) => {
  const dispatch = useDispatch();
  const onDone = (id) => {
    dispatch(updateTodoAction(id));
  };
  const onRemove = (id) => {
    dispatch(deleteTodoAction(id));
  };
  return (
    <div className="w-[380px] flex justify-between rounded-md py-2 px-3 bg-[#8888889a]">
      <div className="flex items-center">
        <img
          className="w-[22px] h-[22px] me-2"
          src={status ? DoneIcon : NotDoneIcon}
          alt=""
        />
        <p>{name}</p>
      </div>
      <div className="flex gap-1 items-center">
        <button
          onClick={() => onDone(id)}
          className="cursor-pointer bg-emerald-700 text-white p-1 rounded-sm"
        >
          {status ? "Undone" : "Done"}
        </button>
        <button
          onClick={() => onRemove(id)}
          className="w-[30px] h-[30px] ms-2 rounded-full pb-0.5 flex justify-center items-center bg-amber-500 text-white"
        >
          D
        </button>
      </div>
    </div>
  );
};

export default Tasks;
