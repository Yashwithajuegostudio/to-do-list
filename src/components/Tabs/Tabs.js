import React, { useState } from "react";
import styles from "./Tabs.module.css";

function Tabs() {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <div className={styles.tabs}>
      <div
        className={styles.todolist_title}
        onClick={handleClick}
        active={active === 0}
        id={0}
      >
        All
      </div>
      <div
        className={styles.todolist_title}
        onClick={handleClick}
        active={active === 1}
        id={1}
      >
        ToDo
      </div>
      <div
        className={styles.todolist_title}
        onClick={handleClick}
        active={active === 2}
        id={2}
      >
        Completed
      </div>
    </div>
  );
}

export default Tabs;
