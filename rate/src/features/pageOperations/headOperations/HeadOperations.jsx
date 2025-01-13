import React, { useState } from 'react';
import style from './style/headOperations.module.css';
import CurrentDate from '../../../components/currentDate/CurrentDate';
import Button from '../../../components/ui/button/Button';
import upload from '../../../assets/upload.svg';
import bank from '../../../assets/bank.svg';
import Modal from '../../../components/ui/modal/Modal';
import ModalOperationCreate from '../modalOperation/ModalOperationCreate';
import ModalOperationImport from '../modalOperationImport/ModalOperationImport';

const HeadOperations = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalImport, setModalOperationImport] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleModalOperationImportClose = () => {
    setModalOperationImport(false);
  };

  return (
    <div className={style.container_header}>
      <div className={style.container_header_content}>
        <div className={style.container_header_content_title_actions}>
          <div className={style.container_header_content_text_support}>
            <h1>Название компании</h1>
            <div>
              <CurrentDate />
            </div>
          </div>
          <div className={style.container_header_content_btn}>
            <Button
              backgroundColor="rgba(68, 76, 231, 1)"
              color="rgba(255, 255, 255, 1)"
              border="1px solid  #444CE7"
              borderRadius='8px'
              padding="12px 20px"
              fontSize="16px"
              type="button"
              onClick={() => setOpenModal((prev) => !prev)}
            >
              Создать операцию
            </Button>
            <Button
              padding="14px"
              backgroundColor="rgba(238, 244, 255, 1)"
              borderRadius='8px'
              border="1px solid  #EEF4FF"
              onClick={() => setModalOperationImport((prev) => !prev)}
            >
              <img src={upload} alt="upload" />
            </Button>
          </div>
        </div>

        <div className={style.container_header_content_information}>
          <div
            className={style.container_header_content_information_status_bar}
          >
            <div className={style.status_bar_item}>
              <span className={style.status_bar_title}>192</span>
              <span className={style.status_bar_title}>Операции</span>
            </div>
            <div className={style.status_bar_divider}>|</div>
            <div className={style.status_bar_item}>
              <span className={style.status_bar_title_text}>
                24 Поступления
              </span>
              <span className={style.status_bar_title}>8 700 000 ₽</span>
            </div>
            <div className={style.status_bar_divider}>|</div>
            <div className={style.status_bar_item}>
              <span className={style.status_bar_title_text}>6 выплат</span>
              <span className={style.status_bar_title}>8 351 600 ₽</span>
            </div>
            <div className={style.status_bar_divider}>|</div>
            <div className={style.status_bar_item}>
              <span className={style.status_bar_title_text}>Итого</span>
              <span className={style.status_bar_title_text_green}>
                +200 000
              </span>
              <span className={style.status_bar_title_text_green_rub}> ₽</span>
            </div>
          </div>
          <div>
            <Button
              padding="14px"
              backgroundColor="rgba(68, 76, 231, 1)"
              border="1px solid #444CE7"
              borderRadius='8px'
            >
              <img src={bank} alt="bank" />
            </Button>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal visible={openModal} setVisible={setOpenModal}>
          <ModalOperationCreate onClose={handleModalClose} />
        </Modal>
      )}
      {openModalImport && (
        <Modal visible={openModalImport} setVisible={setModalOperationImport}>
          <ModalOperationImport onClose={handleModalOperationImportClose} />
        </Modal>
      )}
    </div>
  );
};

export default HeadOperations;
