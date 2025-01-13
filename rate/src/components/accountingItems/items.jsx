import React from "react";
import style from "./accItems.module.css";
import MainComponent from "./Components/MainComponent";
function items() {
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const formattedDate = currentDate.toLocaleDateString("ru-RU", options);
  return (
    <div className={style.container}>
      <div className={style.header_acc}>
        <h3 className={style.company}>Моя компания</h3>
        <p className={style.date}>{formattedDate}</p>
        <p></p>
      </div>
      <hr className={style.divider} />
      <MainComponent />
    </div>
  );
}

export default items;
