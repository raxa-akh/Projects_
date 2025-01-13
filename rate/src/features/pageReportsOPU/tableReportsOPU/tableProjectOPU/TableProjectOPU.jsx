import React from 'react';
import style from './style/tableProjectOPU.module.css';
import { profitAndLossStatement } from '../../../../mock';

const TableProjectOPU = () => {
  return (
    <table className={style.container_table}>
      <tbody>
        <tr>
          <th>
            <div className={style.col}></div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row}>
                <span>{item.date}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_end}>
              <span>Итого</span>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <div className={style.col_dop}>
              <span>Нет проектов</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.projectTitle}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_dop_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableProjectOPU;
