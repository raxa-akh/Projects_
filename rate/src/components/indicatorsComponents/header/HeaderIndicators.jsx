import React from "react";
import style from "./style/HeaderIndicators.module.css";
function HeaderIndicators() {
  return (
    <div className={style.header_container}>
      <div className={style.header_content}>
        <h1 className={style.name_company}>Название компании</h1>
        <p className={style.header_date}>3 сентября 2023 года, вторник</p>
      </div>
    </div>
  );
}

export default HeaderIndicators;
