import React, { useState } from "react";
import General from "./components/General";
import Operetion from "./components/Operation";
import Investment from "./components/investment";
import Finance from "./components/Finance";
import style from "../style/mainPage.module.css";

function MainCashFlow() {
  const [generalOpen, setGeneralOpen] = useState(true);
  const [operationOpen, setOperationOpen] = useState(false);
  const [investmentOpen, setInvestmenOpen] = useState(false);
  const [financeOpen, setFinanceOpen] = useState(false);
  const [page, setPage] = useState("general");

  const handleClickPage = (page) => {
    setPage(page);
  };
  return (
    <div className={style.main_indicator}>
      <div className={style.select_page}>
        <button
          className={
            page === "general" ? style.active_btn_left : style.left_btn
          }
          onClick={() => {
            setGeneralOpen(true);
            setOperationOpen(false);
            setInvestmenOpen(false);
            setFinanceOpen(false);
            handleClickPage("general");
          }}
        >
          Общий
        </button>
        <button
          className={
            page === "operations" ? style.active_btn_neutral : style.neutral_btn
          }
          onClick={() => {
            setOperationOpen(true);
            setGeneralOpen(false);
            setInvestmenOpen(false);
            setFinanceOpen(false);
            handleClickPage("operations");
          }}
        >
          Операционный
        </button>
        <button
          className={
            page === "investment" ? style.active_btn_neutral : style.neutral_btn
          }
          onClick={() => {
            setInvestmenOpen(true);
            setOperationOpen(false);
            setGeneralOpen(false);
            setFinanceOpen(false);
            handleClickPage("investment");
          }}
        >
          Инвестиционный
        </button>
        <button
          className={
            page === "finance" ? style.active_btn_right : style.right_btn
          }
          onClick={() => {
            setFinanceOpen(true);
            setInvestmenOpen(false);
            setOperationOpen(false);
            setGeneralOpen(false);
            handleClickPage("finance");
          }}
        >
          Финансовый
        </button>
      </div>
      <div className={style.accrual_block}>
        {generalOpen && <General />}
        {operationOpen && <Operetion />}
        {investmentOpen && <Investment />}
        {financeOpen && <Finance />}
      </div>
    </div>
  );
}

export default MainCashFlow;
