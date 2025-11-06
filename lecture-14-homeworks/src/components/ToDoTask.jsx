import React from "react";

const ToDoTask = ({ number, task, index, action }) => {
  console.log("ToDoTask");

  return (
    <div className="task" key={number}>
      <p>
        {index}: {task}
      </p>
      <button onClick={() => action(number)}>complete</button>
    </div>
  );
};

export default React.memo(ToDoTask);
