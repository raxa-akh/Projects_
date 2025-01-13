import React, { useEffect, useState } from "react";
import style from "../../style/method.module.css";
import {
  CartesianGrid,
  XAxis,
  Legend,
  YAxis,
  Tooltip,
  Bar,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

function ChartProfitProjects() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const newData = [];
    const project = [
      "СММ для консалтинка ооо Ромашка",
      "СММ для консалтинка ооо Ромашка",
      "СММ для консалтинка ооо Ромашка",
      "СММ для консалтинка ооо Ромашка",
    ];
    for (let i = 0; i < 4; i++) {
      newData.push({
        project: project[i % 12],
        ПлановаяРентабельность: Math.ceil(Math.random() * 10000 + 20000),
        ФактическаяРентабельнось: Math.ceil(Math.random() * 10000 + 15000),
        ПлановаяПрибыль: Math.ceil(Math.random() * 10000 + 20000),
        ФактическаяПрибыль: Math.ceil(Math.random() * 10000 + 15000),
      });
    }
    setData(newData);
  }, []);

  const TooltipContent = (props) => {
    if (!props.active && !props.payload) {
      return;
    }
    const data = props?.payload[0]?.payload;

    return (
      <div style={{}}>
        <div>Плановая: {data?.ПлановаяРентабельность}</div>
        <div>ФактическаяРентабельнось: {data?.ФактическаяРентабельнось}</div>
        <div>Плановая прибыль: {data?.ПлановаяПрибыль}</div>
        <div>ФактическаяПрибыль: {data?.ФактическаяПрибыль}</div>
      </div>
    );
  };

  return (
    <div className={style.chart_solo}>
      <ResponsiveContainer>
        <ComposedChart data={data}>
          <XAxis dataKey="project" />
          <YAxis />
          <CartesianGrid strokeDasharray="5 5" stroke="#DD2590" />
          <Tooltip content={<TooltipContent />} />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ display: "flex", justifyContent: "flex-end" }}
          />

          <Bar dataKey="ПлановаяРентабельность" barSize={20} fill="#B9E6FE" />
          <Bar dataKey="ФактическаяРентабельнось" barSize={20} fill="#0BA5EC" />
          <Bar dataKey="ПлановаяПрибыль" barSize={20} fill="#6CE9A6" />
          <Bar dataKey="ФактическаяПрибыль" barSize={20} fill="#12B76A" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartProfitProjects;
