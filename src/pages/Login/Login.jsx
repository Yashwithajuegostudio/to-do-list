import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { title, UserDetails } from "../../utils/constant";
import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();
  const [, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated"))
  );

  const users = [{ username: UserDetails.userId }];

  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === userID);
    if (account) {
      setAuthenticated(true);
      localStorage.setItem("authenticated", true);
      navigate("/todolist");
    } else {
      alert("Invalid user");
    }
    setUserID("");
  };
  return (
    <div className={styles.login_container}>
      <Header />
      <Form
        btnTitle={title.loginBtnTitle}
        handleSubmit={handleSubmit}
        userInput={userID}
        setUserInput={setUserID}
      />
    </div>
  );
}

export default Login;
