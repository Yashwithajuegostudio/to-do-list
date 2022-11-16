import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { PATH, TITLE, USER_ID } from "../../utils/constant";
import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userEnteredID, setUserEnteredID] = useState("");
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );
  const navigate = useNavigate();

  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    if (USER_ID === userEnteredID) {
      setAuthenticated(authenticated);
      localStorage.setItem("authenticated", true);
      if (localStorage.getItem("authenticated")) {
        navigate(PATH.todoListPath);
      }
    } else {
      alert("Invalid user");
    }
    setUserEnteredID("");
  };
  return (
    <div className={styles.login_container}>
      <Header />
      <Form
        btnTitle={TITLE.loginBtnTitle}
        handleSubmit={handleSubmit}
        userInput={userEnteredID}
        setUserInput={setUserEnteredID}
      />
    </div>
  );
}

export default Login;
