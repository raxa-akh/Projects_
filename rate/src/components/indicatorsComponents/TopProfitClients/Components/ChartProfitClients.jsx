import React, { useEffect, useState } from "react";
import style from "../../style/method.module.css";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";
function ChartProftClients() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const newData = [];
    const clients = ["ООО Ромашка", "ООО Чвк Вагнер", "ООО Кебаб Иваныч"];
    for (let i = 0; i < 12; i++) {
      newData.push({
        client: clients[i % 12],
        Доход: Math.ceil(Math.random() * 10000 + 20000),
        Расходы: Math.ceil(Math.random() * 10000 + 15000),
      });
    }
    setData(newData);
  }, []);
  return (
    <div className={style.chart_solo_clients}>
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={data}>
          <XAxis dataKey="client" />
          <YAxis />
          <CartesianGrid vertical={false} />
          <Tooltip />

          <Bar dataKey="Доход" barSize={20} fill="#8884d8" />
          <Bar dataKey="Расходы" barSize={20} fill="#f26d8e" />
          <Bar dataKey="ЧистаяПрибыль" barSize={20} fill="#62d684" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartProftClients;
