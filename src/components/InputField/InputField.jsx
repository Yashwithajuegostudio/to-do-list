import React from "react";
import styles from "./InputField.module.css";

function InputField({
  handleOnchange,
  value,
  id,
  name,
  placeholder,
  defaultValue,
}) {
  return (
    <input
      className={styles.input_box}
      onChange={handleOnchange}
      value={value}
      id={id}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
}

export default InputField;
