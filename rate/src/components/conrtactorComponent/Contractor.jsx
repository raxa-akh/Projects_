import React, { useState } from "react";

import styles from './ContractorStyles/Conrtactor.module.css'
import checkbox from './ContractorStyles/CheckboxClassic.module.css'

import help_circle from '../../assets/help_circle.svg'
import plus from '../../assets/plus.svg'
import downLoad from '../../assets/download_2.svg'
import arrow from '../../assets/down_arrow.svg'
import calendar from '../../assets/calendar.svg'
import loop from '../../assets/_loop.svg'
import x from '../../assets/x_modal.svg'

import DropDown from "./Components/DropDown/DropDown";
import  Modal  from "../ui/modal/Modal";
import ContactsForm from "./Forms/ContactFrom";
import PayForm from "./Forms/PayForm";
import MakeGroupForm from "./Forms/MakeGroupForm";
function Contractor() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(3);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.header_title}>
            <span className={styles.title_main}>Мои контрагенты</span>
            <span className={styles.title_date}>31 октября 2023 года, вторник</span>
            <img alt="" src={help_circle} className={styles.title_help}/>
          </div>
          <div className={styles.header_buttons}>
            <button className={styles.button_left} onClick={() => {setVisible((prev) => !prev); setPage(1)}}><img src={plus} alt=""/> Создать</button>
            <button className={styles.button_right}><img src={downLoad} alt=""/> .xls</button>
          </div>
          <div className={styles.header_info}>
            <div className={styles.info_item}>
              <span className={styles.item_first_first}>32</span>
              <span className={styles.item_second}> контрагента</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.item_first}>Операций</span>
              <span className={styles.item_second}> 160</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.item_first}>Дебиторка</span>
              <span className={styles.item_second}> 830 000 ₽</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.item_first}>Кредиторка</span>
              <span className={styles.item_second}> 350 000 ₽</span>
            </div>
            <div className={styles.info_item}>
              <span className={styles.item_first}>Общий оборот</span>
              <span className={styles.item_second_last}> +200 000 ₽</span>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.table_container}>
            <table >
                  <thead className={styles.thead}>
                    <th>
                      <div  className={checkbox.checkbox_container}>
                          <input style={{top: '-3px'}} type="checkbox"/>
                          <span style={{top: '-3px'}} className={checkbox.checkbox_form}></span>
                      </div>
                      <span style={{position: 'relative', left: '25px'}}>Контрагент</span>
                    </th>
                    <th>Тип</th>
                    <th>Группа</th>
                    <th>ИНН</th>
                    <th>Операции</th>
                    <th>Дебиторка</th>
                    <th>Кредиторка</th>
                    <th>Оборот</th>
                  </thead>
                  <tbody>
                    <tr className={styles.trow}>
                      <td className={styles.contractor}>Нет данных</td>
                      <td className={styles.type}></td>
                      <td className={styles.group}></td>
                      <td className={styles.inn}></td>
                      <td className={styles.operation}></td>
                      <td className={styles.debitorka}></td>
                      <td className={styles.kreditorka}></td>
                      <td className={styles.oborot}></td>
                    </tr> 
                  </tbody>
              </table>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.inner_footer}>
            <div className={styles.filter}>
              <div className={styles.filter_closed}>
                <div className={styles.filter_search}>
                  <input type="text" placeholder="Поиск по конртагенту" className={styles.filter_input}></input>
                  <img alt="" src={loop} className={styles.filter_input_img}/>
                  <div style={{marginLeft: '30px', marginTop: '10px'}}> 
                    <div  className={`${checkbox.checkbox_container} ${checkbox.special}`}>
                      <input type="checkbox"/>
                      <span className={`${checkbox.checkbox_form} ${checkbox.special}`}></span>
                    </div>
                      <span style={{marginLeft: '25px'}} className={styles.checkboxes_info}>Группировать</span>
                    </div> 
                </div>
                <div className={styles.filter_open_btns}>
                  <button onClick={() => setIsOpen((prev) => !prev)} className={styles.filter_open_btn}>
                    Показать фильтры <img className={styles.filter_open_arrow} style={isOpen ? {transform: 'rotate(180deg)'} : {}} src={arrow} alt=""/>
                  </button>
                </div>
              </div>
              <div className={styles.filter_opened} style={isOpen ? {} : {display: 'none'}}>
                <div className={styles.checkbox_group}>
                  <div className={styles.filter_ch}>
                    <span className={styles.type_head}>Дебиторка</span>
                    <div className={styles.checkboxes}>
                      <div className={styles.checkbox_span}>
                        <div className={checkbox.checkbox_container}>
                          <input type="checkbox"/>
                          <span  className={checkbox.checkbox_form}></span>
                        </div>
                        <span className={styles.checkboxes_info}>Денежная</span>
                      </div>
                      <div className={styles.checkbox_span}>
                        <div className={checkbox.checkbox_container}>
                          <input type="checkbox"/>
                          <span  className={checkbox.checkbox_form}></span>
                        </div>
                        <span className={styles.checkboxes_info}>Неденежная</span>
                      </div>
                      <div className={styles.checkbox_span}>
                        <div className={checkbox.checkbox_container}>
                          <input type="checkbox"/>
                          <span  className={checkbox.checkbox_form}></span>
                        </div>
                        <span className={styles.checkboxes_info}>Без дебиторки</span>
                      </div>
                      </div>
                  </div>
                  <div className={styles.filter_ch}>
                    <span className={styles.type_head}>Кредиторка</span>
                    <div className={styles.checkboxes}>
                      <div className={styles.checkbox_span}>
                        <div className={checkbox.checkbox_container}>
                          <input type="checkbox"/>
                          <span  className={checkbox.checkbox_form}></span>
                        </div>
                        <span className={styles.checkboxes_info}>Денежная</span>
                      </div>
                      <div className={styles.checkbox_span}>
                        <div className={checkbox.checkbox_container}>
                          <input type="checkbox"/>
                          <span  className={checkbox.checkbox_form}></span>
                        </div>
                        <span className={styles.checkboxes_info}>Неденежная</span>
                      </div>
                      <div className={styles.checkbox_span}>
                        <div className={checkbox.checkbox_container}>
                          <input type="checkbox"/>
                          <span  className={checkbox.checkbox_form}></span>
                        </div>
                        <span className={styles.checkboxes_info}>Без кредиторки</span>
                      </div>
                      </div>
                  </div>
                  <div className={styles.filter_ch}>
                    <span className={styles.type_head}>Без кредиторки</span>
                    <div className={styles.checkboxes}>
                      <div className={styles.checkbox_span}>
                        <div className={checkbox.checkbox_container}>
                          <input type="checkbox"/>
                          <span  className={checkbox.checkbox_form}></span>
                        </div>
                        <span className={styles.checkboxes_info}>Активные</span>
                      </div>
                      <div className={styles.checkbox_span}>
                        <div className={checkbox.checkbox_container}>
                          <input type="checkbox"/>
                          <span  className={checkbox.checkbox_form}></span>
                        </div>
                        <span className={styles.checkboxes_info}>Активные</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.filter_params}>
                  <span className={styles.type_head}>Параметры <img className={styles.down_circle} alt=""/></span>
                  <div className={styles.filter_selects}>
                    <DropDown place={'Тип'}/>
                    <DropDown place={'Контрагенты'}/>
                    <DropDown place={'Юрлица'}/>
                    <DropDown place={'Проекты'}/>
                    <DropDown place={'Статьи учета'}/>
                  </div>
                </div>
                <div className={styles.filter_period}>
                  <span className={styles.type_head}>Период</span>
                  <div className={styles.filter_selects}>
                    <DropDown place={'Выбрать период'} img={calendar}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={visible} setVisible={setVisible}>
        <div className={styles.modal_container}>
          
            <div className={styles.modal_head}>
            <div className={styles.modal_head_container}>
              <div className={styles.modal_header}>
                <span className={styles.modal_header_title}>Создание контрагента</span>
                <img onClick={() => setVisible(false)} src={x} alt="close" style={{cursor: 'pointer'}}/>
              </div>
              </div>
            {(page===1 || page===2) && (
              <div className={styles.header_btns}>
                <button onClick={() => setPage(1)} className={styles.modal_button_left}>Контакты</button>
                <button onClick={() => setPage(2)} className={styles.modal_button_right}>Реквизиты</button>
              </div> )}
            </div>
          
          {page === 1 && <ContactsForm setVisible={setVisible} setPage={setPage}/>}
          {page === 2 && <PayForm setVisible={setVisible} setPage={setPage}/>}
          {page === 3 && <MakeGroupForm setVisible={setVisible} setPage={setPage}/>}
        </div>
      </Modal>
    </div>
  )
}

export default Contractor;
