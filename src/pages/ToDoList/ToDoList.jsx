import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
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
  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

  const updateItem = (itemToBeUpdated, index) => {
    items.splice(index, index, itemToBeUpdated);
    localStorage.setItem(index, itemToBeUpdated);
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      return setItems(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <Header />
      <ToDOListForm addItem={addItem} />
      <ToDoListContainer
        items={items}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </div>
  );
}

export default ToDoList;
