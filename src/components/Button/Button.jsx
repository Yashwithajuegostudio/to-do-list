import React from "react";
import styles from "./Button.module.css";

function Button({ clickHandler, title, style, position }) {
  return (
    <button
      className={styles.btn}
      id={position}
      style={style}
      onClick={clickHandler}
    >
      {title}
    </button>
  );
}

export default Button;
