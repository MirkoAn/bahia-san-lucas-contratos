import React from "react";
import styles from "./custom-button.module.css";

const CustomButton = ({ children, allInputsCompleted }) => {
  return (
    <button
      className={`${styles.button} ${
        allInputsCompleted ? styles.completedButton : ""
      }`}
      type="submit"
      disabled={!allInputsCompleted}
    >
      {children}
    </button>     
  );
};

export default CustomButton;