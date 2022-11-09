import { useState } from "react";
import { message, title } from "../../utils/constant";
import Button from "../Button/Button";
import PopUP from "../PopUp/PopUp";

import styles from "./ToDoListContainer.module.css";

function ToDoListContainer({ items, removeItem }) {
  const [isOpen, setIsOpen] = useState(false);
  // toggle Popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  // delete button functionality
  const onClickDeleteHandler = (selectedItem) => {
    removeItem(selectedItem);
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.todo_list_container}>
      <div>
        {items.map((item, index) => (
          <div key={index} className={styles.item_container}>
            <span>{item}</span>
            <div className={styles.todo_buttons}>
              <Button title={title.toDoBtnTitle}></Button>
              <Button title={title.EditBtnTitle}></Button>
              <Button
                title={title.DeleteBtnTitle}
                clickHandler={togglePopup}
              ></Button>
              {isOpen && (
                <PopUP
                  title={message.deleteMessage}
                  content={
                    <>
                      <div className={styles.todo_buttons}>
                        <Button
                          title={title.cancelBtnTitle}
                          clickHandler={togglePopup}
                        ></Button>
                        <Button
                          title={title.DeleteBtnTitle}
                          clickHandler={() => {
                            onClickDeleteHandler(item);
                          }}
                        ></Button>
                      </div>
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoListContainer;
