import { useEffect, useState } from "react";

const useGetRequest = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch("https://691e0824bb52a1db22bcd3fd.mockapi.io/todo/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, setTasks, refetch: fetchTasks };
};
export default useGetRequest;
