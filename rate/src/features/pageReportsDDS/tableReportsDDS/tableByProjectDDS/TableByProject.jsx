import React, { useState } from 'react';
import { byProject } from '../../../../mock';
import minus from '../../../../assets/minus.svg';
import plus from '../../../../assets/plus420.svg';
import chevronUp from '../../../../assets/chevron-up.svg';
import chevronDown from '../../../../assets/chevron-down.svg';

import style from './style/tableByProject.module.css';

const TableByProject = () => {
  const [openRows, setOpenRows] = useState([]);
  const [receptis, setReceptis] = useState(false);
  const [payments, setPayments] = useState(false);

  const toggleRow = (id) => {
    if (openRows.includes(id)) {
      setOpenRows(openRows.filter((rowId) => rowId !== id));
    } else {
      setOpenRows([...openRows, id]);
    }
  };
  const handleReceptis = () => {
    setReceptis((prev) => !prev);
  };
  const handlePayments = () => {
    setPayments((prev) => !prev);
  };
  return (
    <table className={style.conteiner_table}>
      <tbody>
        <tr>
          <th>
            <div className={style.col_style}>
              <span>Статья учета</span>
            </div>
          </th>
          {byProject.map((project) => (
            <React.Fragment key={project.id}>
              {project.project ? (
                <th
                  key={project.id}
                  onClick={() => toggleRow(project.id)}
                  className={style.col_row_main}
                >
                  <div className={style.col_style_proj}>
                    {project.projectTitle}
                    {openRows.includes(project.id) ? (
                      <img src={minus} alt="-" />
                    ) : (
                      <img src={plus} alt="+" />
                    )}
                  </div>
                </th>
              ) : (
                <th key={project.id} className={style.col_row_main}>
                  <div className={style.col_style_proj}>
                    <span>{project.projectTitle}</span>
                  </div>
                </th>
              )}
              {openRows.includes(project.id) &&
                project.project &&
                project.project.map((item) => (
                  <th key={item.id}>
                    <div className={style.row_style}>
                      <span>{item.projectTitle}</span>
                    </div>
                  </th>
                ))}
            </React.Fragment>
          ))}
        </tr>
        <tr>
          <th>
            <div className={style.col_style}>
              <span>Операционный поток</span>
            </div>
          </th>
          {byProject.map((project) => (
            <React.Fragment key={project.id}>
              {project.project ? (
                <th key={project.id} className={style.col_row}>
                  <div className={style.col_style}>
                    <span>{project.operationalFlow}</span>
                  </div>
                </th>
              ) : (
                <th key={project.id} className={style.col_row}>
                  <div className={style.col_style}>
                    <span>{project.operationalFlow}</span>
                  </div>
                </th>
              )}
              {openRows.includes(project.id) &&
                project.project &&
                project.project.map((item) => (
                  <th key={item.id} className={style.col_row}>
                    <div className={style.col_style}>
                      <span>{item.operationalFlow}</span>
                    </div>
                  </th>
                ))}
            </React.Fragment>
          ))}
        </tr>
        <tr>
          <th className={style.col}>
            <div className={style.col_style_menu} onClick={handleReceptis}>
              {receptis ? (
                <img src={chevronUp} alt="chevron" />
              ) : (
                <img src={chevronDown} alt="chevron" />
              )}
              <span>Поступления</span>
            </div>
          </th>
          {byProject.map((project) => (
            <React.Fragment key={project.id}>
              {project.project ? (
                <th key={project.id} className={style.col_1}>
                  <div className={style.row_style_content}>
                    <span>{project.operationalFlow_receptis}</span>
                  </div>
                </th>
              ) : (
                <th key={project.id} className={style.col_2}>
                  <div className={style.row_style_content}>
                    <span>{project.operationalFlow_receptis}</span>
                  </div>
                </th>
              )}
              {openRows.includes(project.id) &&
                project.project &&
                project.project.map((item) => (
                  <th key={item.id} className={style.col_dop}>
                    <div className={style.row_style_content}>
                      <span>{item.operationalFlow_receptis}</span>
                    </div>
                  </th>
                ))}
            </React.Fragment>
          ))}
        </tr>
        {receptis && (
          <>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_menu_text}>
                  <span>Доходы</span>
                </div>
              </th>
              {byProject.map((project) => (
                <React.Fragment key={project.id}>
                  {project.project ? (
                    <th key={project.id} className={style.col_1}>
                      <div className={style.row_style_content}>
                        <span>{project.operationalFlow_receptis_income}</span>
                      </div>
                    </th>
                  ) : (
                    <th key={project.id} className={style.col_2}>
                      <div className={style.row_style_content}>
                        <span>{project.operationalFlow_receptis_income}</span>
                      </div>
                    </th>
                  )}
                  {openRows.includes(project.id) &&
                    project.project &&
                    project.project.map((item) => (
                      <th key={item.id} className={style.col_dop}>
                        <div className={style.row_style_content}>
                          <span>{item.operationalFlow_receptis_income}</span>
                        </div>
                      </th>
                    ))}
                </React.Fragment>
              ))}
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_menu_text}>
                  <span>Оборотные активы</span>
                </div>
              </th>
              {byProject.map((project) => (
                <React.Fragment key={project.id}>
                  {project.project ? (
                    <th key={project.id} className={style.col_1}>
                      <div className={style.row_style_content}>
                        <span>
                          {project.operationalFlow_receipts_current_assets}
                        </span>
                      </div>
                    </th>
                  ) : (
                    <th key={project.id} className={style.col_2}>
                      <div className={style.row_style_content}>
                        <span>
                          {project.operationalFlow_receipts_current_assets}
                        </span>
                      </div>
                    </th>
                  )}
                  {openRows.includes(project.id) &&
                    project.project &&
                    project.project.map((item) => (
                      <th key={item.id} className={style.col_dop}>
                        <div className={style.row_style_content}>
                          <span>
                            {item.operationalFlow_receipts_current_assets}
                          </span>
                        </div>
                      </th>
                    ))}
                </React.Fragment>
              ))}
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_menu_text}>
                  <span>Краткосрочные обязательства</span>
                </div>
              </th>
              {byProject.map((project) => (
                <React.Fragment key={project.id}>
                  {project.project ? (
                    <th key={project.id} className={style.col_1}>
                      <div className={style.row_style_content}>
                        <span>
                          {
                            project.operationalFlow_receipts_short_term_liabilities
                          }
                        </span>
                      </div>
                    </th>
                  ) : (
                    <th key={project.id} className={style.col_2}>
                      <div className={style.row_style_content}>
                        <span>
                          {
                            project.operationalFlow_receipts_short_term_liabilities
                          }
                        </span>
                      </div>
                    </th>
                  )}
                  {openRows.includes(project.id) &&
                    project.project &&
                    project.project.map((item) => (
                      <th key={item.id} className={style.col_dop}>
                        <div className={style.row_style_content}>
                          <span>
                            {
                              item.operationalFlow_receipts_short_term_liabilities
                            }
                          </span>
                        </div>
                      </th>
                    ))}
                </React.Fragment>
              ))}
            </tr>
          </>
        )}
        <tr>
          <th className={style.col}>
            <div className={style.col_style_menu} onClick={handlePayments}>
              {payments ? (
                <img src={chevronUp} alt="chevron" />
              ) : (
                <img src={chevronDown} alt="chevron" />
              )}
              <span>Выплаты</span>
            </div>
          </th>
          {byProject.map((project) => (
            <React.Fragment key={project.id}>
              {project.project ? (
                <th key={project.id} className={style.col_1}>
                  <div className={style.row_style_content}>
                    <span>{project.operationalFlow_payments}</span>
                  </div>
                </th>
              ) : (
                <th key={project.id} className={style.col_2}>
                  <div className={style.row_style_content}>
                    <span>{project.operationalFlow_payments}</span>
                  </div>
                </th>
              )}
              {openRows.includes(project.id) &&
                project.project &&
                project.project.map((item) => (
                  <th key={item.id} className={style.col_dop}>
                    <div className={style.row_style_content}>
                      <span>{item.operationalFlow_payments}</span>
                    </div>
                  </th>
                ))}
            </React.Fragment>
          ))}
        </tr>
        {payments && (
          <>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_menu_text}>
                  <span>Расходы</span>
                </div>
              </th>
              {byProject.map((project) => (
                <React.Fragment key={project.id}>
                  {project.project ? (
                    <th key={project.id} className={style.col_1}>
                      <div className={style.row_style_content}>
                        <span>{project.operationalFlow_payments}</span>
                      </div>
                    </th>
                  ) : (
                    <th key={project.id} className={style.col_2}>
                      <div className={style.row_style_content}>
                        <span>{project.operationalFlow_payments}</span>
                      </div>
                    </th>
                  )}
                  {openRows.includes(project.id) &&
                    project.project &&
                    project.project.map((item) => (
                      <th key={item.id} className={style.col_dop}>
                        <div className={style.row_style_content}>
                          <span>{item.operationalFlow_payments}</span>
                        </div>
                      </th>
                    ))}
                </React.Fragment>
              ))}
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_menu_text}>
                  <span>Оборотные активы</span>
                </div>
              </th>
              {byProject.map((project) => (
                <React.Fragment key={project.id}>
                  {project.project ? (
                    <th key={project.id} className={style.col_1}>
                      <div className={style.row_style_content}>
                        <span>
                          {project.operationalFlow_payments_current_assets}
                        </span>
                      </div>
                    </th>
                  ) : (
                    <th key={project.id} className={style.col_2}>
                      <div className={style.row_style_content}>
                        <span>
                          {project.operationalFlow_payments_current_assets}
                        </span>
                      </div>
                    </th>
                  )}
                  {openRows.includes(project.id) &&
                    project.project &&
                    project.project.map((item) => (
                      <th key={item.id} className={style.col_dop}>
                        <div className={style.row_style_content}>
                          <span>
                            {item.operationalFlow_payments_current_assets}
                          </span>
                        </div>
                      </th>
                    ))}
                </React.Fragment>
              ))}
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_menu_text}>
                  <span>Краткосрочные обязательства</span>
                </div>
              </th>
              {byProject.map((project) => (
                <React.Fragment key={project.id}>
                  {project.project ? (
                    <th key={project.id} className={style.col_1}>
                      <div className={style.row_style_content}>
                        <span>
                          {
                            project.operationalFlow_payments_short_term_liabilities
                          }
                        </span>
                      </div>
                    </th>
                  ) : (
                    <th key={project.id} className={style.col_2}>
                      <div className={style.row_style_content}>
                        <span>
                          {
                            project.operationalFlow_payments_short_term_liabilities
                          }
                        </span>
                      </div>
                    </th>
                  )}
                  {openRows.includes(project.id) &&
                    project.project &&
                    project.project.map((item) => (
                      <th key={item.id} className={style.col_dop}>
                        <div className={style.row_style_content}>
                          <span>
                            {
                              item.operationalFlow_payments_short_term_liabilities
                            }
                          </span>
                        </div>
                      </th>
                    ))}
                </React.Fragment>
              ))}
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default TableByProject;
