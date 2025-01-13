import React, { useState } from 'react';
import HeadAccounts from './headAccounts/HeadAccounts';
import cl from './style/accounts.module.css';
import TableAccounts from './tableAccounts/TableAccounts';
import FilterAccount from './filterAccount/FilterAccount';
import FilterBlockAccount from '../../components/filterBlock/filterBlockAccount/FilterBlockAccount';

const Accounts = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleSelectedValueChange = (value) => {
    setSelectedValue(value);
  };
  const [open, setOpen] = useState(false);

  return (
    <div className={cl.container}>
      <div className={cl.content}>
        <HeadAccounts />
        <hr />
        <div className={cl.content_table}>
          <TableAccounts selectedValue={selectedValue} />
        </div>
      </div>
      <div>
        <FilterAccount setVisible={setOpen} />
        {open && (
          <FilterBlockAccount
            onSelectedValueChange={handleSelectedValueChange}
          />
        )}
      </div>
    </div>
  );
};

export default Accounts;
