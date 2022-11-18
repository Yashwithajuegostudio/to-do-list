import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import {
  AUTHENTICATION_STATUS,
  LOCAL_STORAGE_KEY,
  MESSAGE,
  METHOD,
  PATH,
  TITLE,
  USER_ID,
} from "../../utils/constant";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorageData } from "../../utils/storageLib";

function Login() {
  const [userID, setUserID] = useState("");
  const [setAuthStatus] = useLocalStorageData();
  setAuthStatus(
    METHOD.SET,
    LOCAL_STORAGE_KEY.authenticated,
    AUTHENTICATION_STATUS.notAuthenticated
  );

  const authenticatedStatus = setAuthStatus(
    METHOD.GET,
    LOCAL_STORAGE_KEY.authenticated
  );
  const navigate = useNavigate();
  useEffect(() => {
    setAuthStatus(METHOD.GET, LOCAL_STORAGE_KEY.authenticated);
  }, [setAuthStatus]);
  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      USER_ID === userID &&
      authenticatedStatus === AUTHENTICATION_STATUS.notAuthenticated
    ) {
      setAuthStatus(
        METHOD.SET,
        LOCAL_STORAGE_KEY.authenticated,
        AUTHENTICATION_STATUS.authenticated
      );

      if (setAuthStatus(METHOD.GET, LOCAL_STORAGE_KEY.authenticated)) {
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
