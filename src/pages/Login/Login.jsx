import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { title } from "../../utils/constant";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.login_container}>
      <Header />
      <Form btnTitle={title.loginBtnTitle} />
    </div>
  );
}

export default Login;
