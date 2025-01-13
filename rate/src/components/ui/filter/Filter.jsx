import React from 'react';
import Input from '../input/Input';
import search from '../../../assets/search.svg';
import cl from './style/filter.module.css';

const Filter = ({ data, setFilter, placeholder, children }) => {
  return (
    <div className={cl.content}>
      <div className={cl.input_dropdown}>
        <div className={cl.input_dropdown_content}>
          <div>
            <img src={search} alt="search" />
          </div>
          <div className={''}>
            <Input
              value={data.query}
              onChange={(event) =>
                setFilter({ ...data, query: event.target.value })
              }
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
      <div className={''}>{children}</div>
    </div>
  );
};

export default Filter;
