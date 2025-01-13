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
import CashFlowInfo from "./CashFlowInfo";

function ChartCashFlow() {
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
        Поступления: Math.ceil(Math.random() * 10000 + 20000),
        Выплаты: Math.ceil(Math.random() * 10000 + 15000),
        Разница: Math.ceil(Math.random() * 5000 + 10000),
        ПоступленияПлан: Math.ceil(Math.random() * 10000 + 20000),
        ВыплатыПлан: Math.ceil(Math.random() * 10000 + 20000),
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
        <div>Поступления: {data?.Поступления}</div>
        <div>Выплаты: {data?.Выплаты}</div>
        <div>Разница: {data?.Разница}</div>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <CashFlowInfo />
      <div className={style.chart_cash_flow}>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid vertical={false} />
            <Tooltip content={<TooltipContent />} />
            <Legend
              verticalAlign="top"
              height={55}
              wrapperStyle={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 27,
              }}
            />
            <Line
              type="monotone"
              dataKey="Разница"
              stroke="#039855"
              isAnimationActive={false}
              strokeWidth={3}
            />

            <Bar dataKey="Поступления" barSize={20} fill="#32D583" />
            <Bar dataKey="Выплаты" barSize={20} fill="#FD6F8E" />
            <Bar
              dataKey="ПоступленияПлан"
              barSize={20}
              fill="#A6F4C5"
              stroke="#32D583"
              strokeWidth={2}
              strokeDasharray="3 3"
              legendType="none"
            />
            <Bar
              dataKey="ВыплатыПлан"
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

export default ChartCashFlow;
