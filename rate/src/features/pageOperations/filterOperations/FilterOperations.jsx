import React from 'react';
import style from './style/filterOperations.module.css';
import Button from '../../../components/ui/button/Button.jsx';
import chevron from '../../../assets/chevron-down.svg';
import Input from '../../../components/ui/input/Input.jsx';
import search from '../../../assets/search.svg';
import download from '../../../assets/download.svg';

const FilterOperation = ({ setVisible, visible }) => {
  return (
    <div className={style.container_filter}>
      <div className={style.container_filter_content}>
        <div className={style.filter_content_main}>
          <Button
            backgroundColor="rgba(238, 244, 255, 1)"
            color="rgba(45, 49, 166, 1)"
            border="1px solid  #EEF4FF"
            padding="12px 20px"
            borderRadius='8px'
            fontSize="16px"
            lineHeight="24px"
          >
            XLS
            <img src={download} alt="download" />
          </Button>
          <div className={style.container_filter_content_input}>
            <img src={search} alt="search" />
            <Input type="text" placeholder="Поиск по операциям" />
          </div>
          <div className={style.container_filter_checkbox}>
            <div className={style.checkbox_container}> 
              <input type="checkbox"/>
              <span className={style.checkbox_form}></span>
            </div>
            <span>Группировка</span>
          </div>
        </div>
        <div>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(16, 24, 40, 1)"
            border="1px solid  #D0D5DD"
            padding="10px 16px"
            borderRadius='8px'
            fontSize="16px"
            lineHeight="24px"
            type="button"
            onClick={() => setVisible((prev) => !prev)}
          >
            Показать фильтр
            <img style={visible ? {transform: 'rotate(180deg)'} : {}} src={chevron} alt="chevron" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterOperation;
