import { useCallback, useRef, useState } from "react";
import ToDoTask from "./ToDoTask";
import ToDoTaskNon from "./ToDoTaskNon";

const ToDoList = () => {
  const [completedTasks, setCompletedTasks] = useState([
    { number: 2, task: "Make Homework" },
    { number: 3, task: "Make Food" },
  ]);
  const [nonCompletedTasks, setNonCompletedTasks] = useState([
    { number: 1, task: "Learn React" },
  ]);
  const [counter, setCounter] = useState(4);
  const [inputVal, setInputVal] = useState("");

  const onChange = (event) => {
    setInputVal(event.target.value);
  };
  const onAdd = (event) => {
    event.preventDefault();
    setNonCompletedTasks((prevState) => {
      return [...prevState, { number: counter, task: inputVal }];
    });
    setCounter(counter + 1);
  };
  const onComplete = useCallback(
    (number) => {
      const prevTask = nonCompletedTasks.find((el) => el.number === number);
      const newArr = nonCompletedTasks.filter((el) => el.number !== number);
      setCompletedTasks((prevState) => [...prevState, prevTask]);
      setNonCompletedTasks(newArr);
    },
    [nonCompletedTasks]
  );
  const onNonComplete = useCallback(
    (number) => {
      const prevTask = completedTasks.find((el) => el.number === number);
      const newArr = completedTasks.filter((el) => el.number !== number);
      setNonCompletedTasks((prevState) => [...prevState, prevTask]);
      setCompletedTasks(newArr);
    },
    [completedTasks]
  );
  const onRemove = useCallback(
    (number) => {
      const newArr = completedTasks.filter((el) => el.number !== number);
      setCompletedTasks(newArr);
    },
    [completedTasks, nonCompletedTasks]
  );
  return (
    <div className="tasks_box">
      <form className="form">
        <input onChange={onChange} type="text" value={inputVal} />
        <button onClick={onAdd} type="submit">
          Add
        </button>
      </form>
      <div className="non_completed_tasks">
        <h3>Non Completed Tasks</h3>
        {nonCompletedTasks.map((el, index) => (
          <ToDoTask
            key={el.number}
            number={el.number}
            task={el.task}
            index={index + 1}
            action={onComplete}
          />
        ))}
      </div>
      <div className="completed_tasks">
        <h3>Completed Tasks</h3>
        {completedTasks.map((el, index) => (
          <ToDoTaskNon
            key={el.number}
            number={el.number}
            task={el.task}
            index={index + 1}
            actionNon={onNonComplete}
            action={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
