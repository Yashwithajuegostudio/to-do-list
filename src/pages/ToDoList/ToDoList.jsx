import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ToDoListContainer from "../../components/ToDoListContainer/ToDoListContainer";
import ToDOListForm from "../../components/ToDoListForm/ToDOListForm";
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
    console.log(todoListObject);
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

  return (
    <div>
      <Header />

      <ToDOListForm addItem={addItem} />

      <div className={styles.tabs}>
        <div
          className={styles.todo_list_title}
          onClick={handleClick}
          active={active === 0}
          id={0}
        >
          All
        </div>
        <div
          className={styles.todo_list_title}
          onClick={handleClick}
          active={active === 1}
          id={1}
        >
          ToDo
        </div>
        <div
          className={styles.todo_list_title}
          onClick={handleClick}
          active={active === 2}
          id={2}
        >
          Completed
        </div>
      </div>
      <ToDoListContainer
        todoListObject={todoListObject}
        activeContent={active}
        removeItem={removeItem}
        updateItem={updateItem}
        setTaskToDo={setTaskToDo}
        setCompletedTask={setCompletedTask}
      />
    </div>
  );
}

export default ToDoList;
