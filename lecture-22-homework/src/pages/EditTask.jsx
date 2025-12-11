import React from "react";
import MyForm from "../components/Form";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/todo/todo.thunk";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const onSubmit = (newInput) => {
    dispatch(editTask({ id, input: newInput }));
  };
  return (
    <main className="flex flex-col items-center pt-3">
      <MyForm onSubmit={onSubmit} action={navigate} />
    </main>
  );
};

export default EditTask;
