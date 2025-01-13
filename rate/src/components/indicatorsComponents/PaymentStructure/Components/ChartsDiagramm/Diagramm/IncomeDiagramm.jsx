import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import style from "../style/diagramm.module.css";

function IncomeDiagramm() {
  const data = [
    {
      name: "Контекстная реклама(%)",
      value: 400,
      color: "#0086c9",
    },
    {
      name: "SMM продвижение(%)",
      value: 300,
      color: "#0ba5ec",
    },
    {
      name: "Разработка сайта(%)",
      value: 500,
      color: "#b9e6ff",
    },
    {
      name: "SEO продвижение(%)",
      value: 200,
      color: "#37bffa",
    },
  ];
  return (
    <div>
      <h4 className={style.label_diagramm}>Доходы</h4>
      <PieChart width={490} height={250}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="right"
          className="diagramm"
          wrapperStyle={{
            top: "70px",
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

export default IncomeDiagramm;
