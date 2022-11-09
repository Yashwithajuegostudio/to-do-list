import styles from "./PopUp.module.css";

function PopUP({ handleClose, content, title }) {
  return (
    <div className={styles.popup_container}>
      <div className={styles.popup_box}>
        <span className={styles.close_icon} onClick={handleClose}>
          x
        </span>
        <div className={styles.popup_content}>
          <b>{title}</b>
          {content}
        </div>
      </div>
    </div>
  );
}

export default PopUP;
