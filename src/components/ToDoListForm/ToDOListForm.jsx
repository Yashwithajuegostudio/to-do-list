import React from "react";
import { title } from "../../utils/constant";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import styles from "./ToDoListForm.module.css";

function ToDOListForm() {
  return (
    <form className={styles.todo_list_form}>
      <InputBox />
      <Button title={title.AddBtnTitle} />
    </form>
  );
}

export default ToDOListForm;
