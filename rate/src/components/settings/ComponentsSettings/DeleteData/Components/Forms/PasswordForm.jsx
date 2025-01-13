import React, { useRef, useState } from "react";
import styles from "../../deletedata.module.css";
import eye from "../../../../../../assets/eye.svg";

function PasswordForm({ numPage, setNumPage }) {
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleClickVisiblePassword = (cb) => {
    cb((prev) => !prev);
  };

  const handleSubmit = () => {
    if (password) {
      setNumPage(2);
    }
  };
  return (
    <div className={styles.form_password_content}>
      <div className={styles.form_password}>
        <h3 className={styles.form_intro}>
          Пожалуйста, введите пароль от вашей учетной записи.
        </h3>
        <hr className={styles.divider} style={{marginTop: '0px'}} />
        <div className={styles.password_inner}>
          <img
            src={eye}
            alt="eye"
            className={styles.eye}
            onClick={() => handleClickVisiblePassword(setVisiblePassword)}
          />
          <input
            placeholder="Введите текущий пароль"
            className={styles.password_delete_data}
            type={visiblePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            style={!password ? {border: "2px solid red"} : {} }
          />
        </div>
        </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px 24px",
          width: "100%",
        }}
      >
        {/* <button className="confirm_letter_btn" onClick={handleSubmit}>
          Напишите нам
        </button> */}

        <button className={styles.confirm_delete_btn} onClick={handleSubmit}>
          Продолжить
        </button>

      </div>
    </div>
  );
}

export default PasswordForm;
