import React from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

import styles from "./Form.module.css";

function Form({ btnTitle, handleSubmit, userInput, setUserInput }) {
  return (
    <form className={styles.todo_list_form} onSubmit={handleSubmit}>
      <InputField value={userInput} handleOnchange={setUserInput} />
      <Button title={btnTitle} />
    </form>
  );
}

export default Form;
