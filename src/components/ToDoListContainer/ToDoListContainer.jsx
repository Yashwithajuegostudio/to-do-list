import React, { useState } from "react";
import { title } from "../../utils/constant";
import Button from "../Button/Button";
import PopUP from "../PopUp/PopUp";

import styles from "./ToDoListContainer.module.css";

function ToDoListContainer() {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  return (
    <div className={styles.todo_list_container}>
      <div className={styles.todo_buttons}>
        <Button
          clickHandler={(e) => setVisibility(!visibility)}
          title={title.EditBtnTitle}
        ></Button>
        <Button
          clickHandler={(e) => setVisibility(!visibility)}
          title={title.DeleteBtnTitle}
        ></Button>

        <PopUP
          onClose={popupCloseHandler}
          show={visibility}
          title="Are you sure want to save?"
        >
          <div className={styles.todo_buttons}>
            <Button title={title.saveBtnTitle}></Button>
            <Button title={title.cancelBtnTitle}></Button>
          </div>
        </PopUP>
      </div>
    </div>
  );
}

export default ToDoListContainer;
