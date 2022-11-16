import { useEffect, useState } from "react";
import {
  message,
  PLACEHOLDER_VALUE,
  TAB_NUMBER,
  TITLE,
} from "../../utils/constant";
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

  const updateTodoListObject = (todoListObject, activeContent) => {
    if (activeContent === TAB_NUMBER.Tab_One) {
      setToDoListState(todoListObject);
    } else {
      setToDoListState(
        todoListObject.filter((item) => {
          if (item.todoStatus === activeContent) {
            return item;
          }
        })
      );
    }
  };
  useEffect(() => {
    updateTodoListObject(todoListObject, activeContent);
  }, [todoListObject, activeContent]);

  // toggle Popup functionality
  const togglePopup = () => {
    setIsOpenPopUP((isOpenPopUp) => !isOpenPopUp);
  };

  // Tab button handler functionality
  const onClickTabStatusHandler = (btnIndex, btnStatus) => {
    btnStatus === TITLE.toDoBtnTitle
      ? updateStatus(btnIndex, btnStatus)
      : updateStatus(btnIndex, btnStatus);
  };

  //Edit button handler functionality
  const onClickEditHandler = (toDoItem, index) => {
    setBtnStatus(TITLE.editBtnTitle);
    setToDoListValue(toDoItem);
    setToDoObjectID(index);
    togglePopup();
  };

  // delete button handler functionality
  const onCliCkDeleteHandler = (id) => {
    setBtnStatus(TITLE.deleteBtnTitle);
    setDeleteId(id);
    togglePopup();
  };

  // popUp button functionality
  const onClickPopUpBtnHandler = (btnStatus, id) => {
    btnStatus === TITLE.deleteBtnTitle
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
    <>
      <div className={styles.todo_list_container}>
        <div className={styles.search}>
          <InputField
            placeholder={PLACEHOLDER_VALUE.searchBtnPlaceholder}
            handleOnchange={(e) => {
              handleSearchChange(e.target.value);
            }}
          />
        </div>
        {toDoListState.map((item, index) => (
          <div key={index} className={styles.item_container}>
            <span>{index + 1}</span>
            <span>{item.TodoValue}</span>
            {activeContent === TAB_NUMBER.Tab_One && (
              <Button
                title={
                  item.todoStatus === TAB_NUMBER.Tab_Three
                    ? TITLE.completedBtnTitle
                    : TITLE.toDoBtnTitle
                }
                clickHandler={() => {
                  onClickTabStatusHandler(item.ID, TITLE.toDoBtnTitle);
                }}
                disabled={
                  item.todoStatus === TAB_NUMBER.Tab_Two ||
                  item.todoStatus === TAB_NUMBER.Tab_Three
                }
              />
            )}
            {activeContent === TAB_NUMBER.Tab_Two && (
              <Button
                title={TITLE.completedBtnTitle}
                clickHandler={() => {
                  onClickTabStatusHandler(item.ID, TITLE.completedBtnTitle);
                }}
              />
            )}
            {activeContent !== TAB_NUMBER.Tab_Three && (
              <>
                <Button
                  title={TITLE.editBtnTitle}
                  clickHandler={() => {
                    onClickEditHandler(item.TodoValue, item.ID);
                  }}
                  disabled={item.todoStatus === TAB_NUMBER.Tab_Three}
                />
                <Button
                  title={TITLE.deleteBtnTitle}
                  clickHandler={() => {
                    onCliCkDeleteHandler(item.ID);
                  }}
                  disabled={item.todoStatus === TAB_NUMBER.Tab_Three}
                />

                {isOpenPopUp && (
                  <PopUP
                    title={
                      btnStatus === TITLE.deleteBtnTitle
                        ? message.deleteMessage
                        : ""
                    }
                    content={
                      <>
                        {btnStatus === TITLE.editBtnTitle && (
                          <InputField
                            handleOnchange={(e) =>
                              setToDoListValue(e.target.value)
                            }
                            value={toDoListValue}
                          />
                        )}

                        <div className={styles.todo_buttons}>
                          <Button
                            title={TITLE.cancelBtnTitle}
                            clickHandler={togglePopup}
                          />
                          <Button
                            title={
                              btnStatus === TITLE.deleteBtnTitle
                                ? TITLE.deleteBtnTitle
                                : TITLE.editBtnTitle
                            }
                            clickHandler={() => {
                              onClickPopUpBtnHandler(btnStatus, item.ID);
                            }}
                          />
                        </div>
                      </>
                    }
                    handleClose={togglePopup}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoListContainer;
