import { title } from "../../utils/constant";
import Button from "../Button/Button";

import styles from "./ToDoListContainer.module.css";

function ToDoListContainer() {
  return (
    <div className={styles.todo_list_container}>
      <div className={styles.todo_buttons}>
        <Button title={title.EditBtnTitle}></Button>
        <Button title={title.DeleteBtnTitle}></Button>
      </div>
    </div>
  );
}

export default ToDoListContainer;
