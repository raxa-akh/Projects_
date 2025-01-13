import React from 'react';
import style from './style/filterProject.module.css';
import Button from '../../../components/ui/button/Button.jsx';
import chevron from '../../../assets/chevron-down.svg';
import Input from '../../../components/ui/input/Input.jsx';
import search from '../../../assets/search.svg';

const FilterAccount = ({ setVisible }) => {
  return (
    <div className={style.container_filter}>
      <div className={style.container_filter_content}>
        <div style={{ display: 'contents' }}>
          <div
            className={style.container_filter_content_input}
            style={{ width: '300px' }}
          >
            <img src={search} alt="search" />
            <Input
              type="text"
              style={{ width: '100%' }}
              placeholder="Поиск по названию или № счета"
            />
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
    </div>
  );
};

export default FilterAccount;
