import React, { useState } from 'react';
import Input from '../../../../components/ui/input/Input';
import Select from 'react-select';
import style from './style/createCountrypartyContact.module.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
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
const CreateCountryContact = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <form className={style.container_main_form}>
      <div className={style.container_main_form_input_label}>
        <label>Название</label>
        <div className={style.container_main_form_input}>
          <Input type="text" placeholder="Например, Васильев" />
        </div>
      </div>
      <div className={style.container_main_form_input_label}>
        <label>Полное название</label>
        <div className={style.container_main_form_input}>
          <Input
            style={{ width: '100%' }}
            type="text"
            placeholder='"Например,ООО "Васильев"'
          />
        </div>
      </div>
      <div className={style.container_main_form_input_label}>
        <label>Группа</label>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          styles={customStyles}
          className={style.react_select}
          placeholder="Выберите группу контрагентов"
        />
      </div>
      <div className={style.container_main_form_select}>
        <div className={style.container_main_form_select_label}>
          <label>Доходная статья</label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
            className={style.react_select}
            placeholder="Выберите доход"
          />
        </div>
        <div className={style.container_main_form_select_label}>
          <label>Расходная статья</label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
            className={style.react_select}
            placeholder="Выберите расход"
          />
        </div>
      </div>
      <div className={style.container_main_form_input_label}>
        <label>Комментарий</label>
        <div className={style.container_main_form_area}>
          <textarea placeholder="Пояснение к контрагенту" />
        </div>
      </div>
    </form>
  );
};

export default CreateCountryContact;
