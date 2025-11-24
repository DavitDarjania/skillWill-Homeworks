import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [inputVal, setInputVal] = useState("");
  const { taskId } = useParams();
  const navigate = useNavigate();
  console.log(taskId);

  const onUpdate = (event) => {
    event.preventDefault();
    fetch(`https://691e0824bb52a1db22bcd3fd.mockapi.io/todo/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputVal, isCompleted: false }),
    });
    setInputVal("");
    navigate("/");
  };
  return (
    <main className="flex flex-col items-center mt-5">
      {" "}
      <form
        className="border-green-700 border rounded-md p-3 bg-green-400 flex items-center shadow-md shadow-gray-400 hover:shadow-lg transition-shadow duration-200"
        action=""
      >
        <input
          onChange={(event) => setInputVal(event.target.value)}
          className="bg-white me-3 rounded-sm py-1 px-2 border border-green-700"
          type="text"
          placeholder="Input New Task..."
          value={inputVal}
        />
        <button
          onClick={onUpdate}
          type="submit"
          className="flex items-center justify-center text-sm bg-green-300 p-2 hover:bg-green-50 rounded-md active:bg-green-800 transition-colors duration-100"
        >
          Update
        </button>
      </form>
    </main>
  );
};

export default Edit;
