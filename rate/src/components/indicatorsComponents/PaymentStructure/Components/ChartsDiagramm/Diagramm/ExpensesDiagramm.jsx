import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import style from "../style/diagramm.module.css";
function ExpensesDiagramm() {
  const data2 = [
    {
      name: "Расходы на сервисы",
      value: 400,
      color: "#dc6803",
    },
    {
      name: "Налог на прибыль",
      value: 300,
      color: "#f79007",
    },
    {
      name: "Процент по кредитам",
      value: 500,
      color: "#fdb122",
    },
    {
      name: "Офисные расходы",
      value: 200,
      color: "#fec84a",
    },
    {
      name: "Аренда",
      value: 500,
      color: "#fedf89 ",
    },
    {
      name: "Оплата труда",
      value: 200,
      color: "#fef0c7",
    },
  ];
  return (
    <div>
      <h4 className={style.label_diagramm}>Расходы</h4>
      <PieChart width={490} height={270}>
        <Pie data={data2} cx="50%" cy="50%" outerRadius={80} label>
          {data2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="right"
          wrapperStyle={{
            top: "50px",
            left: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "stretch",
            height: "15vh",
            width: "25vh",
          }}
          iconType="circle"
        />
      </PieChart>
    </div>
  );
}

export default ExpensesDiagramm;
