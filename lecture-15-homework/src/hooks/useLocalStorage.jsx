import { useEffect, useState } from "react";

const useLocalStorage = (key, fallback) => {
  const [active, setActive] = useState(
    JSON.parse(localStorage.getItem(key)) ?? fallback
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(active));
  }, [active, key]);

  return [active, setActive];
};

export default useLocalStorage;
