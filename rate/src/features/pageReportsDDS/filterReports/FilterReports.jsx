import React, { useState } from 'react';
import style from './style/filterReports.module.css';
import Button from '../../../components/ui/button/Button.jsx';
import chevron from '../../../assets/chevron-down.svg';
import download from '../../../assets/download.svg';
import Select from 'react-select';

const optionsPeriod = [
  { value: 'byPerods', label: 'По периодам' },
  { value: 'byProject', label: 'По проектам' },
];
const optionsMonth = [
  { value: 'byMonth', label: 'По месяцам' },
  { value: 'byQuarte', label: 'По кварталам' },
  { value: 'byDay', label: 'По дням' },
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

const FilterReports = ({
  setVisible,
  setSelectedOptionDisplay,
  selectedOptionDisplay,
  openFilter,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={style.container_filter}>
      <div className={style.container_filter_content}>
        <div className={style.container_filter_content_select_btn}>
          <div className={style.container_filter_content_select_btn_left}>
            <Button
              backgroundColor="rgba(238, 244, 255, 1)"
              color="rgba(45, 49, 166, 1)"
              border="1px solid #EEF4FF"
              padding="12px 20px"
              fontSize="16px"
              lineHeight="24px"
              type="button"
            >
              XLS
              <img src={download} alt="download" />
            </Button>
            <div className={style.select}>
              <Select
                defaultValue={selectedOptionDisplay}
                onChange={setSelectedOptionDisplay}
                options={optionsPeriod}
                styles={customStyles}
                className={style.react_select}
                placeholder="По периодам"
                menuPlacement={openFilter ? 'bottom' : 'top'}
              />
            </div>
            <div className={style.select}>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={optionsMonth}
                styles={customStyles}
                className={style.react_select}
                placeholder="По месяцам"
                menuPlacement={openFilter ? 'bottom' : 'top'}
              />
            </div>
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

export default FilterReports;
