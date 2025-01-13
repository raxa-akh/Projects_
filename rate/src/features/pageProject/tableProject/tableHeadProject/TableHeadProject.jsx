import React from 'react';
import style from '../style/tableProject.module.css';

const TableHeadProject = () => {
  return (
    <thead>
      <tr>
        <th className={style.col_1}>
          <div className={style.context_col}>
            <input type="checkbox" />
            <div>Название проекта</div>
          </div>
        </th>
        <th className={style.col_2}>
          <div className={style.context_col}>Группа</div>
        </th>
        <th className={style.col_3}>
          <div className={style.context_col}>Начало/Конец</div>
        </th>
        <th className={style.col_4}>
          <div className={style.context_col}>Статус</div>
        </th>
        <th className={style.col_5}>
          <div className={style.context_col}>Поступления, ₽</div>
        </th>
        <th className={style.col_6}>
          <div className={style.context_col}>Выплаты, ₽</div>
        </th>
        <th className={style.col_7}>
          <div className={style.context_col}>Денежный поток, ₽</div>
        </th>
        <th className={style.col_8}>
          <div></div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeadProject;
