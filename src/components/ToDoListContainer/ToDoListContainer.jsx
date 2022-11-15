import { useEffect, useState } from "react";
import { message, placeholderValue, tabId, title } from "../../utils/constant";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

import PopUP from "../PopUp/PopUp";

import styles from "./ToDoListContainer.module.css";

function ToDoListContainer({
  todoListObject,
  removeItem,
  updateStatus,
  activeContent,
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

  // Tab button handler functionality
  const onClickTabStatusHandler = (btnIndex, btnStatus) => {
    btnStatus === title.toDoBtnTitle
      ? updateStatus(btnIndex, btnStatus)
      : updateStatus(btnIndex, btnStatus);
  };

  //Edit button handler functionality
  const onClickEditHandler = (toDoItem, index) => {
    setBtnStatus(title.editBtnTitle);
    setToDoListValue(toDoItem);
    setToDoObjectID(index);
    togglePopup();
  };

  // delete button handler functionality
  const onCliCkDeleteHandler = (id) => {
    setBtnStatus(title.deleteBtnTitle);
    setDeleteId(id);
    togglePopup();
  };

  // popUp button functionality
  const onClickPopUpBtnHandler = (btnStatus) => {
    btnStatus === title.deleteBtnTitle
      ? removeItem(deleteId)
      : updateStatus(toDoObjectID, btnStatus, toDoListValue);
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
                  onClickTabStatusHandler(index, title.toDoBtnTitle);
                }}
                disabled={individualItem.toDo}
              />
              <Button
                title={title.editBtnTitle}
                clickHandler={() => {
                  onClickEditHandler(individualItem.TodoValue, index);
                }}
                disabled={individualItem.completed}
              />
              <Button
                title={title.deleteBtnTitle}
                clickHandler={() => {
                  onCliCkDeleteHandler(individualItem.ID);
                }}
                disabled={individualItem.completed}
              />

              {isOpenPopUp && (
                <PopUP
                  title={
                    btnStatus === title.deleteBtnTitle
                      ? message.deleteMessage
                      : ""
                  }
                  content={
                    <>
                      {btnStatus === title.editBtnTitle && (
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
                            btnStatus === title.deleteBtnTitle
                              ? title.deleteBtnTitle
                              : title.editBtnTitle
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
                      onClickTabStatusHandler(index, title.completedBtnTitle);
                    }}
                  />
                  <Button
                    title={title.editBtnTitle}
                    clickHandler={() => {
                      onClickEditHandler(individualItem.TodoValue, index);
                    }}
                  />
                  <Button
                    title={title.deleteBtnTitle}
                    clickHandler={() => {
                      onCliCkDeleteHandler(individualItem.ID);
                    }}
                  />
                  {isOpenPopUp && (
                    <PopUP
                      title={
                        btnStatus === title.deleteBtnTitle
                          ? message.deleteMessage
                          : ""
                      }
                      content={
                        <>
                          {btnStatus === title.editBtnTitle && (
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
                                btnStatus === title.deleteBtnTitle
                                  ? title.deleteBtnTitle
                                  : title.editBtnTitle
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
