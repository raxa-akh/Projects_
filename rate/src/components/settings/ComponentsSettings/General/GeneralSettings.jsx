import React, { useState } from "react";
import Select from "react-select";
import FooterSettings from "../Footer/FooterSettings";
import styles from "../Styles/FormSettings.module.css";
import './style/GeneralSettings.css'




function GeneralSettings() {
  const [value, setValue] = useState("RUB — Российский рубль");

  const handleClickChangeValue = (newVal) => {
    setValue(newVal);
  };

  const options = [
    { value: "RUB", label: "Российский рубль" },
    { value: "USD", label: "Доллар США" },
    { value: "EUR", label: "Евро" },
    { value: "AED", label: "Дирхам ОАЭ" },
    { value: "AMD", label: "Армянский драм" },
  ];
  

  return (
    <div className={styles.form_settings_container}>
      <div className={styles.form_settings}>
        <div className={styles.form_option}>
          <div className={styles.name_option}>Название бизнеса</div>
          <div>
            <input
              placeholder="Моя компания"
              className={styles.input_form_settings}
            />
          </div>
        </div>

        {/* <hr className={styles.divider} /> */}

        <div className={styles.form_option}>
          <div className={styles.name_option}>Основная валюта</div>
          <div className={styles.select}>
            <Select
            className={'select_name_value'}
            options={options}
            defaultValue={value} 
            placeholder={value}
            onChange={handleClickChangeValue}
          />
          {/* <input 
          className={styles.input_form_settings}
          disabled/> */}
          </div>
          
        </div>
        {/* В дальнейшем добавится */}

        {/* <hr className={styles.divider} /> */}

        <div className={styles.form_option}>
          <div className={styles.name_option}>Классификация расходов</div>
          <div className={styles.checkbox_options}>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox"  />
                <span className={styles.checkbox_form}></span>
              </div>
              <span>Прямые и косвенные</span>
            </div>
            <div className={styles.option}>
              <div div className={styles.checkbox_container}>
                <input type="checkbox" />
                <span className={styles.checkbox_form}></span>
              </div>              
              <span>Постоянные и переменные</span>
            </div>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox" />
                <span className={styles.checkbox_form}></span>
              </div>
              <span>Не использовать</span>
            </div>
          </div>
        </div>
        {/* <hr className={styles.divider} /> */}
        <div className={styles.form_option}>
          <div className={styles.name_option}>Дополнительные расходы</div>
          <div className={styles.checkbox_options}>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox"/>
                <span className={styles.checkbox_form}></span>
              </div>
              <span>Отображать копейки</span>
            </div>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox" />
                <span className={styles.checkbox_form}></span>
              </div>
              <span>Подставлять текущую дату при копировании операции</span>
            </div>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox"/>
                <span className={styles.checkbox_form}></span>
              </div>
              <span>
                Показывать кассовые разрывы, которые начались и закончились в
                прошлом
              </span>
            </div>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox" />
                <span className={styles.checkbox_form}></span>
              </div>
              <span>
                Показывать поле «Дата начисления» при добавлении операции
              </span>
            </div>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox" />
                <span className={styles.checkbox_form}></span>
              </div>
              <span>
                Показывать фильтр «Дата начисления» в разделе «Операции»
              </span>
            </div>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox"/>
                <span className={styles.checkbox_form}></span>
              </div>
              <span>Отображать категорию статей в списке операций</span>
            </div>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox"  />
                <span className={styles.checkbox_form}></span>
              </div>
              <span>Сделать поле «Назначение платежа» необязательным</span>
            </div>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox"  />
                <span className={styles.checkbox_form}></span>
              </div>
              <span>Скрыть подсказки-вопросы</span>
            </div>
            <div className={styles.option}>
              <div className={styles.checkbox_container}>
                <input type="checkbox"  />
                <span className={styles.checkbox_form}></span>
              </div>
              <span>Показывать номер платежного поручения</span>
            </div>
          </div>
        </div>
      </div>
      <FooterSettings />
    </div>
  );
}

export default GeneralSettings;
