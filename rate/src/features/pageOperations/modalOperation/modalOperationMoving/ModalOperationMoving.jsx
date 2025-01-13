import React, { useState } from 'react';
import style from './style/modalOperationMoving.module.css';
import Select from 'react-select';
import Input from '../../../../components/ui/input/Input';
import rub from '../../../../assets/currency-ruble.svg';
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

const data = [{label: 'Nothing'}]

const ModalOperationMoving = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <form className={style.container_form}>
      <div className={style.container_form_frame139}>
        <div className={style.container_form_frame139_title}>
          <h2>Откуда</h2>
        </div>
        <div className={style.container_form_frame193}>
          <div className={style.container_form_frame137}>
            <div className={style.container_form_frame137_input_label}>
              <label>Дата оплаты</label>
              <div className={style.container_form_frame137_input}>
                <Input type="date" />
              </div>
            </div>
            <div className={style.container_form_frame137_checkbox}>
              <div className={style.checkbox_container}>
                <input type="checkbox"/>
                <span className={style.checkbox_form}></span>
              </div>
              <span style={{position: 'relative', top: '-2px'}}>Подтвердить оплату</span>
            </div>
          </div>
          <div className={style.container_form_frame137_select}>
            <label>Счет и Юрлицо</label>
            <DropDown widthAll={'425px'} place={"Не выбрано"} data={data}/>
          </div>
          <div className={style.container_form_frame137_input_label}>
            <label>Сумма</label>
            <div className={style.container_form_frame137_input}>
              <img src={rub} alt="rub" />
              <Input style={{ width: '100%' }} type="text" />
            </div>
          </div>
          <div className={style.container_form_frame137_select}>
            <label>Проект</label>
            <DropDown widthAll={'425px'} place={"Не выбрано"} data={data}/>
          </div>
        </div>
      </div>
      <div className={style.container_form_frame140}>
        <div className={style.container_form_frame139_title}>
          <h2>Куда</h2>
        </div>
        <div className={style.container_form_frame193}>
          <div className={style.container_form_frame137}>
            <div className={style.container_form_frame137_input_label}>
              <label>Дата оплаты</label>
              <div className={style.container_form_frame137_input}>
                <Input type="date" />
              </div>
            </div>
          </div>
          <div className={style.container_form_frame137_select}>
            <label>Счет и Юрлицо</label>
            <DropDown widthAll={'425px'} place={"Не выбрано"} data={data}/>
          </div>
          <div className={style.container_form_frame137_input_label}>
            <label>Сумма</label>
            <div className={style.container_form_frame137_input}>
              <img src={rub} alt="rub" />
              <Input style={{ width: '100%' }} type="text" />
            </div>
          </div>
          <div className={style.container_form_frame137_select}>
            <label>Назначение</label>
            <div className={style.container_form_frame140_textarea}>
              <textarea
                className={style.text}
                placeholder="Назначение платежа"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ModalOperationMoving;
