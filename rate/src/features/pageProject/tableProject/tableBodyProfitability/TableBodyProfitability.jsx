import React, { useState } from 'react';
import style from '../tableBodyGroup/style/tableBodyGroup.module.css';
import archive from '../../../../assets/archive1.svg';
import edit from '../../../../assets/edit.svg';
import del from '../../../../assets/trash-01.svg';
import { useNavigate } from 'react-router-dom';

const TableBodyProfitability = ({ data }) => {
  const { groupedData, ungroupedData } = sortByGroup(data);

  function sortByGroup(dataArray, selectedValue = 'group') {
    const groupedData = {};
    const ungroupedData = [];

    dataArray.forEach((item) => {
      if (item[selectedValue]) {
        if (!groupedData[item[selectedValue]]) {
          groupedData[item[selectedValue]] = [];
        }
        groupedData[item[selectedValue]].push(item);
      } else {
        ungroupedData.push(item);
      }
    });

    return { groupedData, ungroupedData };
  }
  const [expandedRows, setExpandedRows] = useState({});
  const handleGroupClick = (groupId) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [groupId]: !prevExpandedRows[groupId],
    }));
  };
  const navigate = useNavigate();
  const handleOpenProject = (id) => {
    navigate(`/project/${id}`);
  };
  return (
    <tbody>
      {ungroupedData.map((item) => (
        <tr key={item.id}>
          <td>
            <div className={style.context_row}>
              <input type="checkbox" />
              <div onClick={() => handleOpenProject(item.id)}>
                <span>{item.nameProject}</span>
              </div>
            </div>
          </td>
          <td>
            <div className={style.context_row}>
              <div className={style.context_row_text}>
                <span>{item.startDate}</span>
                <span>{item.endOfDate}</span>
              </div>
            </div>
          </td>
          <td>
            <div className={style.context_row}>{item.status}</div>
          </td>
          <td>
            <div className={style.context_row}>{item.receipts}</div>
          </td>
          <td>
            <div className={style.context_row}>{item.payments}</div>
          </td>
          <td>
            <div className={style.context_row}>{item.cashFlow}</div>
          </td>
          <td>
            <div className={style.context_row}>{}</div>
          </td>
          <td>
            <div className={style.context_row}>
              <img src={archive} alt="archive" />
              <img src={edit} alt="edit" />
              <img src={del} alt="del" />
            </div>
          </td>
        </tr>
      ))}
      {Object.keys(groupedData).map((group) => (
        <React.Fragment key={group}>
          <tr onClick={() => handleGroupClick(group)}>
            <td colSpan="8">
              <div className={style.context_row}>
                <input type="checkbox" />
                {group}
              </div>
            </td>
          </tr>
          {expandedRows[group] &&
            groupedData[group].map((account) => (
              <tr key={account.id}>
                <td>
                  <div className={style.context_row_group}>
                    <input type="checkbox" />
                    <div>
                      <span>{account.nameProject}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={style.context_row}>
                    <div className={style.context_row_text}>
                      <span>{account.startDate}</span>
                      <span>{account.endOfDate}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={style.context_row}>{account.status}</div>
                </td>
                <td>
                  <div className={style.context_row}>{account.receipts}</div>
                </td>
                <td>
                  <div className={style.context_row}>{account.payments}</div>
                </td>
                <td>
                  <div className={style.context_row}>{account.cashFlow}</div>
                </td>
                <td>
                  <div className={style.context_row}>{}</div>
                </td>
                <td>
                  <div className={style.context_row}>
                    <img src={archive} alt="archive" />
                    <img src={edit} alt="edit" />
                    <img src={del} alt="del" />
                  </div>
                </td>
              </tr>
            ))}
        </React.Fragment>
      ))}
    </tbody>
  );
};

export default TableBodyProfitability;
