import React, { useState } from "react";
import HeaderIndicators from "../../components/indicatorsComponents/header/HeaderIndicators";
import style from "././style/indicatorsMain.module.css";
import MainProfit from "./ProfitPage/mainProfit";
import MainCashFlow from "./CashFlow/MainCashFlow";
import MainPaymentsStructure from "./PaymentStructure/mainPaymentsStructure";
import MainProfitProjects from "./ProfitProjects/mainProfitProjects";
import BalanceMain from "./BalanceOnAccount/BalanceMain";
import TopProfitsClientMain from "./TopProfitClients/TopProfitClients";
import Select from "react-select";

const options = [
  { value: "profit", label: "Прибыль" },
  { value: "cashFlow", label: "Денежный поток" },
  { value: "balanceOnAccount", label: "Остатки на счетах" },
  { value: "structurePayments", label: "Структура платежей" },
  { value: "profitClients", label: "Самые доходные клиенты" },
  { value: "profitProjects", label: "Прибыльность проектов" },
];

const MainIndicators = () => {
  const [selectValue, setSelectValue] = useState(options[0]);
  const handleSelectPage = (selectedOption) => {
    setSelectValue(selectedOption);
  };
  return (
    <div className={style.indicators_main}>
      <HeaderIndicators />
      <div className={style.method_content}>
        <Select
          options={options}
          value={selectValue}
          onChange={handleSelectPage}
          className={style.select_indicator}
        />
      </div>
      {selectValue.value === "profit" && <MainProfit />}
      {selectValue.value === "cashFlow" && <MainCashFlow />}
      {selectValue.value === "structurePayments" && <MainPaymentsStructure />}
      {selectValue.value === "profitProjects" && <MainProfitProjects />}
      {selectValue.value === "balanceOnAccount" && <BalanceMain />}
      {selectValue.value === "profitClients" && <TopProfitsClientMain />}
      <div>
        <div>Даты</div>
        <div>Фильтры</div>
      </div>
    </div>
  );
};

export default MainIndicators;
