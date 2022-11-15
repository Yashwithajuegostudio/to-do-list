import { useEffect, useState } from "react";
import { message, placeholderValue, tabId, title } from "../../utils/constant";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

import PopUP from "../PopUp/PopUp";

import styles from "./ToDoListContainer.module.css";

function ToDoListContainer({
  todoListObject,
  removeItem,
  updateItem,
  activeContent,
  setTaskToDo,
  setCompletedTask,
}) {
  const [isOpenPopUp, setIsOpenPopUP] = useState(false);
  const [btnStatus, setBtnStatus] = useState("");
  const [deleteId, setDeleteId] = useState();
  const [toDoListValue, setToDoListValue] = useState();
  const [toDoListState, setToDoListState] = useState(todoListObject);
  const [toDoObjectID, setToDoObjectID] = useState();

  useEffect(() => {
    setToDoListState(todoListObject);
  }, [todoListObject]);

  // toggle Popup functionality
  const togglePopup = () => {
    setIsOpenPopUP(!isOpenPopUp);
  };

  // complete button handler functionality
  const onClickCompleteHandler = (index) => {
    setCompletedTask(index);
  };

  // TODo button Handler functionality
  const onClickToDoHandler = (index) => {
    setTaskToDo(index);
  };

  //Edit button handler functionality
  const onClickEditHandler = (toDoItem, index) => {
    setBtnStatus(title.EditBtnTitle);
    setToDoListValue(toDoItem);
    setToDoObjectID(index);
    togglePopup();
  };

  // delete button handler functionality
  const onCliCkDeleteHandler = (id) => {
    setBtnStatus(title.DeleteBtnTitle);
    setDeleteId(id);
    togglePopup();
  };

  // popUp button functionality
  const onClickPopUpBtnHandler = (btnStatus) => {
    if (btnStatus === title.DeleteBtnTitle) {
      removeItem(deleteId);
    } else {
      updateItem(toDoListValue, toDoObjectID);
    }
    togglePopup();
  };

  // search button functionality
  const handleSearchChange = (value) => {
    const filtered = !value
      ? todoListObject
      : todoListObject.filter((item) =>
          item.TodoValue.toLowerCase().includes(value.toLowerCase())
        );
    setToDoListState(filtered);
  };

  return (
    <div className={styles.todo_list_container}>
      <div className={styles.search}>
        <InputField
          placeholder={placeholderValue.searchBtnPlaceholder}
          handleOnchange={(e) => {
            handleSearchChange(e.target.value);
          }}
        />
      </div>
      {/* Tab1 - All */}
      <div
        className={
          activeContent === tabId.firstTabId ? "" : styles.hide_content
        }
      >
        {toDoListState.map((individualItem, index) => (
          <div key={index} className={styles.item_container}>
            <span>{index + 1}</span>
            <span>{individualItem.TodoValue}</span>
            <div className={styles.todo_buttons}>
              <Button
                title={
                  individualItem.completed
                    ? title.completedBtnTitle
                    : title.toDoBtnTitle
                }
                clickHandler={() => {
                  onClickToDoHandler(index);
                }}
                disabled={individualItem.toDo}
              />
              <Button
                title={title.EditBtnTitle}
                clickHandler={() => {
                  onClickEditHandler(individualItem.TodoValue, index);
                }}
                disabled={individualItem.completed}
              />
              <Button
                title={title.DeleteBtnTitle}
                clickHandler={() => {
                  onCliCkDeleteHandler(individualItem.ID);
                }}
                disabled={individualItem.completed}
              />

              {isOpenPopUp && (
                <PopUP
                  title={
                    btnStatus === title.DeleteBtnTitle
                      ? message.deleteMessage
                      : ""
                  }
                  content={
                    <>
                      {btnStatus === title.EditBtnTitle && (
                        <InputField
                          handleOnchange={(e) =>
                            setToDoListValue(e.target.value)
                          }
                          value={toDoListValue}
                        />
                      )}

                      <div className={styles.todo_buttons}>
                        <Button
                          title={title.cancelBtnTitle}
                          clickHandler={togglePopup}
                        />
                        <Button
                          title={
                            btnStatus === title.DeleteBtnTitle
                              ? title.DeleteBtnTitle
                              : title.EditBtnTitle
                          }
                          clickHandler={() => {
                            onClickPopUpBtnHandler(btnStatus);
                          }}
                        />
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

      {/* Tab2 -todo */}
      <div
        className={
          activeContent === tabId.secondTabId ? "" : styles.hide_content
        }
      >
        {toDoListState.map(
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
                  />
                  <Button
                    title={title.EditBtnTitle}
                    clickHandler={() => {
                      onClickEditHandler(individualItem.TodoValue, index);
                    }}
                  />
                  <Button
                    title={title.DeleteBtnTitle}
                    clickHandler={() => {
                      onCliCkDeleteHandler(individualItem.ID);
                    }}
                  />
                  {isOpenPopUp && (
                    <PopUP
                      title={
                        btnStatus === title.DeleteBtnTitle
                          ? message.deleteMessage
                          : ""
                      }
                      content={
                        <>
                          {btnStatus === title.EditBtnTitle && (
                            <InputField
                              handleOnchange={(e) =>
                                setToDoListValue(e.target.value)
                              }
                              value={toDoListValue}
                            />
                          )}

                          <div className={styles.todo_buttons}>
                            <Button
                              title={title.cancelBtnTitle}
                              clickHandler={togglePopup}
                            />
                            <Button
                              title={
                                btnStatus === title.DeleteBtnTitle
                                  ? title.DeleteBtnTitle
                                  : title.EditBtnTitle
                              }
                              clickHandler={() => {
                                onClickPopUpBtnHandler(btnStatus);
                              }}
                            />
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
      {/* Tab3 -Complete */}
      <div
        className={
          activeContent === tabId.thirdTabID ? "" : styles.hide_content
        }
      >
        {toDoListState.map(
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
