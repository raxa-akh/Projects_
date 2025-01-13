import React, { useState } from "react";
import CashMethod from "./Components/CashMethod";
// import AccrualMethod from "./Components/ AccrualMethod";
import style from "../style/mainPage.module.css";

function TopProfitsClientMain() {
  const [accrualMethodsOpen, setAccrualMethodsOpen] = useState(true);
  const [cashMethodOpen, setCashMethodOpen] = useState(false);
  const [page, setPage] = useState("accrual");

  const handleClickPage = (page) => {
    setPage(page);
  };
  return (
    <div className={style.profit_page}>
      <div className={style.select_page}>
        <button
          className={
            page === "accrual" ? style.active_btn_left : style.left_btn
          }
          onClick={() => {
            setAccrualMethodsOpen(true);
            setCashMethodOpen(false);
            handleClickPage("accrual");
          }}
        >
          Метод начисления
        </button>
        <button
          className={page === "cash" ? style.active_btn_right : style.right_btn}
          onClick={() => {
            setAccrualMethodsOpen(false);
            setCashMethodOpen(true);
            handleClickPage("cash");
          }}
        >
          Кассовый метод
        </button>
      </div>
      <div className={style.accrual_block}>
        {/* {accrualMethodsOpen && <AccrualMethod />} */}
        {cashMethodOpen && <CashMethod />}
      </div>
    </div>
  );
}

export default TopProfitsClientMain;
