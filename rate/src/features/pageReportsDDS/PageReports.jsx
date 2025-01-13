import React, { useState } from 'react';
import HeadReports from './headReports/HeadReports';
import style from './style/pageReports.module.css';
import FilterReports from './filterReports/FilterReports';
import FilterBlockReports from '../../components/filterBlock/filterBlockReports/FilterBlockReports';
import TableReportsDDS from './tableReportsDDS/TableReportsDDS';

const PageReports = () => {
  const [open, setOpen] = useState(false);
  const [selectedOptionDisplay, setSelectedOptionDisplay] =
    useState('byPerods');
  return (
    <div className={style.container}>
      <div className={style.container_block}>
        <div className={style.conteiner_header}>
          <HeadReports />
        </div>
        <div>
          <hr />
        </div>
        <div className={style.conteiner_table}>
          <TableReportsDDS selectedOptionDisplay={selectedOptionDisplay} />
        </div>
      </div>
      <div>
        <FilterReports
          setVisible={setOpen}
          selectedOptionDisplay={selectedOptionDisplay}
          setSelectedOptionDisplay={setSelectedOptionDisplay}
          openFilter={open}
        />
        {open && <FilterBlockReports />}
      </div>
    </div>
  );
};

export default PageReports;
