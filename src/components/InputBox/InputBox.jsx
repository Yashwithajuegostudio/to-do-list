import React from "react";
import styles from "./InputBox.module.css";

function InputBox({ handleOnchange, value, id, name, placeholder }) {
  return (
    <input
      className={styles.input_box}
      onChange={handleOnchange}
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
    ></input>
  );
}

export default InputBox;
