import React from 'react';
import style from './style/tableAccountingOperationOPU.module.css';
import { profitAndLossStatement } from '../../../../mock/index';

const TableAccountingOperationOPU = () => {
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
              <span>Выручка</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.partialProfit}</span>
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
            <div className={style.col_dop}>
              <span>Основные расходы</span>
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
              <span>Опероационная прибыль</span>
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
        <tr>
          <th>
            <div className={style.col}>
              <span>Опероационная рентабильность</span>
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
        <tr>
          <th>
            <div className={style.col_dop}>
              <span>Прочие доходы</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.retainedEarnings}</span>
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
            <div className={style.col_dop}>
              <span>Прочие расходы</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.retainedEarnings}</span>
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
            <div className={style.col_dop}>
              <span>Армотизация</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.retainedEarnings}</span>
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
            <div className={style.col_dop}>
              <span>Проценты по кредитам и займам</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.retainedEarnings}</span>
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
            <div className={style.col_dop}>
              <span>Налог на прибыль (доходы)</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.retainedEarnings}</span>
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
              <span>Читсая прибыль (убыток)</span>
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
        <tr>
          <th>
            <div className={style.col}>
              <span>Рентабильность чистой прибыли</span>
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
        <tr>
          <th>
            <div className={style.col_dop}>
              <span>Дивиденды</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.retainedEarnings}</span>
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
            <div className={style.col_dop}>
              <span>Нераспределенная прибыль</span>
            </div>
          </th>
          {profitAndLossStatement.map((item) => (
            <td key={item.id}>
              <div className={style.row_dop}>
                <span>{item.retainedEarnings}</span>
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

export default TableAccountingOperationOPU;
