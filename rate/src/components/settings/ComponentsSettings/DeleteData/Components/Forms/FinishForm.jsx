import React from "react";
import styles from "../../deletedata.module.css";
import checkbox from "../../checkbox.module.css";

function FinishForm({ numPage, setNumPage }) {
  return (
    <div>
      <div className={styles.form_finish}>
        <div className={checkbox.checkbox_container}>
          <input type="checkbox" />
          <span className={checkbox.checkbox_form}></span>
        </div>
        <p className={styles.dangerous_finish}>
          Я подтвреждаю, что хочу совершить данное действие.
        </p>
      </div>
      <div>
        <div style={{ float: "right", padding: "20px 24px" }}>
          <button className={styles.confirm_delete_btn}>Продолжить</button>
        </div>
      </div>
    </div>
  );
}

export default FinishForm;
