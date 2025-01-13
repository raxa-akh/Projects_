import React, { useRef, useState } from "react";
import copy from "../../../../assets/copy.svg";
import forwardStrelka from "../../../../assets/forwardStrelka.svg";
import eye from "../../../../assets/eye.svg";
import styles from "../Styles/FormSettings.module.css";
import FooterSettings from "../Footer/FooterSettings";

function ProfileSettings() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleNewPassword, setNewVisiblePassword] = useState(false);
  const [visibleNewPasswordRepaet, setNewVisiblePasswordRepeat] =
    useState(false);
  const [isValid, setIsValid] = useState(true);
  const phoneInput = useRef(null);
  const phoneRegex = /(\d{10}|(\(\d{3}\)\s?\d{3}-\d{2}-\d{2}))$/;

  const handleChange = () => {
    const value = phoneInput.current.value;
    if (phoneRegex.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  
  const handleClickVisiblePassword = (cb) => {
    cb((prev) => !prev);
  };

  return (
    <div className={styles.form_settings_container}>
      <div className={styles.form_settings}>
        <div className={styles.form_option}>
          <div className={styles.name_option}>Телефон</div>
          <div className={styles.phone_inner}>
            <div className={styles.phone_container}>
              <input
                type="phone"
                ref={phoneInput}
                onChange={handleChange}
                placeholder='(928) 456-12-22'
                className={`${styles.input_form_settings} ${styles.RuPhone}`}
                style={{ borderColor: isValid ? '#d0d5dd' : 'red' }}
              />
              <div className={styles.phone_temaplate} style={{color: '#667085 '}}>+7</div>
            </div>
            {!isValid && <p style={{ color: 'red', fontSize: "15px" }}>Неправильный формат номера</p>}
          </div>
        </div>
        {/* Добавится в дальнейшем */}
        {/* <hr className="divider" />
        <div className={styles.form_option}>
          <div className={styles.name_option}>Токен API (ApiKey)</div>
          <div className={styles.copy_token}>
            <button onClick={handleCopyClick} className={styles.copy_btn}>
              <img alt="copy" src={copy} />
            </button>
            <input
              placeholder="Token"
              className={styles.input_form_token}
              type="text"
              ref={inputRef}
              readOnly
            />
          </div>
          <div className={styles.documentation_dioc}>
            <p className={styles.documentation_intro}>
              Документация к API DIOC.Finance
            </p>
            <img
              alt="forwardStrelka"
              src={forwardStrelka}
              style={{ color: "var(--purple-2600, #444CE7)" }}
            />
          </div>
        </div> */}
        {/* <hr className="divider" /> */}
        <div className={styles.form_option}>
          <div className={styles.name_option}>Пароль</div>
          <div className={styles.change_password}>
            <div className={styles.password_inner}>
              <input
                placeholder="Введите текущий пароль"
                className={styles.password_input}
                type={visiblePassword ? "text" : "password"}
              />
              <img
                src={eye}
                alt="eye"
                className={styles.eye}
                onClick={() => handleClickVisiblePassword(setVisiblePassword)}
              />
            </div>
            <div className={styles.password_inner}>
              <input
                placeholder="Новый пароль"
                className={styles.password_input}
                type={visibleNewPassword ? "text" : "password"}
              />

              <img
                src={eye}
                alt={styles.eye}
                className={styles.eye}
                onClick={() => handleClickVisiblePassword(setNewVisiblePassword)}
              />
            </div>
            <div className={styles.password_inner}>
              <input
                placeholder="Повторите новый пароль"
                className={styles.password_input}
                type={visibleNewPasswordRepaet ? "text" : "password"}
              />
              
              <img
                src={eye}
                alt="eye"
                className={styles.eye}
                onClick={() =>
                  handleClickVisiblePassword(setNewVisiblePasswordRepeat)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <FooterSettings />
    </div>
  );
}

export default ProfileSettings;
