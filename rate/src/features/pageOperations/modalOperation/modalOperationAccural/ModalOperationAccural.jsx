import React, { useState } from 'react';
import style from './style/modalOperationAccural.module.css';
import Select from 'react-select';
import Input from '../../../../components/ui/input/Input';
import DropDown from '../../DropDown/DropDown';
import rub from '../../../../assets/currency-ruble.svg';

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

const ModalOperationAccural = ({ options }) => {
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
              <label>Дата начисления</label>
              <div className={style.container_form_frame137_input}>
                <Input type="date" />
              </div>
            </div>
            <div className={style.container_form_frame137_checkbox}>
              <div className={style.checkbox_container}>
                <input type='checkbox'/>
                <span className={style.checkbox_form}></span>
              </div>
              <span>Подтвердить начисление</span>
            </div>
          </div>
          <div className={style.container_form_frame137_select}>
            <label>Юрлицо</label>
            <DropDown widthAll={'425px'} place={"Не выбрано"} data={data}/>
          </div>
          <div className={style.container_form_frame137_select}>
            <label>Статья списания</label>
            <DropDown widthAll={'425px'} place={"Не выбрано"} data={data}/>
          </div>
          <div className={style.container_form_frame_136}>
            <div className={style.container_form_frame137_input_label}>
              <label>Сумма</label>
              <div className={style.container_form_frame137_input}>
                <img src={rub} alt="rub" />
                <Input style={{ width: '100%' }} type="text" />
              </div>
            </div>
            <div>
              <div className={style.container_form_frame137_checkbox}>
              <div className={style.checkbox_container}>
                <input type='checkbox'/>
                <span className={style.checkbox_form}></span>
              </div>
              <span>Учитывать в ОПиУ
              <br /> кассовым методом</span>
              </div>
            </div>
          </div>
          <div className={style.container_form_frame137_select}>
            <label>Контрагент</label>
            <DropDown widthAll={'425px'} place={"Не выбрано"} data={data}/>
          </div>
        </div>
      </div>
      <div className={style.container_form_frame140}>
        <div className={style.container_form_frame139_title}>
          <h2>Куда</h2>
        </div>
        <div className={style.container_form_frame193}>
          <div className={style.container_form_frame137_select}>
            <label>Контрагент</label>
            <div className={style.container_form_frame136_input}>
              <Input type="text" placeholder="ООО Ромашка" />
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

export default ModalOperationAccural;
