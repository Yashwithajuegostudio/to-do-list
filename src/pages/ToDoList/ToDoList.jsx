import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ToDoListContainer from "../../components/ToDoListContainer/ToDoListContainer";
import ToDOListForm from "../../components/ToDoListForm/ToDOListForm";

// get todos from local storage
const getTodosFromLS = () => {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
function ToDoList() {
  // todos array of objects
  const [todos, setTodos] = useState(getTodosFromLS());
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
    // updating todos state
    setTodos([...todos, todoObject]);
  };
  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  // remove data from local storage
  const removeItem = (id) => {
    const filtered = todos.filter((todo) => {
      return todo.ID !== id;
    });
    setTodos(filtered);
  };
  // update data to local storage
  const updateItem = (itemToBeUpdated, id) => {
    let items = [...todos];
    let item = items[id];
    item.TodoValue = itemToBeUpdated;
    console.log(item);
    items[id] = item;
    setTodos(items);
  };

  return (
    <div>
      <Header />
      <ToDOListForm addItem={addItem} />
      <ToDoListContainer
        todos={todos}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </div>
  );
}

export default ToDoList;
