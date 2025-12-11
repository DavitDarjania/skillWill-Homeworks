import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTasks } from "../redux/todo/todo.thunk";

const MyForm = ({ onSubmit, action }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
    if (action) action("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border transition-shadow shadow-md hover:shadow-lg flex gap-2 items-center border-teal-400 rounded-lg bg-teal-600 w-fit py-2 px-2"
      action=""
    >
      <input
        className="rounded-lg bg-teal-100 pt-1 px-2"
        type="text"
        placeholder="Input New Task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-teal-400 transition-colors w-6 h-6 rounded-full hover:bg-teal-500"
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default MyForm;
