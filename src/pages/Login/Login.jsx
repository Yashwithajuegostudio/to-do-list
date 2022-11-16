import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { Path, title, UserDetails } from "../../utils/constant";
import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  const user = {
    userId: UserDetails.userId,
  };

  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.userId === userID) {
      setAuthenticated(authenticated);
      localStorage.setItem("authenticated", true);
      if (localStorage.getItem("authenticated")) {
        navigate(Path.todoListPath);
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
        btnTitle={title.loginBtnTitle}
        handleSubmit={handleSubmit}
        userInput={userID}
        setUserInput={setUserID}
      />
    </div>
  );
}

export default Login;
