import React from "react";
import styles from "./InputBox.module.css";

function InputBox({ handleOnchange, type, value, id, name }) {
  return (
    <input
      className={styles.input_box}
      onChange={handleOnchange}
      type={type}
      value={value}
      id={id}
      name={name}
    ></input>
  );
}

export default InputBox;
