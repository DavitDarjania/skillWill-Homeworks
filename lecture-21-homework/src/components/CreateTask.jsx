import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/todo/todo.action";

const CreateTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(input));
    setInput("");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="border-solid mx-auto bg-cyan-600 flex items-center rounded-md border w-fit px-3 py-1 mt-3"
    >
      <input
        className="bg-cyan-50 px-1 py-0.5 rounded-sm"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Input Task..."
      />
      <button
        type="submit"
        className="w-[22px] h-[22px] ms-2 rounded-full pb-0.5 flex justify-center items-center bg-cyan-300"
      >
        +
      </button>
    </form>
  );
};

export default CreateTask;
