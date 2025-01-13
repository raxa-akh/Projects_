import React from 'react';
import style from './style/tableProjectDDU.module.css';
import { projectArr } from '../../../../mock';

const TableProjectDDS = () => {
  const arrProj = [];

  console.log();
  if (arrProj.length === 0) {
    return (
      <table className={style.conteiner_table}>
        <tbody>
          <tr>
            <th className={style.col}>
              <div className={style.col_style_main}>
                <span></span>
              </div>
            </th>
            {projectArr.map((item) => (
              <td key={item.id} className={style.row}>
                <div className={style.row_col_style_head}>
                  <span>{item.month}</span>
                </div>
              </td>
            ))}
            <td>
              <div className={style.col_end_head}>
                <span>Итого</span>
              </div>
            </td>
          </tr>
          <tr>
            <th className={style.col}>
              <div className={style.col_style}>
                <span>No project</span>
              </div>
            </th>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style}>
                <span>-</span>
              </div>
            </td>
            <td className={style.row}>
              <div className={style.row_style_end}>
                <span>-</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <table className={style.conteiner_table}>
      <tbody>
        <tr>
          <th className={style.col}>
            <div className={style.col_style_main}>
              <span></span>
            </div>
          </th>
          {projectArr.map((item) => (
            <td key={item.id} className={style.row}>
              <div className={style.row_col_style_head}>
                <span>{item.month}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.col_end_head}>
              <span>Итого</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableProjectDDS;
