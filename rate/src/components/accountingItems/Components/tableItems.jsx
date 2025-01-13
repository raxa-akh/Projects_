import React, { useState } from "react";
import Table from "./table";

import style from "../accItems.module.css";

function TableItems() {
  const [page, setPage] = useState("income");

  const handleClickPage = (page) => {
    setPage(page);
  };
  return (
    <div style={{ width: "45%" }}>
      <div className={style.navBtn_table}>
        <button
          className={page === "income" ? style.active_btn_left : style.left_btn}
          onClick={() => handleClickPage("income")}
          style={{ borderRadius: "8px 0px 0px 0px" }}
        >
          Доходы
        </button>
        <button
          onClick={() => handleClickPage("expenses")}
          className={
            page === "expenses" ? style.active_btn_neutral : style.neutral_btn
          }
        >
          Расходы
        </button>
        <button
          onClick={() => handleClickPage("active")}
          className={
            page === "active" ? style.active_btn_neutral : style.neutral_btn
          }
        >
          Активы
        </button>
        <button
          className={
            page === "obligations"
              ? style.active_btn_neutral
              : style.neutral_btn
          }
          onClick={() => handleClickPage("obligations")}
        >
          Обязательства
        </button>
        <button
          className={
            page === "capital" ? style.active_btn_right : style.right_btn
          }
          onClick={() => handleClickPage("capital")}
          style={{ borderRadius: "0px 8px 0px 0px" }}
        >
          Капитал
        </button>
      </div>
      <Table />
    </div>
  );
}

export default TableItems;
