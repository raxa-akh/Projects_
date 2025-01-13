import React, { useState } from "react";
import IncomeAndExpenses from "./Components/IncomeAndExpenses";
import ReceiptsAndPayments from "./Components/ReceiptsAndPayments";
import style from "../style/mainPage.module.css";

function MainPaymentsStructure() {
  const [incomeAndExpenses, setincomeAndExpenses] = useState(true);
  const [receiptsAndPayments, setReceiptsAndPayments] = useState(false);
  const [page, setPage] = useState("incomeAndExpenses");

  const handleClickPage = (page) => {
    setPage(page);
  };
  return (
    <div className={style.main_indicator}>
      <div className={style.select_page}>
        <button
          className={
            page === "incomeAndExpenses"
              ? style.active_btn_left
              : style.left_btn
          }
          onClick={() => {
            setincomeAndExpenses(true);
            setReceiptsAndPayments(false);
            handleClickPage("incomeAndExpenses");
          }}
        >
          Доходы и расходы
        </button>
        <button
          className={
            page === "receiptsAndPayments"
              ? style.active_btn_right
              : style.right_btn
          }
          onClick={() => {
            setincomeAndExpenses(false);
            setReceiptsAndPayments(true);
            handleClickPage("receiptsAndPayments");
          }}
        >
          Поступления и выплаты
        </button>
      </div>
      <div className={style.accrual_block}>
        {incomeAndExpenses && <IncomeAndExpenses />}
        {receiptsAndPayments && <ReceiptsAndPayments />}
      </div>
    </div>
  );
}

export default MainPaymentsStructure;
