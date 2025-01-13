import React, { useState } from "react";
import backStrelka from "../../../../../assets/backStrelka.svg";
import styles from "./CreateRules.module.css";
import { Link } from "react-router-dom";
import FormCreate from "./FormCreate";

function СreateRules() {
  const [page, setPage] = useState("receipts");

  const handleClickSetPage = (page) => {
    setPage(page);
  };
  return (
    <div className={styles.create_container}>
      <div>
        <Link to={-1} style={{ textDecoration: "none", display: "flex" }}>
          <img alt="back" src={backStrelka} />
          <span className={styles.back_btn}>Список правил</span>
        </Link>
      </div>
      <div className={styles.header_rules}>
        <h3 className={styles.header_intro_create}>Создание правила</h3>
        <p className={styles.header_intro_main}>
          Обязательно изучите введённую информацию, чтобы не допустить
          ошибочного изменения операций. Отменить примененное правило нельзя.
        </p>
      </div>
      <hr className={styles.divider} />
      <div className={styles.create_content}>
        <div className={styles.btns_selectPage_create}>
          <button
            className={
              page === "receipts" ? styles.active_btn : styles.btn_left
            }
            onClick={() => handleClickSetPage("receipts")}
          >
            Поступление
          </button>
          <button
            className={
              page === "pay" ? styles.active_btn_right : styles.btn_right
            }
            onClick={() => handleClickSetPage("pay")}
          >
            Выплата
          </button>
        </div>
        {page === "receipts" && <FormCreate />}
        {page === "pay" && <FormCreate />}
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_inner}> 
          <button className={styles.save_rule}>Сохранить</button>
          <button className={styles.btn_rule}>
            Применить к существующим операциям
          </button>
          <Link to={-1}><button className={styles.btn_rule}>Отменить</button></Link>
        </div>
      </div>
    </div>
  );
}

export default СreateRules;
