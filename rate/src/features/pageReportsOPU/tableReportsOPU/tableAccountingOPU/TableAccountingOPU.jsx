import React from 'react';
import { profitAndLossStatement } from '../../../../mock';
import style from './style/tableAccountingOPU.module.css';

const TableAccountingOPU = () => {
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
            <div className={style.col}>
              <span>Частичная прибыль</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row}>
                <span>{item.partialProfit}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <div className={style.col_dop}>
              <span>Дивиденды</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.dividens}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_dop_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <div className={style.col}>
              <span>Нераспределенная прибыль</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row}>
                <span>{item.retainedEarnings}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableAccountingOPU;
