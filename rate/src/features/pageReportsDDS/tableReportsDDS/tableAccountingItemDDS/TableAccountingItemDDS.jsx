import React, { useState } from 'react';
import style from './style/tableAccountingItemDDU.module.css';
import { reportsData } from '../../../../mock/index';
import chevronUp from '../../../../assets/chevron-up.svg';
import chevronDown from '../../../../assets/chevron-down.svg';
import help from '../../../../assets/help.svg';

const TableAccountingItemDDS = () => {
  const [operationFlowReceptis, setOperationFlowReceptis] = useState(false);
  const [operationFlowPayments, setOperationFlowPayments] = useState(false);
  const [investmentFlowReceptis, setInvestmentFlowReceptis] = useState(false);
  const [investmentFlowPayments, setInvestmentFlowPayments] = useState(false);
  const [financialFlowReceptis, setFinancialFlowReceptis] = useState(false);
  const [financialFlowPayments, setFinancialFlowPayments] = useState(false);

  const handleOperationFlowReceptis = () => {
    setOperationFlowReceptis((prev) => !prev);
  };
  const handleOperationFlowPayments = () => {
    setOperationFlowPayments((prev) => !prev);
  };
  const handleInvestmentFlowReceptis = () => {
    setInvestmentFlowReceptis((prev) => !prev);
  };
  const handleInvestmentFlowPayments = () => {
    setInvestmentFlowPayments((prev) => !prev);
  };
  const handleFinancialFlowReceptis = () => {
    setFinancialFlowReceptis((prev) => !prev);
  };
  const handleFinancialFlowPayments = () => {
    setFinancialFlowPayments((prev) => !prev);
  };
  return (
    <table className={style.conteiner_table}>
      <tbody>
        <tr>
          <th className={style.col}>
            <div className={style.col_style_main}>
              <span></span>
            </div>
          </th>
          {reportsData.map((item) => (
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
            <div className={style.col_style_main}>
              <span>Операционный поток</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td key={item.id} className={style.row}>
              <div className={style.row_style_main}>
                <span>{item.operationalFlow}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end_main}>
              <span>-</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className={style.col}>
            <div
              className={style.col_style_curs}
              onClick={handleOperationFlowReceptis}
            >
              {operationFlowReceptis ? (
                <img src={chevronUp} alt="chevron" />
              ) : (
                <img src={chevronDown} alt="chevron" />
              )}
              <span>Поступления</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.financial_flow_receptis}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        {operationFlowReceptis && (
          <>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Доходы</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>{item.operationalFlow_receptis_income}</span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Оборотные активы</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>{item.operationalFlow_receipts_current_assets}</span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Краткосрочные обязательства</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>
                      {item.operationalFlow_receipts_short_term_liabilities}
                    </span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
          </>
        )}
        <tr>
          <th className={style.col}>
            <div
              className={style.col_style_curs}
              onClick={handleOperationFlowPayments}
            >
              {operationFlowPayments ? (
                <img src={chevronUp} alt="chevron" />
              ) : (
                <img src={chevronDown} alt="chevron" />
              )}
              <span>Выплаты</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.operationalFlow_payments}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        {operationFlowPayments && (
          <>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Расходы</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>{item.operationalFlow_payments_expenses}</span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Оборотные активы</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>{item.operationalFlow_payments_current_assets}</span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Краткосрочные обязательства</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>
                      {item.operationalFlow_payments_short_term_liabilities}
                    </span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
          </>
        )}
        <tr>
          <th className={style.col}>
            <div className={style.col_style_main}>
              <span>Инвестиционный поток</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style_main}>
                <span>{item.investment_flow}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end_main}>
              <span>-</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className={style.col}>
            <div
              className={style.col_style_curs}
              onClick={handleInvestmentFlowReceptis}
            >
              {investmentFlowReceptis ? (
                <img src={chevronUp} alt="chevron" />
              ) : (
                <img src={chevronDown} alt="chevron" />
              )}
              <span>Поступления</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.investment_flow_receptis}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        {investmentFlowReceptis && (
          <>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Внеоборотные активы</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>
                      {item.investment_flow_receptis_non_current_assets}
                    </span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
          </>
        )}
        <tr>
          <th className={style.col}>
            <div
              className={style.col_style_curs}
              onClick={handleInvestmentFlowPayments}
            >
              {investmentFlowPayments ? (
                <img src={chevronUp} alt="chevron" />
              ) : (
                <img src={chevronDown} alt="chevron" />
              )}
              <span>Выплаты</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.investment_flow_payments}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        {investmentFlowPayments && (
          <tr>
            <th className={style.col}>
              <div className={style.col_style_dop}>
                <span>Внеоборотные активы</span>
              </div>
            </th>
            {reportsData.map((item) => (
              <td className={style.row} key={item.id}>
                <div className={style.row_style}>
                  <span>
                    {item.investment_flow_payments_non_current_assets}
                  </span>
                </div>
              </td>
            ))}
            <td>
              <div className={style.row_col_end}>
                <span>-</span>
              </div>
            </td>
          </tr>
        )}
        <tr>
          <th className={style.col}>
            <div className={style.col_style_main}>
              <span>Финансовый поток</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style_main}>
                <span>{item.financial_flow}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end_main}>
              <span>-</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className={style.col}>
            <div
              className={style.col_style_curs}
              onClick={handleFinancialFlowReceptis}
            >
              {financialFlowReceptis ? (
                <img src={chevronUp} alt="chevron" />
              ) : (
                <img src={chevronDown} alt="chevron" />
              )}
              <span>Поступления</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.financial_flow_receptis}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        {financialFlowReceptis && (
          <>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Долгосрочные обязательства</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>
                      {item.financial_flow_receptis_long_term_obligations}
                    </span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Капитал</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>{item.financial_flow_receptis_capital}</span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_style}>
                  <span>-</span>
                </div>
              </td>
            </tr>
          </>
        )}
        <tr>
          <th className={style.col}>
            <div
              className={style.col_style_curs}
              onClick={handleFinancialFlowPayments}
            >
              {financialFlowPayments ? (
                <img src={chevronUp} alt="chevron" />
              ) : (
                <img src={chevronDown} alt="chevron" />
              )}
              <span>Выплаты</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.financial_flow_payments}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        {financialFlowPayments && (
          <>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Долгосрочные обязательства</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>
                      {item.financial_flow_payments_long_term_obligations}
                    </span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className={style.col}>
                <div className={style.col_style_dop}>
                  <span>Капитал</span>
                </div>
              </th>
              {reportsData.map((item) => (
                <td className={style.row} key={item.id}>
                  <div className={style.row_style}>
                    <span>{item.financial_flow_payments_capital}</span>
                  </div>
                </td>
              ))}
              <td>
                <div className={style.row_col_end}>
                  <span>-</span>
                </div>
              </td>
            </tr>
          </>
        )}

        <tr>
          <th className={style.col}>
            <div className={style.col_style}>
              <span>Перемещения</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.movements}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className={style.col}>
            <div className={style.col_style}>
              <span>Списания</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.movements_write_offs}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className={style.col}>
            <div className={style.col_style}>
              <span>Зачисления</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.movements_deposits}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className={style.col}>
            <div className={style.col_style}>
              <span>Общий денежный поток</span>
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.total_cash_flow}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className={style.col}>
            <div className={style.col_style}>
              <span>Остатки на конец периода</span>
              <img src={help} alt="help" />
            </div>
          </th>
          {reportsData.map((item) => (
            <td className={style.row} key={item.id}>
              <div className={style.row_style}>
                <span>{item.balance_at_the_end_of_the_period}</span>
              </div>
            </td>
          ))}
          <td>
            <div className={style.row_col_end}>
              <span>-</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableAccountingItemDDS;
