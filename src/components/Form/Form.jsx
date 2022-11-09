import React from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import styles from "./Form.module.css";

function Form({ btnTitle, handleSubmit, userInput, setUserInput }) {
  return (
    <form className={styles.todo_list_form} onSubmit={handleSubmit}>
      <InputBox
        value={userInput}
        handleOnchange={(e) => setUserInput(e.target.value)}
      />
      <Button title={btnTitle} />
    </form>
  );
}

export default Form;
