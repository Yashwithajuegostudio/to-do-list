import React, { useState } from "react";
import { title } from "../../utils/constant";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import styles from "./ToDoListForm.module.css";

function ToDOListForm({ addItem }) {
  const [userInput, setUserInput] = useState("");
  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(userInput);
    setUserInput("");
  };
  return (
    <form className={styles.todo_list_form} onSubmit={handleSubmit}>
      <InputBox
        value={userInput}
        handleOnchange={(e) => setUserInput(e.target.value)}
      />
      <Button title={title.AddBtnTitle} />
    </form>
  );
}

export default ToDOListForm;
