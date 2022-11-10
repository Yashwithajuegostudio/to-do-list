import { useState } from "react";
import { message, title } from "../../utils/constant";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import PopUP from "../PopUp/PopUp";

import styles from "./ToDoListContainer.module.css";

function ToDoListContainer({ todos, removeItem, updateItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const [deleteId, setDeleteId] = useState();
  const [toDoValue, setToDoValue] = useState();

  // id state
  const [id, setId] = useState();

  // toggle Popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  //Edit button handler functionality
  const onClickEditHandler = (toDoItem, index) => {
    setStatus(title.EditBtnTitle);
    setToDoValue(toDoItem);
    setId(index);
    togglePopup();
  };
  // delete button handler functionality
  const onCliCkDeleteHandler = (id) => {
    setStatus(title.DeleteBtnTitle);
    setDeleteId(id);
    togglePopup();
  };
  // delete button functionality
  const onClickPopUpBtnHandler = (btnStatus) => {
    if (btnStatus === title.DeleteBtnTitle) {
      removeItem(deleteId);
      togglePopup();
    } else {
      updateItem(toDoValue, id);
      togglePopup();
    }
  };

  return (
    <div className={styles.todo_list_container}>
      <div>
        {todos.map((individualItem, index) => (
          <div key={index} className={styles.item_container}>
            <span>{index + 1}</span>
            <span>{individualItem.TodoValue}</span>
            <div className={styles.todo_buttons}>
              <Button title={title.toDoBtnTitle}></Button>
              <Button
                title={title.EditBtnTitle}
                clickHandler={() => {
                  onClickEditHandler(individualItem.TodoValue, index);
                }}
              ></Button>
              <Button
                title={title.DeleteBtnTitle}
                clickHandler={() => {
                  onCliCkDeleteHandler(individualItem.ID);
                }}
              ></Button>
              {isOpen && (
                <PopUP
                  title={
                    status === title.DeleteBtnTitle ? message.deleteMessage : ""
                  }
                  content={
                    <>
                      {status === title.EditBtnTitle && (
                        <InputBox
                          handleOnchange={(e) => setToDoValue(e.target.value)}
                          value={toDoValue}
                        />
                      )}

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
                            onClickPopUpBtnHandler(status);
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
