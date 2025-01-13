import React, { useState } from 'react';
import Button from '../../../components/ui/button/Button';
import style from './style/tableReportsDDU.module.css';
import TableAccountingItemDDS from './tableAccountingItemDDS/TableAccountingItemDDS';
import TableProjectDDS from './tableProjectDDS/TableProjectDDS';
import TableByProject from './tableByProjectDDS/TableByProject';

const TableReportsDDS = ({ selectedOptionDisplay }) => {
  const [btnProject, setBtnProject] = useState(false);
  const [btnArticle, setBtnArticle] = useState(true);

  const handleProject = () => {
    setBtnArticle(false);
    setBtnProject(true);
  };
  const handleArticle = () => {
    setBtnArticle(true);
    setBtnProject(false);
  };
  if (selectedOptionDisplay.value === 'byProject') {
    return (
      <div className={style.conteiner_table_project}>
        <TableByProject />
      </div>
    );
  }
  return (
    <div className={style.block}>
      <div className={style.table_btn}>
        <Button
          backgroundColor={
            btnArticle ? 'rgba(249, 250, 251, 1)' : 'rgba(255, 255, 255, 1)'
          }
          color="rgba(52, 64, 84, 1)"
          border="1px solid #D0D5DD"
          padding="10px 16px"
          fontSize="14px"
          borderRadius="8px 0px 0px 0px"
          lineHeight="20px"
          onClick={handleArticle}
        >
          Статья учета
        </Button>
        <Button
          backgroundColor={
            btnProject ? 'rgba(249, 250, 251, 1)' : 'rgba(255, 255, 255, 1)'
          }
          color="rgba(52, 64, 84, 1)"
          border="1px solid #D0D5DD"
          padding="10px 16px"
          fontSize="14px"
          borderRadius="0px 8px 0px 0px"
          lineHeight="20px"
          onClick={handleProject}
        >
          Проекты
        </Button>
      </div>
      <div className={style.conteiner_table}>
        {btnArticle && <TableAccountingItemDDS />}
        {btnProject && <TableProjectDDS />}
      </div>
    </div>
  );
};

export default TableReportsDDS;
