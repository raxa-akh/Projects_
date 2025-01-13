import React from 'react';
import style from './style/createCountryRequisites.module.css';
import Input from '../../../../components/ui/input/Input';

const CreateCountryRequisites = () => {
  return (
    <form className={style.container_main_form}>
      <div className={style.container_main_form_inn_kpp}>
        <div className={style.container_main_form_inn_kpp_input_label}>
          <label>ИНН</label>
          <div className={style.container_main_form_input}>
            <Input type="text" placeholder="Укажите ИНН" />
          </div>
        </div>
        <div className={style.container_main_form_inn_kpp_input_label}>
          <label>КПП</label>
          <div className={style.container_main_form_input}>
            <Input type="text" placeholder="Укажите КПП" />
          </div>
        </div>
      </div>
      <div className={style.container_main_form_input_label}>
        <label>Номер счета</label>
        <div className={style.container_main_form_input}>
          <Input type="text" placeholder="Укажите номер счета" />
        </div>
      </div>
    </form>
  );
};

export default CreateCountryRequisites;
