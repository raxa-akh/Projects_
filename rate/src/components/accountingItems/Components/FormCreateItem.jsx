import React, { useState } from "react";
import style from "../accItems.module.css";
import addItem from "../../../assets/addItem.svg";
import Select from "react-select";

function FormCreateItem() {
  const options = [
    { value: "Покупка товаров", label: "Покупка товаров" },
    { value: "Производствнный персонал", label: "Производственный персонал" },
    { value: "Административный персонал", label: "Административный персонал" },
    { value: "Аренда", label: "Аренда" },
    { value: "Прочие расходы", label: "Прочие расходы" },
  ];
  const [page, setPage] = useState("income");

  const handleClickPage = (page) => {
    setPage(page);
  };
  return (
    <div className={style.container_form}>
      <div className={style.header_form}>
        <h3>Создание учетной статьи</h3>
        <div className={style.navBtn}>
          <button
            className={
              page === "income" ? style.active_btn_left : style.left_btn
            }
            onClick={() => handleClickPage("income")}
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
          >
            Капитал
          </button>
        </div>
      </div>
      <div className={style.form_container}>
        <div className={style.form}>
          <input placeholder="Название" className={style.form_item} />
          <Select
            placeholder="К чему относится"
            options={options}
            className={style.select_type_item}
          />
          <input placeholder="Комментарий" className={style.form_item} />
        </div>
      </div>
      <div className={style.btn_add_items}>
        <button className={style.add_btn}>
          <img alt="add item" src={addItem} />
          Добавить статью
        </button>
      </div>
    </div>
  );
}

export default FormCreateItem;
