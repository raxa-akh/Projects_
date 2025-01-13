import React from 'react';
import style from './style/modalOperationExcel.module.css';

const ModalOperationExcel = () => {
  return (
    <div className={style.container_main}>
      <div>
        <span className={style.container_main_text}>
          Загрузите операции из вашего Excel файла (.xlsx)
        </span>
      </div>
      <div>
        <span className={style.container_main_text_support}>
          Вы сможете предварительно посмотреть данные перед их
          импортом.Внимание! Для того чтобы импорт прошел успешно, Exсel файл
          должен иметь определенный вид.
        </span>
      </div>
    </div>
  );
};

export default ModalOperationExcel;
