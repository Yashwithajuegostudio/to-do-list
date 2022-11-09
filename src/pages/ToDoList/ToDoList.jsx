import React from "react";
import ToDoListContainer from "../../components/ToDoListContainer/ToDoListContainer";
import ToDOListForm from "../../components/ToDoListForm/ToDOListForm";

function ToDoList() {
  return (
    <div>
      <ToDOListForm />
      <ToDoListContainer />
    </div>
  );
}

export default ToDoList;
