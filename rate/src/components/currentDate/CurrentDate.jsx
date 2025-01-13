import React, { useState } from 'react';
import cl from './style/currentDate.module.css';
const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString('ru-RU', options);

  return <div className={cl.currentDate}>{formattedDate}</div>;
};

export default CurrentDate;
