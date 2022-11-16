import React from "react";
import Button from "../Button/Button";
import styles from "./ConfirmationPopUp.module.css";

function ConfirmationPopUp({
  handleClose,
  popUpTitle,
  content,
  noBtnTitle,
  noBtnHandler,
  yesBtnTitle,
  yesBtnHandler,
  id,
}) {
  return (
    <>
      <div className={styles.popup_container}>
        <div className={styles.popup_box}>
          <span className={styles.close_icon} onClick={handleClose}>
            x
          </span>
          <div className={styles.popup_content}>
            <h3>{popUpTitle}</h3>
            <div id={id}>{content}</div>
            <div className={styles.confirmation_btns}>
              <Button title={noBtnTitle} clickHandler={noBtnHandler} />
              <Button title={yesBtnTitle} clickHandler={yesBtnHandler} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmationPopUp;
