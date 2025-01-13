import React from "react";
import Balance from "./components/Balance";
import style from "../style/mainPage.module.css";

function BalanceMain() {
  return (
    <div className={style.accrual_block_balance}>
      <Balance />
    </div>
  );
}

export default BalanceMain;
