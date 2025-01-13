import React, { useState, useEffect, useRef } from "react";
import styles from "../../Styles/FormStyles.module.css";



const regExpInn =  /^\d{8}(\d{4})?$/;
const regExpKpp =  /^\d{9}$/;

function StartConnectForm({ setNumPage, bankName }) {
  const [checkInputInn, setCheckInputInn] = useState(false)
  const [checkInputKpp, setCheckInputKpp] = useState(false)
  const [disabled, setDisabled] = useState(true);

  const setKpp = useRef(null);
  const setInn = useRef(null);


  function handleChangeInn(e){
    if (regExpInn.test(e.target.value)){
      setCheckInputInn(true)
    }else{
      setCheckInputInn(false)
    }

  }

  function handleChangeKpp(e){
    if (regExpKpp.test(e.target.value)){
      setCheckInputKpp(true)
    }else{
      setCheckInputKpp(false);
    }
  }

  useEffect(()=>{
    if(checkInputInn && checkInputKpp){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  },
  [checkInputInn,checkInputKpp])


  const handleSubmit = () => {
    if (checkInputInn && checkInputKpp) {
      console.log(111)
      setNumPage(2);
    }
  };

  return (
    <div className={styles.form_content_connect}>
      <form className={styles.form}>
        <div className={styles.instruction_integration}>
          <h3 className={styles.instruction_first}>
            Введите ИНН юрлица, счета которого нужно подключить к ПланФакту.
          </h3>
          <p className={styles.instruction_second}>
            На следующем шаге вы будете перенаправлены на сайт Банка {bankName}
          </p>
        </div>
        <div className={styles.input_form}>
          <label className={styles.label_contact_form}>ИНН юр.лица</label>
          <input
            type="text"
            ref={setInn}
            placeholder="8 или 12 цифр"
            style={ !checkInputInn ? {border: '2px solid red'} : {border: '2px solid #000'}}
            className={styles.input_contact_form}
            // value={inn}
            onChange={(e) => handleChangeInn(e)}
          />
          {!checkInputInn && <p style={{color: 'red', fontSize: '12px'}}>Неправильный ИНН.</p>}
        </div>
        <div className={styles.input_form}>
          <label className={styles.label_contact_form}>КПП юр.лица</label>
          <input
          ref={setKpp}
            type="text"
            placeholder="9 цифр"
            style={ !checkInputKpp ? {border: '2px solid red'} : {border: '2px solid #000'}}
            className={styles.input_contact_form}
            // value={kpp}
            onChange={(e) => handleChangeKpp(e)}
          />
          {!checkInputKpp && <p style={{color: 'red', fontSize: '12px'}}>Неправильный КПП</p>}
        </div>
      </form>
      <div className={styles.btn_contacts}>
        <div className={styles.footer_content}>
          Диок.Финансы не хранит ваши данные для входа в банк. Вы всегда сможете
          отключить банк от Диок Финанс.
        </div>
        <div>
          <button
            className={styles.add_btn_contacts}
            disabled={disabled}
            onClick={handleSubmit}
          >
            Авторизоваться
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartConnectForm;
