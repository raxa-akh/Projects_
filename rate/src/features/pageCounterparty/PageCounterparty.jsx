import React, { useState } from 'react';
import style from './style/pageCountryparty.module.css';
import HeadCountryparty from './headCountryparty/HeadCountryparty';
import TableCountryparty from './tableCounterparty/TableCountryparty';
import FilterCountryparty from './filterCountryparty/FilterCountryparty';
import FilterBlockCountryparty from '../../components/filterBlock/filterBlockCountryparty/FilterBlockCountryparty';

const PageOperations = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.container_header}>
        <HeadCountryparty />
        <hr />
        <div className={style.container_table}>
          <TableCountryparty />
        </div>
      </div>
      <div>
        <FilterCountryparty setVisible={setOpen} />
        {open && <FilterBlockCountryparty />}
      </div>
    </div>
  );
};

export default PageOperations;
