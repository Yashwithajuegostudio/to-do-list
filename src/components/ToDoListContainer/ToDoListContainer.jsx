import { useEffect, useState } from "react";
import { message, placeholderValue, title } from "../../utils/constant";
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
    if (activeContent === 0) {
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
  }, [todoListObject, activeContent]);

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
    <>
      <div className={styles.todo_list_container}>
        <div className={styles.search}>
          <InputField
            placeholder={placeholderValue.searchBtnPlaceholder}
            handleOnchange={(e) => {
              handleSearchChange(e.target.value);
            }}
          />
        </div>
        {toDoListState.map((item, index) => (
          <div key={index} className={styles.item_container}>
            <span>{index + 1}</span>
            <span>{item.TodoValue}</span>
            {activeContent === 0 && (
              <Button
                title={
                  item.todoStatus === 2
                    ? title.completedBtnTitle
                    : title.toDoBtnTitle
                }
                clickHandler={() => {
                  onClickTabStatusHandler(item.ID, title.toDoBtnTitle);
                }}
                disabled={item.todoStatus === 1 || item.todoStatus === 2}
              />
            )}
            {activeContent === 1 && (
              <Button
                title={title.completedBtnTitle}
                clickHandler={() => {
                  onClickTabStatusHandler(item.ID, title.completedBtnTitle);
                }}
              />
            )}
            {activeContent !== 2 && (
              <>
                <Button
                  title={title.editBtnTitle}
                  clickHandler={() => {
                    onClickEditHandler(item.TodoValue, item.ID);
                  }}
                  disabled={item.todoStatus === 2}
                />
                <Button
                  title={title.deleteBtnTitle}
                  clickHandler={() => {
                    onCliCkDeleteHandler(item.ID);
                  }}
                  disabled={item.todoStatus === 2}
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
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoListContainer;
