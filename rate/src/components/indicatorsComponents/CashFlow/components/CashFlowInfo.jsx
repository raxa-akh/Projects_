import React from "react";
import style from "../../style/profitInfo.module.css";

function CashFlowInfo() {
  return (
    <div className={style.indicators_info_cashFlow}>
      <div>
        <p className={style.type_indicator}>Поступления</p>
        <h2 className={style.number_indicator}>1 600 000</h2>
        <div>
          <span className={style.number_plan}>3 750 000</span>{" "}
          <span className={style.plan}>- по плану</span>
        </div>
      </div>
      <div className={style.line}>
        <hr />
      </div>
      <div>
        <p className={style.type_indicator}>Выплаты</p>
        <h2 className={style.number_indicator}>1 600 000</h2>
        <div>
          <span className={style.number_plan}>3 053 700</span>{" "}
          <span className={style.plan}>- по плану</span>
        </div>
      </div>
      <div className={style.line}>
        <hr />
      </div>
      <div>
        <p className={style.type_indicator}>Разница</p>
        <h2 className={style.number_indicator}>1 600 000</h2>
        <div>
          <span className={style.number_plan}>3 750 000</span>{" "}
          <span className={style.plan}>- по плану</span>
        </div>
      </div>
    </div>
  );
}

export default CashFlowInfo;
