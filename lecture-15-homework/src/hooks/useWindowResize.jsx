import { useEffect, useState } from "react";

const breakpoint = 576;

const whatDevice = (size) => {
  return size < breakpoint ? "mobile" : "pc";
};

const useWindowResize = () => {
  const [value, setValue] = useState(() => whatDevice(window.innerWidth));
  useEffect(() => {
    const handleEvent = () => {
      const device = whatDevice(window.innerWidth);
      setValue(device);
    };
    window.addEventListener("resize", handleEvent);
    return () => window.removeEventListener("resize", handleEvent);
  }, []);
  return value;
};

export default useWindowResize;
