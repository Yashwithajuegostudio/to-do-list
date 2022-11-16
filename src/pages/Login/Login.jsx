import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import {
  AUTHENTICATION_STATUS,
  PATH,
  TITLE,
  USER_ID,
} from "../../utils/constant";
import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userID, setUserID] = useState("");
  localStorage.setItem("authenticated", false);
  const authenticatedStatus = localStorage.getItem("authenticated");
  const navigate = useNavigate();

  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      USER_ID === userID &&
      authenticatedStatus === AUTHENTICATION_STATUS.notAuthenticated
    ) {
      localStorage.setItem("authenticated", true);
      if (
        localStorage.getItem("authenticated") ===
        AUTHENTICATION_STATUS.authenticated
      ) {
        navigate(PATH.todoListPath);
      }
    } else {
      alert("Invalid user");
    }
    setUserID("");
  };
  return (
    <div className={styles.login_container}>
      <Header />
      <Form
        btnTitle={TITLE.loginBtnTitle}
        handleSubmit={handleSubmit}
        userInput={userID}
        setUserInput={setUserID}
      />
    </div>
  );
}

export default Login;
