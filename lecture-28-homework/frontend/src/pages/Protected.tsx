import React, { useEffect } from "react";
import { $userAxios } from "../axios/axios";
import { useUserContext } from "../context/userAuth/auth";

const Protected: React.FC = () => {
  useEffect(() => {
    $userAxios.get("/users").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default Protected;
