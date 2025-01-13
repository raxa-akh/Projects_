import React, { useState } from "react";
import styles from "./CreateRules.module.css";
import tableStyle from "../../Users/tableSettings.module.css";
import Select from "react-select";
import addCondition from "../../../../../assets/addCondition.svg";
import addParams from "../../../../../assets/addParams.svg";
import deleteRule from "../../../../../assets/deleteRule.svg";
import DropDown from "./DropDown/DropDown";

function FormCreate() {
  const initialCondition = { value: "", label: "" };
  const initialParam = { value: "", label: "" };
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCondition, setHoveredCondition] = useState(null);

  const [conditions, setConditions] = useState([initialCondition]);
  const [params, setParams] = useState([initialParam]);

  const handleAddCondition = () => {
    setConditions([...conditions, { value: "", label: "" }]);
  };

  const handleAddParam = () => {
    setParams([...params, { value: "", label: "" }]);
  };

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const handleMouseEnterCond = (index) => {
    setHoveredCondition(index);
  };

  const handleMouseLeaveCond = () => {
    setHoveredCondition(null);
  };

  const handleDeleteParam = (index) => {
    const updatedParams = [...params];
    updatedParams.splice(index, 1);
    setParams(updatedParams);
  };

  const handleDeleteCondition = (index) => {
    const updatedCondition = [...conditions];
    updatedCondition.splice(index, 1);
    setConditions(updatedCondition);
  };

  const options = [
    { value: "Дата оплаты", label: "Дата оплаты" },
    { value: "Сумма", label: "Сумма" },
    { value: "Контрагент", label: "Контрагент" },
    { value: "Назначение платежа", label: "Назначение платежа" },
  ];
  const math = [
    { value: "Между", label: "Между" },
    { value: "Кроме", label: "Кроме" },
    { value: "Позднее", label: "Позднее" },
    { value: "Раннее", label: "Раннее" },
  ];
  return (
    <div className={styles.form_create_rules}>
      <div className={styles.form_conditions}>
        <p>Если у операции</p>
        {conditions.map((condition, index) => (
          <div
            className={styles.conditions_selects}
            key={index}
            onMouseEnter={() => handleMouseEnterCond(index)}
            onMouseLeave={handleMouseLeaveCond}
          >
            <DropDown widthAll={'196px'} data={options} place={'Дата выплаты'} borderRadius={'8px 0 0 8px'}/>
            <DropDown widthAll={'196px'} data={math} place={'Между'} borderRadius={'0'}/>
            <DropDown widthAll={'196px'} data={[{label: 'Nothing'}]} place={'14.12.23-15.12....'} borderRadius={'0 8px 8px 0'}/>
            {hoveredCondition === index && hoveredCondition !== 0 ? (
              <img
                alt="delete_param"
                src={deleteRule}
                onClick={() => handleDeleteCondition(index)}
                style={{ marginLeft: 10 }}
              />
            ) : null}
          </div>
        ))}
        <div>
          <button className={styles.add_btn} onClick={handleAddCondition}>
            <img alt="add_condition" src={addCondition} />
            Добавить условие
          </button>
        </div>
      </div>
      <hr />
      <div className={styles.create_param}>
        <div className={styles.form_conditions}><p style={{ marginBottom: 16 }}>Указать параметры</p></div>
        <div className={tableStyle.table_container}>
          <table className={tableStyle.users_table}>
            <thead className={styles.head_table_params}>
              <tr>
                <th style={{width: '30%'}}>Контрагент</th>
                <th style={{width: '30%'}}>Статья</th>
                <th style={{width: '30%'}}>Проект</th>
                <th style={{width: '10%'}}>Доля</th>
              </tr>
            </thead>
            {params.map((param, index) => (
              <tbody
                className={tableStyle.body_table}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <tr className={tableStyle.table_row}>
                  <td className={styles.row_table_params}>
                    <DropDown   widthAll={'100px'} data={[{label: 'Nothing'}]} border={'none'}/>
                  </td>
                  <td className={styles.row_table_params}>
                    <DropDown widthAll={'100px'} data={[{label: 'Nothing'}]} border={'none'}/>
                  </td>
                  <td className={styles.row_table_params}>
                    <DropDown widthAll={'100px'} data={[{label: 'Nothing'}]} border={'none'}/>
                  </td>
                  {hoveredRow === index && hoveredRow !== 0 ? (
                    <td>
                      <img
                        alt="delete_param"
                        src={deleteRule}
                        onClick={() => handleDeleteParam(index)}
                      />
                    </td>
                  ) : (
                    <td>100%</td>
                  )}
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className={styles.footer_params}>
          <button className={styles.add_btn} onClick={handleAddParam}>
            <img alt="add_params" src={addParams} />
            Добавить параметр
          </button>
          <span>Итого: 100%</span>
        </div>
      </div>
    </div>
  );
}

export default FormCreate;
