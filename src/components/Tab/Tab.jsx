import React from "react";
import styles from "./Tab.module.css";

function Tab({ onClick, tabID, tabTitle, activeTab }) {
  return (
    <div
      className={styles.todo_list_title}
      onClick={onClick}
      active={activeTab}
      id={tabID}
    >
      {tabTitle}
    </div>
  );
}

export default Tab;
