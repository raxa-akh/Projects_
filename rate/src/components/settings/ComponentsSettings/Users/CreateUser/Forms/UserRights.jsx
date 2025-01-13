import React, { useState, useEffect } from "react";
import styles from "../../../Styles/FormStyles.module.css";
import checkbox from "../../styles/checkboxStyleRadio.module.css";

function UserRights({setNumPage, page, setPage}) {
  const [type, setType] = useState('guest');
  const [disabled, setDisabled] = useState(true);

  const handleClickSetType = (type) => {
    setType(type);
  };
  useEffect(() => {
    if (type) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [type]);

  const handleSubmit = () => {
    // setPage("accessSettings");
    setNumPage(3);
    setPage(prev => ({...page, 'accessSettings': true}))
  };
  return (
    <div className={styles.form_content}>
      <div className={styles.form}>
        <div
          className={
            type === "guest"
              ? styles.select_type_user_active
              : styles.select_type_user
          }
          onClick={() => handleClickSetType("guest")}
        >
          <div className={styles.select_role}>
              <div className={checkbox.checkbox_container}>
                <input
                  type="radio"
                  onChange={() => handleClickSetType("guest")}
                  checked={type === "guest"}
                />
                <span className={checkbox.checkbox_form}></span>
              </div>
            <span
              className={
                type === "guest"
                  ? styles.user_name_role_active
                  : styles.user_name_role
              }
            >
              Гость
            </span>
          </div>
          <div
            className={
              type === "guest" ? styles.rules_user_active : styles.rules_user
            }
          >
            Может только говорить
          </div>
        </div>
        <div
          className={
            type === "operator"
              ? styles.select_type_user_active
              : styles.select_type_user
          }
          onClick={() => handleClickSetType("operator")}
        >
          <div className={styles.select_role}>
            <div className={checkbox.checkbox_container}>
                <input
                  type="radio"
                  onChange={() => handleClickSetType("operator")}
                  checked={type === "operator"}
                />
                <span className={checkbox.checkbox_form}></span>
             </div>
            <span
              className={
                type === "operator"
                  ? styles.user_name_role_active
                  : styles.user_name_role
              }
            >
              Оператор
            </span>
          </div>
          <div
            className={
              type === "operator" ? styles.rules_user_active : styles.rules_user
            }
          >
            Может смотреть и добавлять
          </div>
        </div>
        <div
          className={
            type === "manager"
              ? styles.select_type_user_active
              : styles.select_type_user
          }
          onClick={() => handleClickSetType("manager")}
        >
          <div className={styles.select_role}>
            <div className={checkbox.checkbox_container}>
                <input
                  type="radio"
                  onChange={() => handleClickSetType("manager")}
                  checked={type === "manager"}
                />
                <span className={checkbox.checkbox_form}></span>
            </div>
            <span
              className={
                type === "manager"
                  ? styles.user_name_role_active
                  : styles.user_name_role
              }
            >
              Менеджер
            </span>
          </div>
          <div
            className={
              type === "manager" ? styles.rules_user_active : styles.rules_user
            }
          >
            Может смотреть, добавлять, редактировать и удалять
          </div>
        </div>
        <div
          className={
            type === "admin"
              ? styles.select_type_user_active
              : styles.select_type_user
          }
          onClick={() => handleClickSetType("admin")}
        >
          <div className={styles.select_role}>
            <div className={checkbox.checkbox_container}>
                <input
                  type="radio"
                  onChange={() => handleClickSetType("admin")}
                  checked={type === "admin"}
                />
                <span className={checkbox.checkbox_form}></span>
            </div>
            <span
              className={
                type === "admin"
                  ? styles.user_name_role_active
                  : styles.user_name_role
              }
            >
              Администратор
            </span>
          </div>
          <div className={styles.rules_user}>Полный доступ</div>
        </div>
      </div>
      <div className={styles.btn_contacts}>
        <button onClick={() => setNumPage(1)} className={styles.cancel_btn_contacts}>Отменить</button>

        <button
          className={styles.add_btn_contacts}
          disabled={disabled}
          onClick={handleSubmit}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default UserRights;
