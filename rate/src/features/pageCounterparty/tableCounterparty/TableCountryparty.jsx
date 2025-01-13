import React from 'react';
import style from './style/tableCountryparty.module.css';
import { contrAgent } from '../../../mock';
const TableCountryparty = () => {
  if (contrAgent.length === 0) {
    return (
      <table className={style.content_table}>
        <thead>
          <tr>
            <th className={style.col_1}>
              <div className={style.table_col}>
                <input type="checkbox" />
                <div>Контрагент</div>
              </div>
            </th>
            <th className={style.col_2}>
              <div className={style.table_col}>Тип</div>
            </th>
            <th className={style.col_3}>
              <div className={style.table_col}>Группа</div>
            </th>
            <th className={style.col_4}>
              <div className={style.table_col_end}>ИНН</div>
            </th>
            <th className={style.col_5}>
              <div className={style.table_col_end}>Операций</div>
            </th>
            <th className={style.col_6}>
              <div className={style.table_col_end}>Дебиторка</div>
            </th>
            <th className={style.col_7}>
              <div className={style.table_col_end}>Кредиторка</div>
            </th>
            <th className={style.col_8}>
              <div className={style.table_col_end}>Оборот</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8">
              <div className={style.table_row}>No operation</div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <table className={style.content_table}>
      <thead>
        <tr>
          <th className={style.col_1}>
            <div className={style.table_col}>
              <input type="checkbox" />
              <div>Контрагент</div>
            </div>
          </th>
          <th className={style.col_2}>
            <div className={style.table_col}>Тип</div>
          </th>
          <th className={style.col_3}>
            <div className={style.table_col}>Группа</div>
          </th>
          <th className={style.col_4}>
            <div className={style.table_col_end}>ИНН</div>
          </th>
          <th className={style.col_5}>
            <div className={style.table_col_end}>Операций</div>
          </th>
          <th className={style.col_6}>
            <div className={style.table_col_end}>Дебиторка</div>
          </th>
          <th className={style.col_7}>
            <div className={style.table_col_end}>Кредиторка</div>
          </th>
          <th className={style.col_8}>
            <div className={style.table_col_end}>Оборот</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {contrAgent.map((item) => (
          <tr key={item.contragent_id}>
            <td>
              <div className={style.table_row}>
                <input type="checkbox" />
                <div>{item.title}</div>
              </div>
            </td>
            <td>
              <div className={style.table_row}>{item.contragent_type}</div>
            </td>
            <td>
              <div className={style.table_row}>
                {!item.contragent_group_id
                  ? 'Без группы'
                  : item.contragent_group_id}
              </div>
            </td>
            <td>
              <div className={style.table_row_end}>{item.contragent_inn}</div>
            </td>
            <td>
              <div className={style.table_row_end}>{item.description}</div>
            </td>
            <td>
              <div className={style.table_row_end}>-</div>
            </td>
            <td>
              <div className={style.table_row_end}>-</div>
            </td>
            <td>
              <div className={style.table_row_end}>-</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCountryparty;
