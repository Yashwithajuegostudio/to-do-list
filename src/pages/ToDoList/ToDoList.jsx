import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Tab from "../../components/Tab/Tab";
import ToDoListContainer from "../../components/ToDoListContainer/ToDoListContainer";
import ToDOListForm from "../../components/ToDoListForm/ToDOListForm";
import { title } from "../../utils/constant";
import styles from "./ToDoList.module.css";
// get TodoListObject from local storage
const getToListObjectFromStorage = () => {
  const data = localStorage.getItem("TodoList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
function ToDoList() {
  // TodoListObject array of objects
  const [todoListObject, setTodoListObject] = useState(
    getToListObjectFromStorage()
  );
  // add the input field item to object todoObject
  const addItem = (item) => {
    // creating a ID for every todo
    const date = new Date();
    const time = date.getTime();

    // creating a todo object
    let todoObject = {
      ID: time,
      TodoValue: item,
      completed: false,
      toDo: false,
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
  // update data to local storage
  const updateItem = (itemToBeUpdated, id) => {
    let items = [...todoListObject];
    let item = items[id];
    item.TodoValue = itemToBeUpdated;
    items[id] = item;
    setTodoListObject(items);
  };
  // add task to to do list
  const setTaskToDo = (id) => {
    let items = [...todoListObject];
    let item = items[id];
    item.toDo = true;
    items[id] = item;
    setTodoListObject(items);
  };
  // add task to completed list
  const setCompletedTask = (id) => {
    let items = [...todoListObject];
    let item = items[id];
    item.completed = true;
    items[id] = item;
    setTodoListObject(items);
  };
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const [authenticated, setAuthenticated] = useState(null);
  let navigate = useNavigate();
  const ClickLogoutHandler = () => {
    setAuthenticated(false);
    if (authenticated === false) {
      navigate("/");
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, []);

  return (
    <>
      <Button
        title={"Logout"}
        clickHandler={() => {
          ClickLogoutHandler();
        }}
      />

      <Header />
      <ToDOListForm addItem={addItem} />
      <div className={styles.tabs}>
        <Tab
          onClick={handleClick}
          tabTitle={title.allTab}
          active={active === 0}
          tabID={0}
        />
        <Tab
          onClick={handleClick}
          tabTitle={title.toDoTab}
          active={active === 1}
          tabID={1}
        />
        <Tab
          onClick={handleClick}
          tabTitle={title.completedTab}
          active={active === 2}
          tabID={2}
        />
      </div>

      <ToDoListContainer
        todoListObject={todoListObject}
        activeContent={active}
        removeItem={removeItem}
        updateItem={updateItem}
        setTaskToDo={setTaskToDo}
        setCompletedTask={setCompletedTask}
      />
    </>
  );
}

export default ToDoList;
