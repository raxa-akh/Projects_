import React, { useState, useEffect } from "react";
import styles from "./deletedata.module.css";
import ModalDeleteData from "./Components/Modal/ModalDeleteData";

function DeleteDataSettings() {
  const [type, setType] = useState('onlyOperation');
  const [disabled, setDisabled] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleClickSetType = (type) => {
    setType(type);
  };

  const handleClickOpenModal = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    if (type) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [type]);

  return (
    <div className={styles.deleteData_container}>
      <div className={styles.attention}>Внимание!</div>
      <hr className={styles.divider} />
      <div className={styles.deleteData_content}>
        <div className={styles.deleteData_info}>
          <p className={styles.info_first}>
            Вы можете полностью очистить вашу учетную запись Диок.Финансы,
            удалив из неё все данные на аккаунте, либо операции. Так же вы
            можете отписаться от существующего тарифа.
          </p>
          <p className={styles.info_second}>
            Если вы действительно хотите это сделать, подтвердите свой пароль и
            напишите нам на почту. Это сделано для вашей безопасности
          </p>
        </div>
        <div className={styles.checkbox_options}>
          <div className={styles.checkbox_option}>
            <div className={styles.checkbox_container}>
              <input
                type="checkbox"
                onChange={() => handleClickSetType("onlyOperation")}
                checked={type === "onlyOperation"}
              />
              <span className={styles.checkbox_form}></span>
            </div>
              <span>Удалить только операции</span>
          </div>
          <div className={styles.checkbox_option}>
            <div className={styles.checkbox_container}>
              <input
                type="checkbox"
                onChange={() => handleClickSetType("allData")}
                checked={type === "allData"}
              />
              <span className={styles.checkbox_form}></span>
            </div>
            <span>Удалить все данные учетной записи</span>
          </div>
          <div className={styles.checkbox_option}>
            <div className={styles.checkbox_container}>
              <input
                type="checkbox"
                onChange={() => handleClickSetType("unsubscribe")}
                checked={type === "unsubscribe"}
              />
              <span className={styles.checkbox_form}></span>
            </div>
            <span>Отписаться от тарифа</span>
          </div>
          <hr style={{ width: "50%" , marginTop: '0'}} />
          <div className={styles.checkbox_option}>
            <div className={styles.checkbox_container}>
              <input
                type="checkbox"
                onChange={() => handleClickSetType("onlyOperation|unsubscribe")}
                checked={type === "onlyOperation|unsubscribe"}
              />
              <span className={styles.checkbox_form}></span>
            </div>
            <span>Удалить операции и отписаться от тарифа</span>
          </div>
          <div className={styles.checkbox_option}>
            <div className={styles.checkbox_container}>
              <input
                type="checkbox"
                onChange={() => handleClickSetType("allData|unsubscribe")}
                checked={type === "allData|unsubscribe"}
              />
              <span className={styles.checkbox_form}></span>
            </div>
            <span>Удалить все данные и отписаться от тарифа</span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <hr className={styles.divider} />
        <div className={styles.actions_footer}>
          <button
            className={styles.confirm_delete_btn}
            disabled={disabled}
            onClick={handleClickOpenModal}
          >
            Подтвердить
          </button>
        </div>
      </div>
      <ModalDeleteData
          visible={visible}
          setVisible={setVisible}
          openModal={handleClickOpenModal}
        />
    </div>
  );
}

export default DeleteDataSettings;
