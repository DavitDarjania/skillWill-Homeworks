import { useEffect, useState } from "react";
import Tasks from "./Tasks";

const TaskWrapper = () => {
  const [tasks, setTasks] = useState([
    // { id: 1, name: "Do Homework", isCompleted: true },
    // { id: 2, name: "Do Homework2", isCompleted: false },
    // { id: 3, name: "Do Homework3", isCompleted: true },
    // { id: 4, name: "Do Homework4", isCompleted: false },
  ]);
  const [inputVal, setInputVal] = useState("");
  useEffect(() => {
    fetch("https://691e0824bb52a1db22bcd3fd.mockapi.io/todo/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
    fetch("https://691e0824bb52a1db22bcd3fd.mockapi.io/todo/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputVal, isCompleted: false }),
    })
      .then((res) => res.json())
      .then((data) => setTasks((prevState) => [data, ...prevState]));
  };

  return (
    <main className="flex flex-col items-center mt-5">
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
          onClick={onSubmit}
          type="submit"
          className="w-[30px] h-[30px] flex items-center justify-center text-2xl bg-green-300 rounded-full pb-1 hover:bg-green-50 active:bg-green-800 transition-colors duration-100"
        >
          +
        </button>
      </form>
      <div className="flex gap-5 pt-3">
        <article className="w-[350px] min-h-[450px] border bg-green-300 rounded-md shadow-md shadow-gray-400 hover:shadow-lg transition-shadow duration-200 px-4 pb-2">
          <h2 className="p-2 shadow-white shadow-md text-xl text-green-900 bg-green-100 w-fit mx-auto rounded-lg mt-2">
            Non Completed
          </h2>
          {tasks.map((el) => {
            if (!el.isCompleted) {
              return (
                <Tasks
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  isCompleted={el.isCompleted}
                />
              );
            }
          })}
        </article>
        <article className="w-[350px] min-h-[450px] border bg-green-300 rounded-md shadow-md shadow-gray-400 hover:shadow-lg transition-shadow duration-200 px-4">
          <h2 className="p-2 shadow-white shadow-md text-xl text-green-900 bg-green-100 w-fit mx-auto rounded-lg mt-2">
            Completed
          </h2>
          {tasks.map((el) => {
            if (el.isCompleted) {
              return (
                <Tasks
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  isCompleted={el.isCompleted}
                />
              );
            }
          })}
        </article>
      </div>
    </main>
  );
};

export default TaskWrapper;
