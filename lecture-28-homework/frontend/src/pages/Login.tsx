import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import type { IAuth } from "../interfaces/Auth";
import { $axios } from "../axios/axios";
import { useUserContext } from "../context/userAuth/auth";

const Login: React.FC = () => {
  const myForm = useForm<IAuth>();
  const { register, handleSubmit } = myForm;
  const { setUser, setToken } = useUserContext();
  const onSubmit = async (data: IAuth) => {
    try {
      console.log(JSON.stringify(data));
      const res = await $axios.post("/login", { ...data });
      setUser(res.data.user);
      setToken(res.data.accessToken);
      console.log(res);
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
        Login
      </Button>
    </form>
  );
};

export default Login;
