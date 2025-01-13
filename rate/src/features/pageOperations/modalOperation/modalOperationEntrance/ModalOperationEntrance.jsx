import React, { useState } from 'react';
import Input from '../../../../components/ui/input/Input';
import rub from '../../../../assets/currency-ruble.svg';
import Select from 'react-select';
import style from './style/modalOperationEntrance.module.css';
import Button from '../../../../components/ui/button/Button';
import DropDown from '../../DropDown/DropDown';

const customStyles = {
  control: (provided, state) => ({
    ...provided,

    background: 'white',
    border: '1px solid  #D0D5DD',
    borderRadius: '8px',
    padding: '10px 14px ',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? 'blue' : 'white',
    color: state.isSelected ? 'white' : 'black',
    padding: '10px',
    height: '44px',
  }),
};

const data =[{label: 'Пусто'}]

const ModalOperationEntrance = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <form className={style.content_main}>
      <div className={style.content_main_frame137}>
        <div className={style.content_main_frame137_label_input}>
          <label>Дата оплаты</label>
          <div className={style.content_main_frame137_input}>
            <Input type="date" />
          </div>
        </div>
        <div className={style.content_main_frame137_checkbox}>
          <div className={style.checkbox_container}>
            <input type="checkbox"/>
            <span className={style.checkbox_form}></span>
            <span style={{position: 'relative', top: '-3px'}}>Подтвердить оплату</span>
          </div>
        </div>
      </div>
      <div className={style.content_main_frame137_label_input}>
        <label>Счет и юрлицо</label>
        <div className={style.content_main_frame137_input_base}>
          <Input placeholder="ООО Ромашка" />
        </div>
      </div>
      <div className={style.content_main_frame136}>
        <div className={style.content_main_frame137_label_input}>
          <label>Сумма</label>
          <div className={style.content_main_frame137_input}>
            <img src={rub} alt="rub" />
            <Input style={{ width: '100%' }} type="text" />
          </div>
        </div>
      </div>
      <div
        style={{ width: '100%' }}
        className={style.content_main_frame137_label_input}
      >
        <label>Контрагент</label>
        <DropDown data={data} place={'Не выбран'} widthAll='550px'/>
      </div>
      <div
        style={{ width: '100%' }}
        className={style.content_main_frame137_label_input}
      >
        <label>Статья</label>
        <DropDown data={data} place={'Не выбран'} widthAll='550px'/>
      </div>
      <div
        style={{ width: '100%' }}
        className={style.content_main_frame137_label_input}
      >
        <label>Проект</label>
        <DropDown data={data} place={'Не выбран'} widthAll='550px'/>
      </div>
      <div className={style.content_main_frame137_label_input}>
        <label>Назначение</label>
        <div className={style.content_main_frame137_input_base}>
          <Input placeholder="Назначение платежа" type="text" />
        </div>
      </div>
    </form>
  );
};

export default ModalOperationEntrance;
