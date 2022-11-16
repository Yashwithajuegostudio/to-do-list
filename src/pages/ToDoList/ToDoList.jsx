import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Tab from "../../components/Tab/Tab";
import ToDoListContainer from "../../components/ToDoListContainer/ToDoListContainer";
import ToDOListForm from "../../components/ToDoListForm/ToDOListForm";
import {
  INITIAL_ACTIVE_TAB_INDEX,
  TAB_NUMBER,
  TITLE,
} from "../../utils/constant";
import { getToListObjectFromStorage } from "../../utils/helper";
import styles from "./ToDoList.module.css";

function ToDoList() {
  // active tab state
  const [active, setActive] = useState(INITIAL_ACTIVE_TAB_INDEX);
  // authentication state
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  let navigate = useNavigate();
  // TodoListObject array of objects
  const [todoListObject, setTodoListObject] = useState(
    getToListObjectFromStorage()
  );

  // add the input field item to object todoObject
  const addItem = (item) => {
    // creating a ID for every todo
    const time = new Date().getTime();

    // creating a todo object
    let todoObject = {
      ID: time,
      TodoValue: item,
      todoStatus: 0,
    };
    // updating TodoListObject state
    setTodoListObject([...todoListObject, todoObject]);
  };
  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todoListObject));
  }, [todoListObject]);

  // remove data from local storage
  const removeItem = (id) => {
    const filtered = todoListObject.filter((todo) => {
      return todo.ID !== id;
    });
    setTodoListObject(filtered);
  };

  // update the status of edit,todo,complete buttons
  const updateStatus = (id, btnStatus, itemToBeUpdated) => {
    let items = [...todoListObject];
    const filteredId = items.find((item) => item.ID === id);
    if (filteredId) {
      btnStatus === TITLE.editBtnTitle
        ? (filteredId.TodoValue = itemToBeUpdated)
        : btnStatus === TITLE.toDoBtnTitle
        ? (filteredId.todoStatus = TAB_NUMBER.Tab_Two)
        : (filteredId.todoStatus = TAB_NUMBER.Tab_Three);
    }
    setTodoListObject(items);
  };

  // handle tab click functionality
  const handleTabClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  // Logout Click handler functionality
  const onClickLogoutHandler = () => {
    localStorage.setItem("authenticated", false);
    const loggedOutUser = localStorage.getItem("authenticated");

    if (loggedOutUser) {
      setAuthenticated(loggedOutUser);
      navigate("/");
    }
  };

  return (
    <>
      <Button
        title={TITLE.logoutBtnTitle}
        clickHandler={() => {
          onClickLogoutHandler();
        }}
      />
      <Header />
      <ToDOListForm addItem={addItem} />
      <div className={styles.tabs}>
        <Tab
          onClick={handleTabClick}
          tabTitle={TITLE.allTab}
          active={active === TAB_NUMBER.Tab_One}
          tabID={TAB_NUMBER.Tab_One}
        />
        <Tab
          onClick={handleTabClick}
          tabTitle={TITLE.toDoTab}
          active={active === TAB_NUMBER.Tab_Two}
          tabID={TAB_NUMBER.Tab_Two}
        />
        <Tab
          onClick={handleTabClick}
          tabTitle={TITLE.completedTab}
          active={active === TAB_NUMBER.Tab_Three}
          tabID={TAB_NUMBER.Tab_Three}
        />
      </div>

      <ToDoListContainer
        todoListObject={todoListObject}
        activeContent={active}
        removeItem={removeItem}
        updateStatus={updateStatus}
      />
    </>
  );
}

export default ToDoList;
