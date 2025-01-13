import React, { useState } from 'react';
import style from './style/pageReportsOPU.module.css';
import HeadReportsOPU from './headReportsOPU/HeadReportsOPU';
import FilterReportsOPU from './filterReportsOPU/FilterReportsOPU';
import TableReportsOPU from './tableReportsOPU/TableReportsOPU';
import FilterBlockReportsOPU from '../../components/filterBlock/filterBlockReportsOPU/FilterBlockReportsOPU';

const PageReportsOPU = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedOptionDisplay, setSelectedOptionDisplay] =
    useState('byPerods');
  // console.log(selectedOptionDisplay);
  const [getChecked, setGetChecked] = useState(false);
  console.log(getChecked);
  return (
    <div className={style.container}>
      <div className={style.container_block}>
        <div className={style.conteiner_header}>
          <HeadReportsOPU />
        </div>
        <div>
          <hr />
        </div>
        <div className={style.conteiner_table}>
          <TableReportsOPU
            select={selectedOptionDisplay}
            getChecked={getChecked}
          />
        </div>
      </div>
      <div>
        <FilterReportsOPU
          setVisible={setOpenFilter}
          openFilter={openFilter}
          selectedOptionDisplay={selectedOptionDisplay}
          setSelectedOptionDisplay={setSelectedOptionDisplay}
        />
        {openFilter && (
          <FilterBlockReportsOPU
            getChecked={getChecked}
            setGetChecked={setGetChecked}
          />
        )}
      </div>
    </div>
  );
};

export default PageReportsOPU;
