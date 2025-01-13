import React, { useState } from 'react';
import Input from '../../ui/input/Input';
import style from './style/filterBlockReports.module.css';
import Select from 'react-select';

const options = [];
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

const FilterBlockReports = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={style.horizontal_content}>
      <div className={style.horizontal_content_comtainer}>
        <div>
          <span>Параметры</span>
        </div>
        <div className={style.horizontal_content_comtainer_frame174}>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
            className={style.react_select}
            placeholder="Юрлица и счета"
          />

          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
            className={style.react_select}
            placeholder="Контрагенты"
          />

          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
            className={style.react_select}
            placeholder="Сделки"
          />
        </div>
      </div>
      <div className={style.horizontal_content_comtainer}>
        <div>
          <span>Период</span>
        </div>

        <div className={style.horizontal_content_comtainer_input}>
          <Input type="date" placeholder="Выбрать период" />
        </div>
      </div>
    </div>
  );
};

export default FilterBlockReports;
