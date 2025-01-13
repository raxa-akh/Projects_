import React, { useState } from 'react';
import archive from '../../../../assets/archive1.svg';
import edit from '../../../../assets/edit.svg';
import del from '../../../../assets/trash-01.svg';
import style from './style/tableSection.module.css';

const TableSection = ({
  data,
  selectedValue,
  setArchiveModal,
  setEditModal,
  setDelModal,
}) => {
  const { groupedData, ungroupedData } = sortByGroup(data, selectedValue);

  function sortByGroup(dataArray, selectedValue) {
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

  return (
    <tbody>
      {Object.keys(groupedData).map((group) => (
        <React.Fragment key={group}>
          <tr onClick={() => handleGroupClick(group)}>
            <td colSpan="8">
              <div className={style.drop_down_header}>
                <input type="checkbox" />
                {group}
              </div>
            </td>
          </tr>
          {expandedRows[group] &&
            groupedData[group].map((account) => (
              <tr key={account.id}>
                <td>
                  <div className={style.drop_down_header_1}>
                    <input type="checkbox" />
                    <div>
                      <span className={style.row_text}>
                        {account.accountName.name}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={style.drop_down_row}>{account.group}</div>
                </td>
                <td>
                  <div className={style.drop_down_row}>
                    {account.initialBalance}
                  </div>
                </td>
                <td>
                  <div className={style.drop_down_row}>
                    {account.currentBalance}
                  </div>
                </td>
                <td>
                  <div className={style.drop_down_row}>{account.type}</div>
                </td>
                <td>
                  <div className={style.drop_down_row}>
                    {account.requesites}
                  </div>
                </td>
                <td>
                  <div className={style.drop_down_row}>{account.entities}</div>
                </td>
                <td>
                  <img
                    src={archive}
                    alt="archive"
                    onClick={() => setArchiveModal((prev) => !prev)}
                  />
                  <img
                    src={edit}
                    alt="edit"
                    onClick={() => setEditModal((prev) => !prev)}
                  />
                  <img
                    src={del}
                    alt="del"
                    onClick={() => setDelModal((prev) => !prev)}
                  />
                </td>
              </tr>
            ))}
        </React.Fragment>
      ))}
      {ungroupedData.map((item) => (
        <tr key={item.id}>
          <td>
            <div className={style.drop_down_row}>
              <input type="checkbox" />
              <div>
                <span className={style.row_text}>{item.accountName.name}</span>
              </div>
            </div>
          </td>
          <td>
            <div className={style.drop_down_row}>{item.group}</div>
          </td>
          <td>
            <div className={style.drop_down_row}>{item.initialBalance}</div>
          </td>
          <td>
            <div className={style.drop_down_row}>{item.currentBalance}</div>
          </td>
          <td>
            <div className={style.drop_down_row}>{item.type}</div>
          </td>
          <td>
            <div className={style.drop_down_row}>{item.requesites}</div>
          </td>
          <td>
            <div className={style.drop_down_row}>{item.entities}</div>
          </td>
          <td>
            <img
              src={archive}
              alt="archive"
              onClick={() => setArchiveModal((prev) => !prev)}
            />
            <img
              src={edit}
              alt="edit"
              onClick={() => setEditModal((prev) => !prev)}
            />
            <img
              src={del}
              alt="del"
              onClick={() => setDelModal((prev) => !prev)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableSection;
