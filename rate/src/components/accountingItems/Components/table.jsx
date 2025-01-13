import React, { useState } from "react";
import style from "../accItems.module.css";
import hamburger from "../../../assets/hamburger.svg";
import strelkaBottom from "../../../assets/strelkaBottom.svg";
import strelkaTop from "../../../assets/strelkaTop.svg";

function Table() {
  const [services, setServices] = useState(false);
  const [income, setIncome] = useState(false);

  const handleOpenServices = (cb) => {
    cb((prev) => !prev);
  };

  return (
    <div>
      <table className={style.table_items}>
        <tbody className={style.tbody}>
          <tr>
            <div className={style.stroke_table_items}>
              <div>Продажа товаров</div>
              <div>
                <img
                  alt="hamburger"
                  src={hamburger}
                  className={style.hamburger}
                />
              </div>
            </div>
          </tr>
          <tr onClick={() => handleOpenServices(setServices)}>
            <div className={style.stroke_table_items}>
              <div>Оказание услуг</div>
              <div>
                <img
                  alt="hamburger"
                  src={hamburger}
                  className={style.hamburger}
                />
              </div>
            </div>
          </tr>
          {services && (
            <tr onClick={() => handleOpenServices(setIncome)}>
              <div className={style.stroke_table_items}>
                <div className={style.child_main}>
                  <div>
                    <img
                      alt="strelka"
                      src={income ? strelkaTop : strelkaBottom}
                      className={style.strelka}
                    />
                  </div>
                  <div className={style.name_child}> Прочие доходы</div>
                </div>
                <div>
                  <img
                    alt="hamburger"
                    src={hamburger}
                    className={style.hamburger}
                  />
                </div>
              </div>
            </tr>
          )}
          {income && services && (
            <tr>
              <div className={style.stroke_table_items}>
                <div className={style.child_second}>
                  {/* <img
                    alt="strelka"
                    src={services ? strelkaTop : strelkaBottom}
                  /> */}
                  Процент по вкладам
                </div>{" "}
                <div>
                  <img
                    alt="hamburger"
                    src={hamburger}
                    className={style.hamburger}
                  />
                </div>
              </div>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
