import React from "react";
import styles from "./Button.module.css";

function Button({ clickHandler, title, style, disabled, position }) {
  return (
    <button
      className={styles.btn}
      style={style}
      onClick={clickHandler}
      disabled={disabled}
      id={position}
    >
      {title}
    </button>
  );
}

export default Button;
