import React, { useState } from 'react';
import style from './style/tableReportsOPU.module.css';
import Button from '../../../components/ui/button/Button';
import TableAccountingOPU from './tableAccountingOPU/TableAccountingOPU';
import TableProjectOPU from './tableProjectOPU/TableProjectOPU';
import TableAccountingOperationOPU from './tableAccountingOperationOPU/TableAccountingOperationOPU';
import TableByProjectOPU from './tableByProjectOPU/TableByProjectOPU';
import TableReportsOperationByProjectOPU from './tableReportsOperationByProjectOPU/TableReportsOperationByProjectOPU';

const TableReportsOPU = ({ select, getChecked }) => {
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
  if (select.value === 'byProject' && getChecked) {
    return <TableReportsOperationByProjectOPU />;
  }
  if (select.value === 'byProject') {
    return <TableByProjectOPU />;
  } else if (btnArticle && getChecked) {
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
          {btnArticle && <TableAccountingOperationOPU />}
        </div>
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
        {btnArticle && <TableAccountingOPU />}
        {btnProject && <TableProjectOPU />}
      </div>
    </div>
  );
};

export default TableReportsOPU;
