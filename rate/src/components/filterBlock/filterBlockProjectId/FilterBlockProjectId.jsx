import React from 'react';
import Input from '../../ui/input/Input';
import style from './style/filterBlockProjectId.module.css';
import help from '../../../assets/help.svg';

function FilterBlockProjectId() {
  return (
    <div className={style.conteiner}>
      <div className={style.conteiner_tool}>
        <div className={style.conteiner_tool_header}>
          <span>Тип операции</span>
          <img src={help} alt="?" />
        </div>
        <div className={style.conteiner_tool_content}>
          <div className={style.conteiner_tool_content__type}>
            <Input type="checkbox" />
            <label>Показать план</label>
          </div>
          <div className={style.conteiner_tool_content__type}>
            <Input type="checkbox" />
            <label>Архивные</label>
          </div>
          <div className={style.conteiner_tool_content__type}>
            <Input type="checkbox" />
            <label>Перемещение</label>
          </div>
        </div>
      </div>
      <div className={style.conteiner_tool}>
        <div className={style.conteiner_tool_header}>
          <span>Статус проекта</span>
          <img src={help} alt="?" />
        </div>
        <div className={style.conteiner_tool_content}>
          <div className={style.conteiner_tool_content__type}>
            <Input type="checkbox" />
            <label>Плановый</label>
          </div>
          <div className={style.conteiner_tool_content__type}>
            <Input type="checkbox" />
            <label>В работе</label>
          </div>
          <div className={style.conteiner_tool_content__type}>
            <Input type="checkbox" />
            <label>Завершен</label>
          </div>
        </div>
      </div>
      <div className={style.conteiner_tool}>
        <div className={style.conteiner_tool_header}>
          <span>Параметры</span>
          <img src={help} alt="?" />
        </div>
        <div className={style.conteiner_tool_content}>
          <div className={style.select__wrapper}>
            <select
              className={style.conteiner_tool_content__select}
              onChange={'handleSelectChange'}
              defaultValue="analiz"
            >
              <option disabled value="analiz">
                Показатель для анализа
              </option>
              <option value="money">Денежный поток</option>
              <option value="cash">Прибыль кассовым методом</option>
              <option value="accrual">Прибыль методом начисления</option>
            </select>
          </div>
        </div>
      </div>
      <div className={style.conteiner_tool}>
        <div className={style.conteiner_tool_header}>
          <span>Период</span>
          <img src={help} alt="?" />
        </div>
        <div>
          <div className={style.conteiner_tool_header__date}>
            <Input type="date" placeholder="Выбрать период" />
          </div>
        </div>
      </div>
      <div className={style.conteiner_tool}>
        <div className={style.conteiner_tool_header}>
          <span>Отображение графика</span>
          <img src={help} alt="?" />
        </div>
        <div className={style.conteiner_tool_content}>
          <div className={style.select__wrapper}>
            <select
              className={style.conteiner_tool_content__select}
              onChange={'handleSelectChange'}
              defaultValue="analiz"
            >
              <option disabled value="analiz">
                Отображение графика
              </option>
              <option value="money">По неделям</option>
              <option value="cash">По месяцам</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBlockProjectId;
