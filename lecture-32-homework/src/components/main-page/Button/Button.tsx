import React from "react";
import styles from "./Button.module.scss";

interface mainPageButton {
  action: () => void;
  name: string;
}

const Button: React.FC<mainPageButton> = ({ action, name }) => {
  return (
    <button onClick={action} className={styles.button}>
      Go To {name} Page
    </button>
  );
};

export default Button;
