import { title } from "../../utils/constant";
import Button from "../Button/Button";

import styles from "./ToDoListContainer.module.css";

function ToDoListContainer({ items }) {
  return (
    <div className={styles.todo_list_container}>
      <div className="">
        {items.map((item, index) => (
          <div key={index} className={styles.item_container}>
            <span>{item}</span>
            <div className={styles.todo_buttons}>
              <Button title={title.toDoBtnTitle}></Button>
              <Button title={title.EditBtnTitle}></Button>
              <Button title={title.DeleteBtnTitle}></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoListContainer;
