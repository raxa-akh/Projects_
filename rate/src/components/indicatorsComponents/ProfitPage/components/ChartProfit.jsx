import React, { useEffect, useState } from "react";
import style from "../../style/method.module.css";
import {
  Line,
  CartesianGrid,
  XAxis,
  Legend,
  YAxis,
  Tooltip,
  Bar,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";
import IindicatorsInfo from "./profitInfo";

function ChartProfit() {
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
        Доходы: Math.ceil(Math.random() * 10000 + 20000),
        Расходы: Math.ceil(Math.random() * 10000 + 15000),
        ДоходыПлан: Math.ceil(Math.random() * 5000 + 10000),
        РасходыПлан: Math.ceil(Math.random() * 10000 + 15),
        Дивиденты: Math.ceil(Math.random() * 5000 + 10000),
        ЧистаяПрибыль: Math.ceil(Math.random() * 12000 + 20000),
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
        <div>
          Доходы: {data?.Доход} за {data?.month}
        </div>
        <div>
          Расходы: {data?.Расходы} за {data?.month}
        </div>
        <div>
          Доходы: {data?.ДоходыПлан} за {data?.month}
        </div>
        <div>
          РасходыПлан: {data?.РасходыПлан} за {data?.month}
        </div>
        <div>
          Дивиденты: {data?.Дивиденты} за {data?.month}
        </div>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <IindicatorsInfo /> 
      <div className={style.chart}>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid vertical={false} />
            <Tooltip content={<TooltipContent />} />
            <Legend
              verticalAlign="top"
              height={36}
              wrapperStyle={{ display: "flex", justifyContent: "flex-end" }}
            />
            <Line
              type="natural"
              dataKey="Дивиденты"
              stroke="#DD2590"
              isAnimationActive={false}
              strokeWidth={3}
            />
            <Line
              type="natural"
              dataKey="ЧистаяПрибыль"
              stroke="#444CE7"
              isAnimationActive={false}
              strokeWidth={3}
            />
            <Bar dataKey="Доходы" barSize={20} fill="#32D583" />
            <Bar dataKey="Расходы" barSize={20} fill="#FD6F8E" />
            <Bar
              dataKey="ДоходыПлан"
              barSize={20}
              fill="#A6F4C5"
              stroke="#32D583"
              strokeWidth={2}
              strokeDasharray="3 3"
              legendType="none"
            />
            <Bar
              dataKey="РасходыПлан"
              barSize={20}
              fill="#FECDD6"
              stroke="#FD6F8E"
              strokeWidth={2}
              strokeDasharray="3 3"
              legendType="none"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartProfit;
