import React from "react";
import style from "../../style/method.module.css";
import ExpensesDiagramm from "./ChartsDiagramm/Diagramm/ExpensesDiagramm";
import IncomeDiagramm from "./ChartsDiagramm/Diagramm/IncomeDiagramm";
import ExpensesChart from "./ChartsDiagramm/Charts/ExpensesChart";
import IncomeChart from "./ChartsDiagramm/Charts/IncomeChart";
function IncomeAndExpenses() {

  return (
    <div className={style.block_structure_payments}>
      <div className={style.payments_income}>
        <IncomeDiagramm />
        <ExpensesDiagramm />
      </div>
      <div className={style.sharts_pi}>
        <ExpensesChart />
        <IncomeChart />
      </div>
    </div>
  );
}

export default IncomeAndExpenses;
