import React, { useState, useEffect } from "react";
import card from "../../../../assets/card.svg";
import vtb from "../../../../assets/vtb.svg";
import tinkof from "../../../../assets/tinkof.svg";
import sberbank from "../../../../assets/sberbank.svg";
import IntegrationModal from "./Modal/IntegrationModal";
import styles from "./integration.module.css";
import ModalFinish from "./Modal/ModalFinish";

function Integration() {
  const [bank, setBank] = useState("sberbank");
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [modalFinich, setModalFinish] = useState(true);

  useEffect(() => {
    if (bank) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [bank]);

  const handleClickSetBank = (bankName) => {
    setBank(bankName);
  };
  const handleClickOpenModal = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className={styles.integration_container}>
      <div>
        <div className={styles.integration_inner}>
          <h3 className={styles.name_integration}>Банки</h3>
          <hr className={styles.divider_intro} />
        </div>
        <div className={styles.integration_content}>

          <div className={styles.integration_intro}>
            Сократите время на ввод данных с помощью автоматической загрузки
            платежей, для этого подключите банк к Диок.Финансы.
          </div>

          <div className={styles.choose_bank}>
            <div className={styles.bank}>
              <div className={styles.header_bank}>
                <div className={styles.name_bank}>
                  <img alt="card" src={card} className={styles.img_card} />
                  Сбербанк
                </div>
                <div className={styles.checkbox_container}>
                  <input
                    type="checkbox"
                    onChange={() => handleClickSetBank("sberbank")}
                    checked={bank === "sberbank"}
                  />
                  <span className={styles.checkbox_form}></span>
                </div>
              </div>
              <div className={styles.body_bank}>
                <img alt="sberbank" src={sberbank} />
              </div>
            </div>
            <div className={styles.bank}>
              <div className={styles.header_bank}>
                <div className={styles.name_bank}>
                  <img alt="card" src={card} className={styles.img_card} />
                  Тинькофф
                </div>
                <div className={styles.checkbox_container}>
                  <input
                    type="checkbox"
                    onChange={() => handleClickSetBank("tinkof")}
                    checked={bank === "tinkof"}
                  />
                  <span className={styles.checkbox_form}></span>
                </div>
              </div>
              <div className={styles.body_bank}>
                <img alt="tinkof" src={tinkof} />
              </div>
            </div>
            <div className={styles.bank}>
              <div className={styles.header_bank}>
                <div className={styles.name_bank}>
                  <img alt="card" src={card} className={styles.img_card} />
                  ВТБ банк
                </div>
                <div className={styles.checkbox_container}>
                  <input
                    type="checkbox"
                    onChange={() => handleClickSetBank("vtb")}
                    checked={bank === "vtb"}
                  />
                  <span className={styles.checkbox_form}></span>
                </div>
              </div>
              <div className={styles.body_bank}>
                <img alt="vtb" src={vtb} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.connect_bank}>
        <div className={styles.footer}>
          <hr className={styles.divider} />
          <div className={styles.actions_footer}>
            <button
              className={styles.save_settings}
              onClick={handleClickOpenModal}
            >
              Подключить банк
            </button>
          </div>
        </div>
      </div>
      <IntegrationModal
        bank={bank}
        visible={visible}
        setVisible={setVisible}
        openModal={handleClickOpenModal}
      />
      <ModalFinish visible={modalFinich} setVisible={setModalFinish} page={1}/>
    </div>
  );
}

export default Integration;
