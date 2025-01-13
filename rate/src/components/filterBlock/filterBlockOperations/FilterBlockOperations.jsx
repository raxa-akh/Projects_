import React, { useState } from 'react';
import style from './style/filterBlockOperations.module.css';
import Input from '../../ui/input/Input';
import help from '../../../assets/help.svg';
import helpTrio from '../../../assets/help_trio.svg';
import DropDown from "./DropDown/DropDown"
import Calendar from './CalendarFilt/CalendarFilt'

const data = [{label: 'Nothing'}]

const FilterBlockOperations = () => {
  const [check, setCheck] = useState({"Поступление": false, "Выплата": false, "Перемещение": false, "Начисление": false})
  const [calendar, setCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Выберите период');
  return (
    <div className={style.horizontal_content}>
      <div className={style.horizontal_content_container}>
        <div className={style.horizontal_content_container_title}>
          <span>Тип операции</span>
          <div className={style.help_border}>
                <img src={help} className={style.help} alt="help" />
                <div className={style.help_container_first}>
                  <div className={style.help_container_inner}>
                    <span className={style.help_title}>Тип операции</span><br/>
                    <span className={style.help_text}>Показывает направление платежа</span>
                    <img alt="triangle" src={helpTrio} className={style.help_trio} />
                  </div>
                </div>
          </div>
        </div>
        <div className={style.horizontal_content_container_frame79}>
          <div className={style.horizontal_content_container_frame79_checkbox}>
            <div className={style.checkbox_container}>
              <input type="checkbox"/>
              <span className={style.checkbox_form}></span>
            </div>
            <span>Поступлене</span>
          </div>
          <div className={style.horizontal_content_container_frame79_checkbox}>
            <div className={style.checkbox_container}>
              <input type="checkbox"/>
              <span className={style.checkbox_form}></span>
            </div>
            <span>Выплата</span>
          </div>
          <div className={style.horizontal_content_container_frame79_checkbox}>
            <div className={style.checkbox_container}>
              <input type="checkbox" onChange={() => setCheck(() => ({...check, ['Перемещение']: !check['Перемещение']}))}/>
              <span className={style.checkbox_form}></span>
            </div>
            <span>Перемещение</span>
          </div>
          {check['Перемещение'] &&<div style={{marginLeft: '20px'}} className={style.horizontal_content_container_frame79_checkbox}>
            <div className={style.checkbox_container}>
              <input type="checkbox"/>
              <span className={style.checkbox_form}></span>
            </div>
            <span>Списание</span>
          </div>}
          { check['Перемещение'] &&<div style={{marginLeft: '20px'}} className={style.horizontal_content_container_frame79_checkbox}>
            <div className={style.checkbox_container}>
              <input type="checkbox"/>
              <span className={style.checkbox_form}></span>
            </div>
            <span>Зачисление</span>
          </div>}
          <div className={style.horizontal_content_container_frame79_checkbox}>
            <div className={style.checkbox_container}>
              <input type="checkbox" onChange={() => setCheck(() => ({...check, ['Начисление']: !check['Начисление']}))}/>
              <span className={style.checkbox_form}></span>
            </div>
            <span>Начисление</span>
          </div>
          { check['Начисление'] && <div style={{marginLeft: '20px'}} className={style.horizontal_content_container_frame79_checkbox}>
            <div className={style.checkbox_container}>
              <input type="checkbox"/>
              <span className={style.checkbox_form}></span>
            </div>
            <span>Списание</span>
          </div>}
          { check['Начисление'] && <div style={{marginLeft: '20px'}} className={style.horizontal_content_container_frame79_checkbox}>
            <div className={style.checkbox_container}>
              <input type="checkbox"/>
              <span className={style.checkbox_form}></span>
            </div>
            <span>Зачисление</span>
          </div>}
        </div>
      </div>
      <div className={style.horizontal_content_container_form}>
        <div className={style.horizontal_content_container_two}>
          <div className={style.horizontal_content_container_title}>
              <span>Дата оплаты</span>
              <div className={style.help_border}>
                <img src={help} className={style.help} alt="help" />
                <div className={style.help_container_second}>
                  <div className={style.help_container_inner}>
                    <span className={style.help_title}>Дата оплаты</span><br/>
                    <span className={style.help_text}>Дата получения или выплаты денег. </span>
                    <img alt="triangle" src={helpTrio} className={style.help_trio} />
                  </div>
                </div>
            </div>
          </div>
          <div className={style.horizontal_content_container_two_frame181}>
            <div className={style.calendar}>
              <Input type="text" placeholder={selectedDate} readOnly onClick={() => setCalendar(!calendar)}/>
              {calendar && <Calendar setSelectedDate={setSelectedDate} setCalendar={setCalendar}/>}
            </div>
            <div
              className={style.horizontal_content_container_frame79_checkbox}
            >
             <div className={style.checkbox_container}>
              <input type="checkbox"/>
              <span className={style.checkbox_form}></span>
            </div>
              <span>Подтверждена</span>
            </div>
            <div
              className={style.horizontal_content_container_frame79_checkbox}
            >
              <div className={style.checkbox_container}>
                <input type="checkbox"/>
                <span className={style.checkbox_form}></span>
              </div>
              <span>Не подтверждена</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.horizontal_content_container_form_two}>
        <div className={style.horizontal_content_container_title}>
          <span>Параметры</span>
          <div className={style.help_border}>
                <img src={help} className={style.help} alt="help" />
                <div className={style.help_container_third}>
                  <div className={style.help_container_inner}>
                    <span className={style.help_title}>Параметры</span><br/>
                    <span className={style.help_text}>Счета и юрлица – безналичные или наличные счета моих юрлиц, которые входят в ваш бизнес<br/>
                    Контрагенты – другие юрлица и физлица, которые платят вам или вы платите им<br/>
                    Статьи – группы для похожих операций, из которых формируются отчеты<br/>
                    Проекты – доп. признак у операций для сравнения прибыли и рентабельности разных частей бизнеса </span>
                    <img alt="triangle" src={helpTrio} className={style.help_trio} />
                  </div>
                </div>
          </div>
        </div>
        <div className={style.horizontal_content_container_form_frame176}>
          <div className={style.horizontal_content_container_frame174}>
            <div>
              <DropDown data={data} place={'Юрлица и счета'} widthAll='280px'/>
            </div>
            <div>
            <DropDown data={data} place={'Контрагенты'} widthAll='280px'/> 
            </div>
            <div>
            <DropDown data={data} place={'Статьи учета'} widthAll='280px'/>
            </div>
          </div>
          <div className={style.horizontal_content_container_frame174}>
            <div>
            <DropDown data={data} place={'Проекты'} widthAll='280px'/>
            </div>
            <div>
            <DropDown data={data} place={'Статус сделки'} widthAll='280px'/>
            </div>
            <div className={style.horizontal_content_container_frame178}>
              <div
                className={style.horizontal_content_container_frame178_input}
              >
                <Input
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="Сумма от "
                />
              </div>
              <span>-</span>
              <div
                className={style.horizontal_content_container_frame178_input}
              >
                <Input style={{ width: '100%' }} type="text" placeholder="до" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBlockOperations;
