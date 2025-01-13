import React, { useState } from 'react';
import style from './style/tableOperation.module.css';
import { arrDate } from '../../../mock';
import Modal from '../../../components/ui/modal/Modal';
import ModalOperationEdit from '../modalOperation/ModalOperationEdit';

const TableOperations = () => {
  const sortDate = arrDate.sort((a, b) => new Date(b.date) - new Date(a.date));

  const formattedArrDate = sortDate.map((item) => {
    const dateObj = new Date(item.date);
    const now = new Date();
    const diffInDays = Math.floor((now - dateObj) / (1000 * 60 * 60 * 24));

    let formattedDate;
    if (diffInDays === 0) {
      formattedDate = 'сегодня';
    } else if (diffInDays === 1) {
      formattedDate = 'вчера';
    } else {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      formattedDate = dateObj.toLocaleDateString('ru-RU', options);
    }

    return {
      ...item,
      date: formattedDate,
    };
  });

  const groupedData = {};

  formattedArrDate.forEach((item) => {
    if (!groupedData[item.date]) {
      groupedData[item.date] = [];
    }
    groupedData[item.date].push(item);
  });
  const [expandedRows, setExpandedRows] = useState({});

  const handleGroupClick = (date) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [date]: !prevExpandedRows[date],
    }));
  };
  const [modalOperationEdit, setModalOperationEdit] = useState(false);
  const handleOperationEdit = () => {
    setModalOperationEdit((prev) => !prev);
  };

  function priceColor(str){
    if(str.includes('-')){
      return '#912018'
    }else if(str.includes('+')){
      return '#05603A'
    }else{
      return '#667085'
    }
  }

  return (
    <table className={style.content_table}>
      <thead>
        <tr>
          <th className={style.col_1}>
            <div className={style.table_col}>
              <div className={style.checkbox_container}>
                <input type="checkbox" />
                <span className={style.checkbox_form}></span>
              </div>
              <span>Дата</span>
            </div>
          </th>
          <th className={style.col_2}>
            <div className={style.table_col}>Счет</div>
          </th>
          <th className={style.col_3}>
            <div className={style.table_col}>Тип</div>
          </th>
          <th className={style.col_4}>
            <div className={style.table_col}>Контрагент</div>
          </th>
          <th className={style.col_5}>
            <div className={style.table_col}>Статья</div>
          </th>
          <th className={style.col_6}>
            <div className={style.table_col}>Проект</div>
          </th>
          <th className={style.col_7}>
            <div className={style.table_col}>Сделка</div>
          </th>
          <th className={style.col_8}>
            <div className={style.table_col_end}>Сумма</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(groupedData).map((date) => (
          <React.Fragment key={date}>
            {/* <tr onClick={() => handleGroupClick(date)}>
              <td colSpan="8">
                <div className={style.row_drop}>
                  <span className={style.row_text}>{date}</span>
                </div>
              </td>
            </tr> */}
            {
              groupedData[date].map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className={style.table_row}>
                      <div className={style.checkbox_container}>
                          <input type="checkbox" />
                          <span className={style.checkbox_form}></span>
                      </div>
                      <div
                        className={style.row_text}
                        onClick={handleOperationEdit}
                      >
                        {item.date}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className={style.table_row}
                      onClick={handleOperationEdit}
                    >
                      <span className={style.row_text}>{item.account}</span>
                    </div>
                  </td>
                  <td>
                    <div
                      className={style.table_row}
                      onClick={handleOperationEdit}
                    >
                      {item.type}
                    </div>
                  </td>
                  <td>
                    <div
                      className={style.table_row}
                      onClick={handleOperationEdit}
                    >
                      <span className={style.row_text}>
                        {item.counterparty}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div
                      className={style.table_row}
                      onClick={handleOperationEdit}
                    >
                      <span style={{color: '#667085'}} className={style.row_text_typ}>{item.article}</span>
                    </div>
                  </td>
                  <td>
                    <div
                      className={style.table_row}
                      onClick={handleOperationEdit}
                    >
                      <span className={style.row_text_typ}>{item.project}</span>
                    </div>
                  </td>
                  <td>
                    <div
                      className={style.table_row}
                      onClick={handleOperationEdit}
                    >
                      <span className={style.row_text_typ}>{item.deal}</span>
                    </div>
                  </td>
                  <td>
                    <div className={style.table_row_end}>
                      <span style={{color: `${priceColor(item.amount)}`}} className={style.row_text_typ}>{item.amount}</span>
                    </div>
                  </td>
                </tr>
              ))}
          </React.Fragment>
        ))}
      </tbody>
      {modalOperationEdit && (
        <Modal visible={modalOperationEdit} setVisible={setModalOperationEdit}>
          <ModalOperationEdit onClose={setModalOperationEdit} />
        </Modal>
      )}
    </table>
  );
};

export default TableOperations;
