import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  getTasks,
  toggleCompletion,
} from "../redux/todo/todo.thunk";
import { useNavigate } from "react-router-dom";

const TaskCards = ({ tasks, isCompleted }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <article className="bg-teal-300 w-[350px] min-h-[400px] mt-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col gap-3 p-2">
      <h3 className="mx-auto text-[20px] mt-2 bg-teal-50 w-fit pt-1 px-2 rounded-lg shadow-white shadow-md hover:shadow-lg transition-shadow">
        {isCompleted ? "Completed" : "Non Completed"}
      </h3>
      {tasks.map((el) => (
        <div
          onClick={() => dispatch(toggleCompletion({ id: el.id, isCompleted }))}
          className="flex justify-between bg-teal-100 p-2 rounded-md"
          key={el.id}
        >
          <p className="">{el.name}</p>
          <div className="flex gap-3">
            <button
              className={`rounded-full w-7 h-7 cursor-pointer ${
                isCompleted ? "bg-red-400" : "bg-green-400"
              }`}
            >
              {isCompleted ? "U" : "D"}
            </button>
            <button
              onClick={() => {
                navigate(`/edit/${el.id}`);
              }}
              className="rounded-full w-7 h-7 bg-purple-400 cursor-pointer"
            >
              E
            </button>
            <button
              onClick={() => {
                dispatch(deleteTask(el.id));
              }}
              className="rounded-full w-7 h-7 bg-amber-500 cursor-pointer"
            >
              R
            </button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default React.memo(TaskCards);
