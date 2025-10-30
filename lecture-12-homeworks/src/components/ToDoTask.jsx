const ToDoTask = ({ number, task, index, action }) => {
  return (
    <div className="task" key={number}>
      <p>
        {index}: {task}
      </p>
      <button onClick={() => action(number)}>complete</button>
    </div>
  );
};

export default ToDoTask;
