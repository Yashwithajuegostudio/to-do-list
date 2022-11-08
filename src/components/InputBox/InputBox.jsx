import React from "react";
import styles from "./InputBox.module.css";

function InputBox({ handleOnchange, type, value }) {
  return (
    <input
      className={styles.input_box}
      onChange={handleOnchange}
      type={type}
      value={value}
    ></input>
  );
}

export default InputBox;
