import React, { useEffect, useState, useRef } from "react";
import {
  ProgressColumns,
  ProgressDialog,
  ProgressWrapper,
} from "./styledComponents/Progress";
import { BodyStyles } from "./styledComponents/BodyWrapper";
import "./reset.css";
import { BackLog, BackLogMiddleLine } from "./styledComponents/Progress";
import Card from "./components/Card";

const App = () => {
  const [allTasks, setAllTasks] = useState([
    {
      id: 1,
      task: "Go for a run",
      color: "rgba(255, 223, 0, 1)",
      status: "backlog",
    },
    {
      id: 2,
      task: "Write a blog post",
      color: "rgba(0, 123, 255, 1)",
      status: "inProgress",
    },
    {
      id: 3,
      task: "Cook dinner",
      color: "rgba(40, 167, 69, 1)",
      status: "done",
    },
  ]);

  const [activeStatus, setActiveStatus] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const dialogRef = useRef(null);

  const openDialog = (status) => {
    setActiveStatus(status);
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
    setInputValue("");
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      task: inputValue,
      color:
        activeStatus === "backlog"
          ? "rgba(255, 223, 0, 1)"
          : activeStatus === "inProgress"
          ? "rgba(0, 123, 255, 1)"
          : "rgba(40, 167, 69, 1)",
      status: activeStatus,
    };

    setAllTasks((prev) => [...prev, newTask]);
    closeDialog();
  };

  const backlogTasks = allTasks.filter((t) => t.status === "backlog");
  const inProgressTasks = allTasks.filter((t) => t.status === "inProgress");
  const doneTasks = allTasks.filter((t) => t.status === "done");

  return (
    <BodyStyles>
      <ProgressWrapper>
        {[
          { title: "Backlog", data: backlogTasks, status: "backlog" },
          { title: "In Progress", data: inProgressTasks, status: "inProgress" },
          { title: "Done", data: doneTasks, status: "done" },
        ].map((col) => (
          <ProgressColumns key={col.status}>
            <BackLog>
              <h2>{col.title}</h2>
              <BackLogMiddleLine />
              <h2>{col.data.length}</h2>
            </BackLog>
            <Card
              cardState={col.data}
              onAddClick={() => openDialog(col.status)}
            />
          </ProgressColumns>
        ))}
      </ProgressWrapper>

      <ProgressDialog
        ref={dialogRef}
        onClick={(e) => {
          const rect = dialogRef.current.getBoundingClientRect();
          const outside =
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom;
          if (outside) closeDialog();
        }}
      >
        <form onSubmit={addTask}>
          <h3>Add Task to {activeStatus}</h3>
          <input
            type="text"
            placeholder="Enter task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
          <button type="button" onClick={closeDialog}>
            Cancel
          </button>
        </form>
      </ProgressDialog>
    </BodyStyles>
  );
};

export default App;
