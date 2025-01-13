import React, { useState } from 'react';
import style from './style/headCountryparty.module.css';
import CurrentDate from '../../../components/currentDate/CurrentDate';
import Button from '../../../components/ui/button/Button';
import plus from '../../../assets/plus.svg';
import download from '../../../assets/file_download.svg';
import Modal from '../../../components/ui/modal/Modal';
import CreateCountry from '../createCountryparty/CreateCountry';

const HeadCountryparty = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalXLS, setOpenModalXLS] = useState(false);
  return (
    <div className={style.container_header}>
      <div className={style.container_header_content}>
        <div className={style.container_header_content_title_actions}>
          <div className={style.container_header_content_text_support}>
            <h1>Моя компания</h1>
            <div>
              <CurrentDate />
            </div>
          </div>
          <div className={style.container_header_content_btn}>
            <Button
              backgroundColor="rgba(68, 76, 231, 1)"
              color="rgba(255, 255, 255, 1)"
              border="1px solid  #444CE7"
              padding="12px 20px"
              fontSize="16px"
              lineHeight="24px"
              type="button"
              onClick={() => setOpenModal((prev) => !prev)}
            >
              <img src={plus} alt="plus" />
              Создать
            </Button>
            <Button
              backgroundColor="rgba(68, 76, 231, 1)"
              color="rgba(255, 255, 255, 1)"
              border="1px solid  #444CE7"
              padding="12px 20px"
              fontSize="16px"
              lineHeight="24px"
              type="button"
              onClick={() => setOpenModalXLS((prev) => !prev)}
            >
              <img src={download} alt="download" />
              .xls
            </Button>
          </div>
        </div>

        <div className={style.container_header_content_information}>
          <div
            className={style.container_header_content_information_status_bar}
          >
            <div className={style.status_bar_item}>
              <span className={style.status_bar_title}>32</span>
              <span className={style.status_bar_title}>Конрагента</span>
            </div>
            <div className={style.status_bar_divider}>|</div>
            <div className={style.status_bar_item}>
              <span className={style.status_bar_title_text}>Операций</span>
              <span className={style.status_bar_title}>160</span>
            </div>
            <div className={style.status_bar_divider}>|</div>
            <div className={style.status_bar_item}>
              <span className={style.status_bar_title_text}>Дебиторка</span>
              <span className={style.status_bar_title}>700 000</span>
              <span className={style.status_bar_title}>₽</span>
            </div>
            <div className={style.status_bar_divider}>|</div>
            <div className={style.status_bar_item}>
              <span className={style.status_bar_title_text}>Кредиторка</span>
              <span className={style.status_bar_title}>350 000</span>
              <span className={style.status_bar_title}>₽</span>
            </div>
            <div className={style.status_bar_divider}>|</div>
            <div className={style.status_bar_item}>
              <span className={style.status_bar_title_text}>Общий оборот</span>
              <span className={style.status_bar_title_text_green}>
                +200 000
              </span>
              <span className={style.status_bar_title_text_green_rub}> ₽</span>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal visible={openModal} setVisible={setOpenModal}>
          <CreateCountry />
        </Modal>
      )}
      {openModalXLS && <Modal></Modal>}
    </div>
  );
};

export default HeadCountryparty;
