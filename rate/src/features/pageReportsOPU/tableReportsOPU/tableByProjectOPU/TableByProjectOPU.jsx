import React, { useState } from 'react';
import { profitAndLossStatement } from '../../../../mock/index';
import minus from '../../../../assets/minus.svg';
import plus from '../../../../assets/plus420.svg';
import style from './style/tableByProjectOPU.module.css';

const TableByProjectOPU = () => {
  const [openRows, setOpenRows] = useState([]);
  const toggleRow = (id) => {
    if (openRows.includes(id)) {
      setOpenRows(openRows.filter((rowId) => rowId !== id));
    } else {
      setOpenRows([...openRows, id]);
    }
  };
  return (
    <table className={style.conteiner_table}>
      <tbody>
        <tr>
          <th>
            <div className={style.col}>
              <span>Статья учета</span>
            </div>
          </th>
          {profitAndLossStatement.map((project) => (
            <React.Fragment key={project.id}>
              {project.project ? (
                <th key={project.id} onClick={() => toggleRow(project.id)}>
                  <div className={style.col}>
                    {project.projectTitle}
                    {openRows.includes(project.id) ? (
                      <img src={minus} alt="-" />
                    ) : (
                      <img src={plus} alt="+" />
                    )}
                  </div>
                </th>
              ) : (
                <th key={project.id}>
                  <div className={style.col}>
                    <span>{project.projectTitle}</span>
                  </div>
                </th>
              )}
              {openRows.includes(project.id) &&
                project.project &&
                project.project.map((item) => (
                  <th key={item.id}>
                    <div className={style.row_dop}>
                      <span>{item.projectTitle}</span>
                    </div>
                  </th>
                ))}
            </React.Fragment>
          ))}
          <th>
            <div className={style.row_end}>
              <span>Итого</span>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div className={style.col}>
              <span>Чистая прибыль</span>
            </div>
          </th>
          {profitAndLossStatement.map((project) => (
            <React.Fragment key={project.id}>
              {project.project ? (
                <th key={project.id}>
                  <div className={style.row}>
                    <span>{project.partialProfit}</span>
                  </div>
                </th>
              ) : (
                <th key={project.id}>
                  <div className={style.row}>
                    <span>{project.partialProfit}</span>
                  </div>
                </th>
              )}
              {openRows.includes(project.id) &&
                project.project &&
                project.project.map((item) => (
                  <th key={item.id}>
                    <div className={style.row}>
                      <span>{item.partialProfit}</span>
                    </div>
                  </th>
                ))}
            </React.Fragment>
          ))}
          <th>
            <div className={style.row_end}>
              <span>-</span>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div className={style.col_dop}>
              <span>Дивиденды</span>
            </div>
          </th>
          {profitAndLossStatement.map((project) => (
            <React.Fragment key={project.id}>
              {project.project ? (
                <th key={project.id}>
                  <div className={style.row_dop}>
                    <span>{project.dividens}</span>
                  </div>
                </th>
              ) : (
                <th key={project.id}>
                  <div className={style.row_dop}>
                    <span>{project.dividens}</span>
                  </div>
                </th>
              )}
              {openRows.includes(project.id) &&
                project.project &&
                project.project.map((item) => (
                  <th key={item.id}>
                    <div className={style.row_dop}>
                      <span>{item.dividens}</span>
                    </div>
                  </th>
                ))}
            </React.Fragment>
          ))}
          <th>
            <div className={style.row_end_dop}>
              <span>-</span>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div className={style.col}>
              <span>Нераспределенная прибыль</span>
            </div>
          </th>
          {profitAndLossStatement.map((project) => (
            <React.Fragment key={project.id}>
              {project.project ? (
                <th key={project.id}>
                  <div className={style.row}>
                    <span>{project.retainedEarnings}</span>
                  </div>
                </th>
              ) : (
                <th key={project.id}>
                  <div className={style.row}>
                    <span>{project.retainedEarnings}</span>
                  </div>
                </th>
              )}
              {openRows.includes(project.id) &&
                project.project &&
                project.project.map((item) => (
                  <th key={item.id}>
                    <div className={style.row}>
                      <span>{item.retainedEarnings}</span>
                    </div>
                  </th>
                ))}
            </React.Fragment>
          ))}
          <th>
            <div className={style.row_end}>
              <span>-</span>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default TableByProjectOPU;
