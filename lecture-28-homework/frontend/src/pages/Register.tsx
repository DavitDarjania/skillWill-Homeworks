import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import type { IAuth } from "../interfaces/Auth";
import { axiosApi } from "../axios/axios";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const myForm = useForm<IAuth>();
  const navigate = useNavigate();
  const { register, handleSubmit } = myForm;
  const onSubmit = async (data: IAuth) => {
    try {
      console.log(JSON.stringify(data));
      const res = await axiosApi.post("/registration", { ...data });
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ marginTop: "20px", display: "flex", alignItems: "center" }}
    >
      <TextField
        id="login-email"
        label="Email"
        variant="outlined"
        type="email"
        {...register("email")}
      />
      <TextField
        id="login-password"
        label="Password"
        variant="outlined"
        type="password"
        {...register("password")}
      />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
};

export default Register;
