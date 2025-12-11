import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, postTasks } from "../redux/todo/todo.thunk";
import Loader from "../components/Loader";
import TaskCards from "../components/TaskCards";
import MyForm from "../components/Form";

const FormTasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  const { todoList, loading, error } = useSelector((state) => state.todo);

  const onSubmit = (input) => {
    dispatch(postTasks({ name: input, isCompleted: false }));
  };
  const completedTasks = useMemo(() => {
    const filteredTasks = todoList.filter((el) => el.isCompleted == true);
    return filteredTasks;
  }, [todoList]);
  const nonCompletedTasks = useMemo(() => {
    const filteredTasks = todoList.filter((el) => el.isCompleted == false);
    return filteredTasks;
  }, [todoList]);

  if (loading)
    return (
      <div className="w-full h-dvh grid place-items-center">
        <Loader />
      </div>
    );
  if (error) return <h1>ERROR 404</h1>;
  return (
    <main className="flex flex-col items-center pt-3">
      <MyForm onSubmit={onSubmit} />
      <div className="flex gap-4">
        <TaskCards tasks={nonCompletedTasks} isCompleted={false} />
        <TaskCards tasks={completedTasks} isCompleted={true} />
      </div>
    </main>
  );
};

export default FormTasks;
