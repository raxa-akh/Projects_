import React, { useState } from 'react';
import style from './style/filterBlockCountryparty.module.css';
import Input from '../../ui/input/Input';
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

const FilterBlockCountryparty = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className={style.horizontal_container}>
      <div className={style.horizontal_container_frame189}>
        <div className={style.horizontal_container_frame189_frame185}>
          <div
            className={style.horizontal_container_frame189_frame185_container}
          >
            <div>
              <span>Дебиторка</span>
            </div>
            <div
              className={
                style.horizontal_container_frame189_frame185_container_frame79
              }
            >
              <div
                className={
                  style.horizontal_container_frame189_frame185_container_frame79_tooltype
                }
              >
                <Input type="checkbox" />
                <label>Денежная</label>
              </div>
              <div
                className={
                  style.horizontal_container_frame189_frame185_container_frame79_tooltype
                }
              >
                <Input type="checkbox" />
                <label>Неденежная</label>
              </div>
              <div
                className={
                  style.horizontal_container_frame189_frame185_container_frame79_tooltype
                }
              >
                <Input type="checkbox" />
                <label>Без дебиторки</label>
              </div>
            </div>
          </div>
          <div
            className={style.horizontal_container_frame189_frame185_container}
          >
            <div>
              <span>Архив</span>
            </div>
            <div
              className={
                style.horizontal_container_frame189_frame185_container_frame79
              }
            >
              <div
                className={
                  style.horizontal_container_frame189_frame185_container_frame79_tooltype
                }
              >
                <Input type="checkbox" />
                <label>Активные</label>
              </div>
              <div
                className={
                  style.horizontal_container_frame189_frame185_container_frame79_tooltype
                }
              >
                <Input type="checkbox" />
                <label>Архивные</label>
              </div>
            </div>
          </div>
        </div>
        <div className={style.horizontal_container_frame189_frame185_right}>
          <div
            className={style.horizontal_container_frame189_frame185_container}
          >
            <div>
              <span>Кредиторка</span>
            </div>
            <div
              className={
                style.horizontal_container_frame189_frame185_container_frame79
              }
            >
              <div
                className={
                  style.horizontal_container_frame189_frame185_container_frame79_tooltype
                }
              >
                <Input type="checkbox" />
                <label>Денежная</label>
              </div>
              <div
                className={
                  style.horizontal_container_frame189_frame185_container_frame79_tooltype
                }
              >
                <Input type="checkbox" />
                <label>Неденежная</label>
              </div>
              <div
                className={
                  style.horizontal_container_frame189_frame185_container_frame79_tooltype
                }
              >
                <Input type="checkbox" />
                <label>Без дебиторки</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.horizontal_container_content}>
        <div>
          <span>Параметры</span>
        </div>
        <div className={style.horizontal_container_content_frame174}>
          <div className={style.horizontal_container_content_frame188}>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={customStyles}
              className={style.react_select}
              placeholder="Тип"
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
              placeholder="Юрлица"
            />
          </div>
          <div className={style.horizontal_container_content_frame188}>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={customStyles}
              className={style.react_select}
              placeholder="Проекты"
            />

            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={customStyles}
              className={style.react_select}
              placeholder="Статьи учета"
            />
          </div>
        </div>
      </div>
      <div className={style.horizontal_container_content}>
        <div>
          <span>Период аналитики</span>
        </div>
        <div className={style.horizontal_container_content_input}>
          <Input type="date" />
        </div>
      </div>
    </div>
  );
};

export default FilterBlockCountryparty;
