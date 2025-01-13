import React, { useState } from 'react';
import HeadOperations from './headOperations/HeadOperations';
import TableOperations from './tableOperations/TableOperations';
import FilterOperations from './filterOperations/FilterOperations';
import style from './style/pageOperations.module.css';
import FilterBlockOperations from '../../components/filterBlock/filterBlockOperations/FilterBlockOperations';

const PageOperations = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.container_header}>
        <HeadOperations />
        <hr />
        <div className={style.container_table}>
          <TableOperations />
        </div>
      </div>
      <div className={style.footer}>
        <FilterOperations setVisible={setOpen} visible={open}/>
        {open && <FilterBlockOperations />}
      </div>
    </div>
  );
};

export default PageOperations;
