import React, { useState, useEffect } from "react";
import style from "../../style/method.module.css";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Legend,
} from "recharts";

function Balance() {
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
      const income = Math.ceil(Math.random() * 20000 - 10000);
      newData.push({
        month: months[i % 12],
        Доход: income,
      });
    }
    setData(newData);
  }, []);

  // const TooltipContent = (props) => {
  //   if (!props.active && !props.payload) {
  //     return;
  //   }
  //   const data = props?.payload[0]?.payload;

  //   return (
  //     <div style={{}}>
  //       <div>Доход: {data?.Остаток}</div>
  //     </div>
  //   );
  // };
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.Доход));
    const dataMin = Math.min(...data.map((i) => i.Доход));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <>
      <div className={style.chart_solo}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend
              iconSize={30}
              verticalAlign="top"
              height={36}
              wrapperStyle={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            />

            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off / 10} stopColor="#12B76A" stopOpacity={1} />
                <stop offset={off} stopColor="#D1FADF" stopOpacity={1} />
                <stop offset={off} stopColor="#FEE4E2" stopOpacity={1} />
                <stop offset={20} stopColor="#F04438" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="step"
              dataKey="Доход"
              stroke="url(#splitColor)"
              strokeWidth={3}
              fill="url(#splitColor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Balance;
