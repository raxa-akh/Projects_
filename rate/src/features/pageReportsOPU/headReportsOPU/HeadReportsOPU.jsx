import React from 'react';
import style from './style/headReportsOPU.module.css';
import icon from '../../../assets/Icon.svg';

const HeadReportsOPU = () => {
  return (
    <div className={style.container}>
      <div className={style.container_title_head}>
        <div className={style.container_title_head_text}>
          <h1>Отчеты о прибылях и убытках</h1>
          <img src={icon} alt="?" />
        </div>
        <div>RUB</div>
      </div>
    </div>
  );
};

export default HeadReportsOPU;
