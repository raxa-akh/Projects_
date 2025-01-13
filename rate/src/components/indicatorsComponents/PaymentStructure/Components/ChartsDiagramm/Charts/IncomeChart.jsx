import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";
function IncomeChart() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const newData = [];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    for (let i = 0; i < 12; i++) {
      newData.push({
        month: months[i % 12],
        Доход: Math.ceil(Math.random() * 10000 + 20000),
        Расходы: Math.ceil(Math.random() * 10000 + 15000),
      });
    }
    setData(newData);
  }, []);
  return (
    <div style={{ width: "50%", height: 500 }}>
      <ResponsiveContainer>
        <ComposedChart data={data}>
          <XAxis dataKey="month" />
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

export default IncomeChart;
