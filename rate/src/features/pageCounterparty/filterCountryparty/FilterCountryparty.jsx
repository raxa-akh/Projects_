import React from 'react';
import Button from '../../../components/ui/button/Button';
import Input from '../../../components/ui/input/Input';
import style from './style/filterCountryparty.module.css';
import chevron from '../../../assets/chevron-down.svg';
import search from '../../../assets/search.svg';

const FilterCountryparty = ({ setVisible }) => {
  return (
    <div className={style.container_filter}>
      <div className={style.container_filter_content}>
        <div className={style.filter_content_main}>
          <div className={style.container_filter_content_input}>
            <img src={search} alt="search" />
            <Input type="text" placeholder="Поиск по контрагентам" />
          </div>
          <div className={style.container_filter_checkbox}>
            <Input type="checkbox" />
            <label>Группировка</label>
          </div>
        </div>
        <div>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(16, 24, 40, 1)"
            border="1px solid  #D0D5DD"
            padding="10px 16px"
            fontSize="16px"
            lineHeight="24px"
            type="button"
            onClick={() => setVisible((prev) => !prev)}
          >
            Показать фильтр
            <img src={chevron} alt="chevron" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterCountryparty;
