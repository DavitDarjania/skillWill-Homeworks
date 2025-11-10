import { useEffect } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowResize from "./hooks/useWindowResize";

function App() {
  const [darkmode, setDarkmode] = useLocalStorage("darkmode", false);
  const width = useWindowResize();
  let isMobile = false;
  const handleDarkModeWidth = () => {
    if (width === "mobile") {
      setDarkmode(false);
      isMobile = true;
    } else {
      isMobile = false;
    }
  };
  useEffect(() => {
    handleDarkModeWidth();
  }, [width]);
  const handleDarkModeClick = () => {
    handleDarkModeWidth();
    if (!isMobile) {
      console.log(isMobile);
      setDarkmode((prevState) => !prevState);
    }
  };

  return (
    <div className={`container ${darkmode ? "dark_mode_body_bg" : ""}`}>
      <button onClick={handleDarkModeClick}>Dark Mode/Light Mode</button>

      <h1 className={darkmode ? "dark_mode_text" : ""}>
        Lorem ipsum dolor sit amet.
      </h1>
      <p className={darkmode ? "dark_mode_text" : ""}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
        corporis? Consequatur ex quisquam modi alias aliquid autem sint
        consequuntur earum, illo dolores dolore adipisci ipsa sapiente ab veniam
        ratione quam?
      </p>
      <article className={darkmode ? "dark_mode_article_bg" : ""}>
        <h3 className={darkmode ? "dark_mode_text" : ""}>
          Lorem, ipsum dolor.
        </h3>
        <p className={darkmode ? "dark_mode_text" : ""}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          accusantium provident. Doloribus iusto nostrum doloremque aliquam in,
          ipsam dolorum! Architecto!
        </p>
      </article>
    </div>
  );
}

export default App;
