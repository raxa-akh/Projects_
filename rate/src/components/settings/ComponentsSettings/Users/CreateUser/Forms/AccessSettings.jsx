import { useState, useEffect } from "react";
import React from "react";
import styles from "../../../Styles/FormStyles.module.css";
import checkboxRadio from "../../styles/checkboxStyleRadio.module.css";
import checkboxClassic from "../../styles/checkboxStyleClassic.module.css";
import access from "../../styles/AccessSettings.module.css";
import openCheckbox from "../../styles/checkboxOpen.module.css";
import loop from '../../../../../../assets/search_loop.svg';
import arrow from '../../../../../../assets/arrow.svg';

const options_ur_face = [['Юрлица и счета'], 
  ["Показатели", "Сделки", "Счета"], 
  ['Бюджет доходов и расходов', 'Бюджет движения денежных средств','Платёжный календарь']
]

const options_all = [['Бюджет доходов и расходов', 'Бюджет движения денежных средств','Платёжный календарь'], 
  ["Отчет о прибылях и убытках", "Отчет о движении денежных средств", "Отчет о движении денежных средств"], 
  ['История действия', 'Пользователи']
]

function AccessSettings({setNumPage}) {
  const [type, setType] = useState();
  const [disabled, setDisabled] = useState(true);
  const [select, setSelect] = useState(1);
  const [urFace, setUrFace] = useState({'юрлица': false, 'план': false,})
  const [all, setAll] = useState({'все': false, 'план': false, 'отчеты': false, 'настройки': false,})

  const handleClickSetType = (type) => {
    setType(type);
  };
  useEffect(() => {
    if (type) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [type]);

  return (
    <div className={styles.form_content}>
      <div className={styles.form_access}>
        <h3 className={styles.form_access_intro}>Настройки доступа</h3>
        <div className={styles.select_role}>
          <div className={checkboxClassic.checkbox_container}>
            <input type="checkbox" />
            <span className={checkboxClassic.checkbox_form}></span>
          </div>
          <span className={styles.user_name_role}>Разрешить доступ к API</span>
        </div>

        <div className={styles.select_role}>
          <div className={checkboxClassic.checkbox_container}>
            <input type="checkbox" />
            <span className={checkboxClassic.checkbox_form}></span>
          </div>
          <span className={styles.user_name_role}>
            Разрешать доступ к новым юрлицам, счетам и проектам
          </span>
        </div>

        <div className={styles.select_role}>
        <div className={checkboxRadio.checkbox_container}>
            <input type="radio" onClick={() => handleClickSetType('fullAccess')} checked={type==='fullAccess'}/>
            <span className={checkboxRadio.checkbox_form}></span>
          </div>
          <span style={{marginTop: '6px', paddingLeft: '8px'}} className={styles.user_name_role}>
            Доступ ко всем существующим юрлицам, счетам и проектам
          </span>
        </div>

        <div className={styles.select_role}>
          <div className={checkboxRadio.checkbox_container}>
            <input type="radio"  onClick={() => handleClickSetType('customizableAccess')} checked={type==='customizableAccess'}/>
            <span className={checkboxRadio.checkbox_form}></span>
          </div>
          <span style={{marginTop: '5px', paddingLeft: '8px'}} className={styles.user_name_role}>
            Настроить ограничения доступа
          </span>
        </div>
        {type==="customizableAccess" && (<div className={access.container}>
          <div className={access.header}>
            <span 
            onClick={() => setSelect(1)} 
            className={select !== 1 ?`${access.header_title}` : `${access.header_title} ${access.selected}`}>
              Юрлица и счета
            </span>
            <span 
            onClick={() => setSelect(2)} 
            className={select !== 2 ?`${access.header_title}` : `${access.header_title} ${access.selected}`}>
              Проекты
            </span>
            <span 
            onClick={() => setSelect(3)} 
            className={select !== 3 ?`${access.header_title}` : `${access.header_title} ${access.selected}`}>
              Разделы
            </span>
          </div>
          <div className={access.main}>
              {select===1 && (<div className={access.options}>
                <div className={access.search}>
                  <input className={access.input} type='text'/>
                  <img class={access.input_img} src={loop} alt='search'/>
                </div>
                <ul className={`${access.table} ${access.table_first_level}`}>
                  <li onClick={(prev) => setUrFace({...urFace, 'юрлица': !urFace['юрлица']})} className={access.li_open}>
                      <div className={access.li_inner}>
                        <div className={openCheckbox.checkbox_container}>
                          <input type='checkbox'checked={urFace['юрлица']} onClick={(prev) => setUrFace({...urFace, 'юрлица': !urFace['юрлица']})}/>
                          <span className={openCheckbox.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '28px'}}>Юрлица и счета</span>
                      </div>
                      <img className={urFace['юрлица'] ? '' : openCheckbox.arrow} alt='arrow' src={arrow}/>
                    </li>
                  {urFace['юрлица'] && (<ul className={`${access.table} ${access.table_second_level}`}>
                    {options_ur_face[1].map(item => (
                     <li>
                      <div className={checkboxClassic.checkbox_container}>
                        <input type='checkbox'/>
                        <span className={checkboxClassic.checkbox_form}></span>
                      </div>
                        <span style={{ paddingLeft: '28px'}}>{item}</span>
                    </li> 
                    ))}
                    <li onClick={(prev) => setUrFace({...urFace, 'план': !urFace['план']})} className={access.li_open}>
                      <div className={access.li_open}>
                        <div className={openCheckbox.checkbox_container}>
                          <input type='checkbox' checked={urFace['план']} onClick={(prev) => setUrFace({...urFace, 'план': !urFace['план']})}/>
                          <span className={openCheckbox.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '0px'}}>План</span>
                      </div>
                      <img className={urFace['план'] ? '' : openCheckbox.arrow} alt='arrow' src={arrow}/>
                    </li>
                    { urFace['план'] && (<ul className={`${access.table} ${access.table_third_level}`}>
                      {options_ur_face[2].map(item => 
                        (<li>
                        <div className={checkboxClassic.checkbox_container}>
                          <input type='checkbox'/>
                          <span className={checkboxClassic.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '28px'}}>{item}</span>
                    </li>))}
                    </ul>)}
                  </ul>)}
                </ul>
              </div>)}

              {select===2 && (<div className={access.options}>
                <div className={access.search}>
                  <input className={access.input} type='text'/>
                  <img class={access.input_img} src={loop} alt='search'/>
                </div>
                <ul className={`${access.table} ${access.table_first_level}`}>
                  <li onClick={(prev) => setUrFace({...urFace, 'юрлица': !urFace['юрлица']})} className={access.li_open}>
                      <div className={access.li_inner}>
                        <div className={checkboxClassic.checkbox_container}>
                          <input type='checkbox'checked={urFace['юрлица']} onClick={(prev) => setUrFace({...urFace, 'юрлица': !urFace['юрлица']})}/>
                          <span className={checkboxClassic.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '28px'}}>Все проекты</span>
                      </div>
                      <img className={urFace['юрлица'] ? '' : openCheckbox.arrow} alt='arrow' src={arrow}/>
                    </li>
                  {urFace['юрлица'] && (<ul className={`${access.table} ${access.table_second_level}`}>
                    <li onClick={(prev) => setUrFace({...urFace, 'план': !urFace['план']})} className={access.li_open}>
                      <div className={access.li_open}>
                        <div className={checkboxClassic.checkbox_container}>
                          <input type='checkbox' checked={urFace['план']} onClick={(prev) => setUrFace({...urFace, 'план': !urFace['план']})}/>
                          <span className={checkboxClassic.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '0px'}}>Проекты без группы</span>
                      </div>
                      <img className={urFace['план'] ? '' : openCheckbox.arrow} alt='arrow' src={arrow}/>
                    </li>
                    { urFace['план'] && (<ul className={`${access.table} ${access.table_third_level}`}>
                      <li>
                        <div className={checkboxClassic.checkbox_container}>
                          <input type='checkbox'/>
                          <span className={checkboxClassic.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '28px'}}>Не выбран</span>
                      </li>
                    </ul>)}
                  </ul>)}
                </ul>
              </div>)}

              {select===3 && (<div className={access.options}>
                <div className={access.search}>
                  <input className={access.input} type='text'/>
                  <img class={access.input_img} src={loop} alt='search'/>
                </div>
                <ul className={`${access.table} ${access.table_first_level}`}>
                  <li onClick={(prev) => setAll({...all, 'все': !all['все']})} className={access.li_open}>
                      <div className={access.li_inner}>
                        <div className={openCheckbox.checkbox_container}>
                          <input type='checkbox'checked={all['все']} onClick={(prev) => setAll({...all, 'все': !all['все']})}/>
                          <span className={openCheckbox.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '28px'}}>Все категрии</span>
                      </div>
                      <img className={all['все'] ? '' : openCheckbox.arrow} alt='arrow' src={arrow}/>
                    </li>
                  {all['все'] && (<ul className={`${access.table} ${access.table_second_level}`}>
                    {options_ur_face[1].map(item => (
                     <li>
                      <div className={checkboxClassic.checkbox_container}>
                        <input type='checkbox'/>
                        <span className={checkboxClassic.checkbox_form}></span>
                      </div>
                        <span style={{ paddingLeft: '28px'}}>{item}</span>
                    </li> 
                    ))}
                    <li onClick={(prev) => setAll({...all, 'план': !all['план']})} className={access.li_open}>
                      <div className={access.li_open}>
                        <div className={openCheckbox.checkbox_container}>
                          <input type='checkbox' checked={all['план']} onClick={(prev) => setAll({...all, 'план': !all['план']})}/>
                          <span className={openCheckbox.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '0px'}}>План</span>
                      </div>
                      <img className={all['план'] ? '' : openCheckbox.arrow} alt='arrow' src={arrow}/>
                    </li>
                    { all['план'] && (<ul className={`${access.table} ${access.table_third_level}`}>
                      {options_all[0].map(item => 
                        (<li>
                        <div className={checkboxClassic.checkbox_container}>
                          <input type='checkbox'/>
                          <span className={checkboxClassic.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '28px'}}>{item}</span>
                        </li>))}
                    </ul>)}
                    <li onClick={(prev) => setAll({...all, 'отчеты': !all['отчеты']})} className={access.li_open}>
                      <div className={access.li_open}>
                        <div className={openCheckbox.checkbox_container}>
                          <input type='checkbox' checked={all['отчеты']} onClick={(prev) => setAll({...all, 'отчеты': !all['отчеты']})}/>
                          <span className={openCheckbox.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '0px'}}>Отчеты</span>
                      </div>
                      <img className={all['отчеты'] ? '' : openCheckbox.arrow} alt='arrow' src={arrow}/>
                    </li>
                    { all['отчеты'] && (<ul className={`${access.table} ${access.table_third_level}`}>
                      {options_all[1].map(item => 
                        (<li>
                        <div className={checkboxClassic.checkbox_container}>
                          <input type='checkbox'/>
                          <span className={checkboxClassic.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '28px'}}>{item}</span>
                        </li>))}
                    </ul>)}
                    <li onClick={(prev) => setAll({...all, 'настройки': !all['настройки']})} className={access.li_open}>
                      <div className={access.li_open}>
                        <div className={openCheckbox.checkbox_container}>
                          <input type='checkbox' checked={all['настройки']} onClick={(prev) => setAll({...all, 'настройки': !all['настройки']})}/>
                          <span className={openCheckbox.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '0px'}}>Настройки</span>
                      </div>
                      <img className={all['настройки'] ? '' : openCheckbox.arrow} alt='arrow' src={arrow}/>
                    </li>
                    { all['настройки'] && (<ul className={`${access.table} ${access.table_third_level}`}>
                      {options_all[2].map(item => 
                        (<li>
                        <div className={checkboxClassic.checkbox_container}>
                          <input type='checkbox'/>
                          <span className={checkboxClassic.checkbox_form}></span>
                        </div>
                          <span style={{ paddingLeft: '28px'}}>{item}</span>
                        </li>))}
                    </ul>)}
                    
                  </ul>)}
                </ul>
              </div>)}
          </div>
        </div>)}



      </div>
      <div className={styles.btn_contacts}>
      <button onClick={() => setNumPage(2)} className={styles.cancel_btn_contacts}>Отменить</button>

      <button
        className={styles.add_btn_contacts}
        disabled={disabled}
        
      >
        Добавить
      </button>
      </div>
    </div>
  );
}

export default AccessSettings;
