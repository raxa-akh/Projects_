import React from "react";
import styles from './styles/ExchangeSettings.module.css'
import arrow from "../../../../assets/arrow_down_settings.svg";

const data = [
  {id: 1, name: "Доллар США",description: 'USD', simbol: '$', cost: '89.1'},
  {id: 2, name: "Евро",description: 'EUR', simbol: '€', cost: '99'},
  {id: 3, name: "Китайский юань",description: 'CNY', simbol: '', cost: '10.2'},
]

function ExchangeSettings() {
  return(
    <div className={styles.container}>
        <div className={styles.container_inner}>
            <div className={styles.header}>
              <h3 className={styles.header_title}>Курсы валют по ЦБ и криптовалют на <span>01.01.2000</span></h3>
            </div>
            <hr></hr>

            <div className={styles.main}>
              <div className={`${styles.table_cont} ${styles.left}`}>
                <table>
                  <thead>
                    <th>Название валюты<img src={arrow} alt="arrow"/></th>
                    <th>Обозначение</th>
                    <th>Символ</th>
                    <th>Курс</th>
                  </thead>
                  <tbody>
                    {data.map(item => 
                    <tr>
                      <td className={styles.name}>{item.name}</td>
                      <td className={styles.description}>{item.description}</td>
                      <td className={styles.simbol}>{item.simbol}</td>
                      <td className={styles.cost}>{item.cost}</td>
                    </tr> )}
                  </tbody>
                </table>
              </div>

              <div className={`${styles.table_cont} ${styles.right}`}>
              <table>
                  <thead>
                    <th>Название валюты</th>
                    <th>Обозначение</th>
                    <th>Курс</th>
                  </thead>
                  <tbody>
                    {data.map(item => 
                    <tr>
                      <td className={styles.name}>{item.name}</td>
                      <td className={styles.description}>{item.description}</td>
                      <td className={styles.cost}>{item.cost}</td>
                    </tr> )}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ExchangeSettings;
