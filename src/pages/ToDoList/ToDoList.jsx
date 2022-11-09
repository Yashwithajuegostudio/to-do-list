import React, { useEffect, useState } from "react";
import ToDoListContainer from "../../components/ToDoListContainer/ToDoListContainer";
import ToDOListForm from "../../components/ToDoListForm/ToDOListForm";

function ToDoList() {
  const [items, setItems] = useState(
    !localStorage.getItem("items")
      ? []
      : JSON.parse(localStorage.getItem("items"))
  );
  const addItem = (item) => {
    setItems([...items, item]);
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      return setItems(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    console.log(localStorage);
  }, [items]);
  return (
    <div>
      <ToDOListForm addItem={addItem} />
      <ToDoListContainer items={items} />
    </div>
  );
}

export default ToDoList;
