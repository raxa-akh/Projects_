import React from 'react';
import style from './style/modalOperationExtract.module.css';

const ModalOperationExtract = () => {
  return (
    <div className={style.container_main}>
      <div>
        <span className={style.container_main_text}>
          Загрузите выписки в формате 1С (.txt) из вашего интернет-банка
        </span>
      </div>
      <div>
        <span className={style.container_main_text_support}>
          Вы сможете предварительно посмотреть данные перед их импортом.
        </span>
      </div>
    </div>
  );
};

export default ModalOperationExtract;
