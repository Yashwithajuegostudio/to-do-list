import React, { useState } from "react";
import { title } from "../../utils/constant";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import styles from "./ToDoListForm.module.css";

function ToDOListForm({ addItem }) {
  const [item, setItemValue] = useState("");
  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItemValue("");
  };
  return (
    <form className={styles.todo_list_form} onSubmit={handleSubmit}>
      <InputBox
        value={item}
        handleOnchange={(e) => setItemValue(e.target.value)}
      />
      <Button title={title.AddBtnTitle} />
    </form>
  );
}

export default ToDOListForm;
