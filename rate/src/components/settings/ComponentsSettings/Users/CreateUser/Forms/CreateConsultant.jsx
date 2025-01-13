import React, { useState, useEffect } from "react";
import styles from "../../../Styles/FormStyles.module.css";

function CreateConsultant({setNumPage, page, setPage}) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && name) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, name]);

  const handleSubmit = () => {
    setNumPage(2);
    setPage(prev => ({...page, 'userRights': true}))
  };

  return (
    <div className={styles.form_content}>
      <form className={styles.form}>
        <div className={styles.input_form}>
          <label className={styles.label_contact_form}>Email</label>
          <input
            type="text"
            placeholder=" ivanov_ivan@example.com"
            className={styles.input_contact_form}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.input_form}>
          <label className={styles.label_contact_form}>ФИО</label>
          <input
            type="text"
            placeholder="Иванов Иван Иванович"
            className={styles.input_contact_form}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </form>
      <div className={styles.btn_contacts}>
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

export default CreateConsultant;
