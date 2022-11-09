import { useState } from "react";
import { message, title } from "../../utils/constant";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import PopUP from "../PopUp/PopUp";

import styles from "./ToDoListContainer.module.css";

function ToDoListContainer({ items, removeItem, updateItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [editingValue, setEditedValue] = useState("");

  console.log(editingValue);
  // toggle Popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // edit and delete button handler functionality
  const onClickBtnHandler = (btnStatus) => {
    if (btnStatus === title.DeleteBtnTitle) {
      setStatus(title.DeleteBtnTitle);
      setIsOpen(!isOpen);
    } else {
      setStatus(title.EditBtnTitle);
      setIsOpen(!isOpen);
    }
  };
  // delete button functionality
  const onClickPopUpBtnHandler = (selectedItem, btnStatus, index) => {
    if (btnStatus === title.DeleteBtnTitle) {
      removeItem(selectedItem);
      setIsOpen(!isOpen);
    } else {
      updateItem(editingValue, index);
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.todo_list_container}>
      <div>
        {items.map((item, index) => (
          <div key={index} className={styles.item_container}>
            <span>{index + 1}</span>
            <span>{item}</span>
            <div className={styles.todo_buttons}>
              <Button title={title.toDoBtnTitle}></Button>
              <Button
                title={title.EditBtnTitle}
                clickHandler={() => {
                  onClickBtnHandler(title.EditBtnTitle);
                }}
              ></Button>
              <Button
                title={title.DeleteBtnTitle}
                clickHandler={() => {
                  onClickBtnHandler(title.DeleteBtnTitle);
                }}
              ></Button>
              {isOpen && (
                <PopUP
                  title={
                    status === title.DeleteBtnTitle ? message.deleteMessage : ""
                  }
                  content={
                    <>
                      <InputBox
                        value={
                          editingValue === null &&
                          ((editingValue) => !editingValue)
                            ? item
                            : editingValue
                        }
                        handleOnchange={(e) => setEditedValue(e.target.value)}
                      />
                      <div className={styles.todo_buttons}>
                        <Button
                          title={title.cancelBtnTitle}
                          clickHandler={togglePopup}
                        ></Button>
                        <Button
                          title={
                            status === title.DeleteBtnTitle
                              ? title.DeleteBtnTitle
                              : title.EditBtnTitle
                          }
                          clickHandler={() => {
                            onClickPopUpBtnHandler(item, status, index);
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
