import { useState } from "react";
import { message, title } from "../../utils/constant";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import PopUP from "../PopUp/PopUp";

import styles from "./ToDoListContainer.module.css";

function ToDoListContainer({
  todos,
  removeItem,
  updateItem,
  activeContent,
  setTaskToDo,
  setCompletedTask,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const [deleteId, setDeleteId] = useState();
  const [toDoValue, setToDoValue] = useState();
  const [toDoState, setToDoState] = useState(todos);
  // id state
  const [id, setId] = useState();

  // toggle Popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // complete button handler functionlity
  const onClickCompleteHandler = (index) => {
    setCompletedTask(index);
  };
  // TODo button Handler functionality
  const onClickToDoHandler = (index) => {
    setTaskToDo(index);
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
  // popUp button functionality
  const onClickPopUpBtnHandler = (btnStatus) => {
    if (btnStatus === title.DeleteBtnTitle) {
      removeItem(deleteId);
      togglePopup();
    } else {
      updateItem(toDoValue, id);
      togglePopup();
    }
  };
  const handleSearchChange = (value) => {
    const filtered = !value
      ? todos
      : todos.filter((item) =>
          item.TodoValue.toLowerCase().includes(value.toLowerCase())
        );
    console.log(filtered);
    setToDoState(filtered);
  };
  return (
    <div className={styles.todo_list_container}>
      <div className={styles.search}>
        <InputBox
          placeholder={"Find your item"}
          handleOnchange={(e) => {
            handleSearchChange(e.target.value);
          }}
        />
      </div>
      <div className={activeContent === 0 ? "" : styles.hide_content}>
        {toDoState.map((individualItem, index) => (
          // !individualItem.completed &&
          // !individualItem.toDo &&
          <div key={index} className={styles.item_container}>
            <span>{index + 1}</span>
            <span>{individualItem.TodoValue}</span>
            <div className={styles.todo_buttons}>
              <Button
                title={title.toDoBtnTitle}
                clickHandler={() => {
                  onClickToDoHandler(index);
                }}
              ></Button>
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

      {/* tab2 -todo */}
      <div className={activeContent === 1 ? "" : styles.hide_content}>
        {toDoState.map(
          (individualItem, index) =>
            individualItem.toDo &&
            !individualItem.completed && (
              <div key={index} className={styles.item_container}>
                <span>{index + 1}</span>
                <span>{individualItem.TodoValue}</span>
                <div className={styles.todo_buttons}>
                  <Button
                    title={title.completedBtnTitle}
                    clickHandler={() => {
                      onClickCompleteHandler(index);
                    }}
                  ></Button>
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
                        status === title.DeleteBtnTitle
                          ? message.deleteMessage
                          : ""
                      }
                      content={
                        <>
                          {status === title.EditBtnTitle && (
                            <InputBox
                              handleOnchange={(e) =>
                                setToDoValue(e.target.value)
                              }
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
            )
        )}
      </div>
      {/* tab3 -todo */}
      <div className={activeContent === 2 ? "" : styles.hide_content}>
        {toDoState.map(
          (individualItem, index) =>
            individualItem.toDo &&
            individualItem.completed && (
              <div key={index} className={styles.item_container}>
                <span>{index + 1}</span>
                <span>{individualItem.TodoValue}</span>
                <div className={styles.todo_buttons}></div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default ToDoListContainer;
