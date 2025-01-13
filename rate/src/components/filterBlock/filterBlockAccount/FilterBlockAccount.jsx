import React from 'react';
import Input from '../../ui/input/Input';
import style from './style/filterBlockAccount.module.css';
import help from '../../../assets/help.svg';

const FilterBlockAccount = ({ onSelectedValueChange }) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    onSelectedValueChange(selectedValue);
  };
  return (
    <div className={style.main_filter}>
      <div className={style.horizontal_content}>
        <div className={style.horizontal_content_tip}>
          <div className={style.toolType_text}>
            <label>Тип</label>
            <img src={help} alt="?" />
          </div>
          <div className={style.frame79}>
            <div className={style.toolType}>
              <Input type="checkbox" />
              <label>Наличный</label>
            </div>
            <div className={style.toolType}>
              <Input type="checkbox" />
              <label>Безналичный</label>
            </div>
            <div className={style.toolType}>
              <Input type="checkbox" />
              <label>Карта физлица</label>
            </div>
            <div className={style.toolType}>
              <Input type="checkbox" />
              <label>Электронный</label>
            </div>
          </div>
          <div className={style.horizontal_content_tip}>
            <div className={style.toolType_text}>
              <label>Архивные</label>
              <img src={help} alt="?" />
            </div>
            <div className={style.toolType_text}>
              <label>Показывать</label>
              <Input type="checkbox" />
            </div>
          </div>
        </div>
        <div className={style.conteiner_toolType}>
          <div className={style.toolType_text}>
            <label>Параметры</label>
            <img src={help} alt="?" />
          </div>
          <div className={style.conteiner_toolType}>
            <div>
              <select className={style.group_select}>
                <option>Юрлица и счета</option>
              </select>
            </div>
            <div>
              <select className={style.group_select}>
                <option>Группы</option>
              </select>
            </div>
          </div>
        </div>
        <div className={style.conteiner_toolType}>
          <div className={style.toolType_text}>
            <label>Группировка</label>
            <img src={help} alt="?" />
          </div>
          <div>
            <select
              className={style.group_select}
              onChange={handleSelectChange}
            >
              <option value="noGroup">Без группировки</option>
              <option value="entities">По юрлицам</option>
              <option value="group">По группам</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBlockAccount;
