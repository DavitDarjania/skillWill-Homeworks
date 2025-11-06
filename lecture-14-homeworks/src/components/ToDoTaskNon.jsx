import React from "react";
const ToDoTaskNon = ({ number, task, index, action, actionNon }) => {
  console.log("ToDoTaskNon");

  return (
    <div className="task" key={number}>
      <p>
        {index}: {task}
      </p>
      <button onClick={() => actionNon(number)}>Non Completed</button>
      <button onClick={() => action(number)}>Remove</button>
    </div>
  );
};

export default React.memo(ToDoTaskNon);
