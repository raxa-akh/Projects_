import React, { useState, useEffect } from "react";
import styles from "../../Styles/FormStyles.module.css";
import DropDown from "../DropDown/DropDown";

function SettingsAccount({ setNumPage, setPage }) {
  const [account, setAccount] = useState();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (account) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [account]);

  const handleSubmit = () => {
    setPage("authorization");
    setNumPage(2);
  };
  return (
    <div>
      <div className={styles.form_content}>
        <form className={styles.form}>
          
          <div
            className={styles.instruction_integration}
            style={{ marginLeft: 40, width: "55%" }}
          >
            <h3 className={styles.instruction_integration_first}>Укажите реквизиты ваших банков</h3>
            <p className={styles.instruction_second_integration}>
              Отметьте галочками те счета, которые вы хотите синхронизировать с
              Диок.Финансы и сопоставьте их с счетами
            </p>
          </div>

          <div className={styles.form_content_settings_account}>

            <div className={styles.form_left}>
              <div className={styles.input_form}>
                <span className={styles.checkbox_container}><input type="checkbox" /><span className={styles.checkbox_form}></span></span>
                <span style={{marginLeft: '25px'}}>2145 5724 4576 4333</span>
                <DropDown data={[{label: 'Выбрать счет'}]} place={'Выбрать счет'} widthAll="350px" margin={'10px 0 0 0'}/>
              </div>
              <div className={styles.input_form}>
                <span className={styles.checkbox_container}><input type="checkbox" /><span className={styles.checkbox_form}></span></span>
                <span style={{marginLeft: '25px'}}>2467 5747 2346 6547</span>
                <DropDown data={[{label: 'Выбрать счет'}]} place={'Выбрать счет'} widthAll="350px" margin={'10px 0 0 0'}/>
              </div>
              <div className={styles.input_form}>
                <span className={styles.checkbox_container}><input type="checkbox" /><span className={styles.checkbox_form}></span></span>
                <span style={{marginLeft: '25px'}}>2467 5747 2346 6547</span>
              </div>
            </div>

            <div className={styles.form_right}>
              <div className={styles.input_form}>
                <span>Начало синхронизации</span>
                <DropDown data={[{label: ''}]} place={'За все время'} widthAll="350px" margin={'10px 0 0 0'}/>
              </div>
              <div className={styles.input_form}>
                <span>Частота</span>
                <DropDown data={[{label: ''}]} place={'Один раз в день'} widthAll="350px" margin={'10px 0 0 0'}/>
              </div>
            </div>
          </div>
        </form>
        <div className={styles.btn_contacts_connect}>
          <div className={styles.footer_content_connect}>
            Диок.Финансы не хранит ваши данные для входа в банк. Вы всегда
            сможете отключить банк от Диок.Финансы.
          </div>
          <div>
            <button
              className={styles.add_btn_contacts}
              disabled={disabled}
              onClick={handleSubmit}
            >
              Готово
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsAccount;
