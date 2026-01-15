import React from "react";
import type { ITodos } from "../interfaces/todos";
import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const data = useLoaderData<ITodos[]>();
  return (
    <div>
      <Form method="post" action="/about">
        <input type="text" placeholder="email" />
        <button type="submit">Submit</button>
      </Form>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <h2>{el.title}</h2>
            {el.completed && <p>Completed</p>}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default AboutPage;

export const aboutLoader = async (): Promise<ITodos[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Response("Failed", { status: 404 });
  }
  return res.json();
};
export const aboutAction = async () => {
  console.log("Submitting");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return redirect("/");
};
