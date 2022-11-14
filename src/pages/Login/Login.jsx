import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { title } from "../../utils/constant";
import styles from "./Login.module.css";
// import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userInput, setUserInput] = useState("");
  let navigate = useNavigate();
  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    // addItem(userInput);
    setUserInput("");
    navigate("/todolist");
  };
  return (
    <div className={styles.login_container}>
      <Header />
      <Form
        btnTitle={title.loginBtnTitle}
        handleSubmit={handleSubmit}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  );
}

export default Login;
