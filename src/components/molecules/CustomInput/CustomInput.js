import React from "react";
import styles from "./custom-input.module.css";

const CustomInput = ({ label, name, value, onChange, checkbox, checked, placeholder }) => {
  return (
    <label className={checkbox === undefined ? styles.label : styles.checkboxContainer}>
      {label}
      <input
        type={checkbox ? "checkbox" : "text"}
        name={name}
        className={checkbox === undefined ? styles.inputText : styles.checkboxInput}
        {...checkbox && {checked : checked}}
        value={value}
        onChange={onChange}
        {...placeholder && {placeholder: placeholder}}
      />
    </label>        
  );
};

export default CustomInput;