import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import {
  AUTHENTICATION_STATUS,
  LOCAL_STORAGE_KEY,
  MESSAGE,
  PATH,
  TITLE,
  USER_ID,
} from "../../utils/constant";
import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userID, setUserID] = useState("");
  localStorage.setItem(LOCAL_STORAGE_KEY.authenticated, false);
  const authenticatedStatus = localStorage.getItem(
    LOCAL_STORAGE_KEY.authenticated
  );
  const navigate = useNavigate();

  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      USER_ID === userID &&
      authenticatedStatus === AUTHENTICATION_STATUS.notAuthenticated
    ) {
      localStorage.setItem(LOCAL_STORAGE_KEY.authenticated, true);
      if (
        localStorage.getItem(LOCAL_STORAGE_KEY.authenticated) ===
        AUTHENTICATION_STATUS.authenticated
      ) {
        navigate(PATH.todoListPath);
      }
    } else {
      alert(MESSAGE.invalidUserAlertMessage);
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
