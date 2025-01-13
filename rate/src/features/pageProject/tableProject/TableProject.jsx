import React, { useState } from 'react';
import style from './style/tableProject.module.css';
import Button from '../../../components/ui/button/Button';
import TableHeadProject from './tableHeadProject/TableHeadProject';
import TableHeadGroup from './tableHearGroup/TableHeadGroup';
import TableBodyProject from './tableBodyProject/TableBodyProject';
import TableBodyGroup from './tableBodyGroup/TableBodyGroup';
import TableHeadProfitability from './tableHeadProfitability/TableHeadProfitability';
import TableBodyProfitability from './tableBodyProfitability/TableBodyProfitability';

const TableProject = ({ selectedValue }) => {
  const data = [
    {
      id: 1,
      nameProject: 'SEO для курсов ИП Ларин',
      group: 'Группа1',
      startDate: '01.03.2023',
      endOfDate: '05.05.2024',
      status: 'в работе',
      receipts: '0',
      payments: '-1000',
      cashFlow: '0000',
    },
    {
      id: 5,
      nameProject: 'SEO для курсов ИП Ларин',
      group: 'Группа1',
      startDate: '01.03.2023',
      endOfDate: '05.05.2024',
      status: 'в работе',
      receipts: '0',
      payments: '-1000',
      cashFlow: '0000',
    },
    {
      id: 2,
      nameProject: 'SEO для курсов ИП Ларин',
      group: 'Группа2',
      startDate: '01.03.2023',
      endOfDate: '05.05.2024',
      status: 'в работе',
      receipts: '0',
      payments: '-1000',
      cashFlow: '0000',
    },
    {
      id: 3,
      nameProject: 'SEO для курсов ИП Ларин',
      group: 'Группа3',
      startDate: '01.03.2023',
      endOfDate: '05.05.2024',
      status: 'в работе',
      receipts: '0',
      payments: '-1000',
      cashFlow: '0000',
    },
    {
      id: 4,
      nameProject: 'SEO для курсов ИП Ларин',
      group: '',
      startDate: '01.03.2023',
      endOfDate: '05.05.2024',
      status: 'в работе',
      receipts: '0',
      payments: '-1000',
      cashFlow: '0000',
    },
  ];
  const [btnProject, setBtnProject] = useState(true);
  const [btnGroup, setBtnGroup] = useState(false);

  const handleClickGroup = () => {
    setBtnProject(false);
    setBtnGroup(true);
  };
  const handleClickProject = () => {
    setBtnProject(true);
    setBtnGroup(false);
  };

  if (selectedValue === 'cash') {
    return (
      <div className={style.block}>
        <div className={style.btn_table}>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(52, 64, 84, 1)"
            border="1px solid #D0D5DD"
            padding="10px 16px"
            fontSize="14px"
            borderRadius="8px 0px 0px 0px"
            lineHeight="20px"
            onClick={handleClickProject}
          >
            Проекты
          </Button>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(52, 64, 84, 1)"
            border="1px solid #D0D5DD"
            padding="10px 16px"
            fontSize="14px"
            borderRadius="0px 8px 0px 0px"
            lineHeight="20px"
            onClick={handleClickGroup}
          >
            Группы
          </Button>
        </div>
        <table className={style.conteiner_table}>
          {btnProject && (
            <>
              <TableHeadProfitability />
              <TableBodyProject data={data} />
            </>
          )}
          {btnGroup && (
            <>
              <TableHeadProfitability />
              <TableBodyProfitability data={data} />
            </>
          )}
        </table>
      </div>
    );
  }

  return (
    <div className={style.block}>
      <div className={style.btn_table}>
        <Button
          backgroundColor="rgba(255, 255, 255, 1)"
          color="rgba(52, 64, 84, 1)"
          border="1px solid #D0D5DD"
          padding="10px 16px"
          fontSize="14px"
          borderRadius="8px 0px 0px 0px"
          onClick={handleClickProject}
        >
          Проекты
        </Button>
        <Button
          backgroundColor="rgba(255, 255, 255, 1)"
          color="rgba(52, 64, 84, 1)"
          border="1px solid #D0D5DD"
          padding="10px 16px"
          fontSize="14px"
          borderRadius="0px 8px 0px 0px"
          onClick={handleClickGroup}
        >
          Группы
        </Button>
      </div>
      <table className={style.conteiner_table}>
        {btnProject ? (
          <>
            <TableHeadProject />
            <TableBodyProject data={data} />
          </>
        ) : (
          <>
            <TableHeadGroup />
            <TableBodyGroup data={data} />
          </>
        )}
      </table>
    </div>
  );
};

export default TableProject;
