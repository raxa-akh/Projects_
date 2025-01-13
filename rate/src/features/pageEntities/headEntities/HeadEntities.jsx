import React, { useState } from 'react';
import cl from './style/headEntities.module.css';
import CurrentDate from '../../../components/currentDate/CurrentDate';
import icon from '../../../assets/Icon.svg';
import Button from '../../../components/ui/button/Button';
import plus from '../../../assets/plus.svg';
import Modal from '../../../components/ui/modal/Modal';
import AddForm from '../addForm/AddForm';

const HeadEntities = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <div className={cl.content}>
        <div className={cl.content_conteiner}>
          <div className={cl.container_head}>
            <div className={cl.head}>
              <h1>Мои юрлица</h1>
              <div>
                <img src={icon} alt="?" />
              </div>
            </div>
            <div>
              <CurrentDate />
            </div>
          </div>
          <div>
            <Button
              backgroundColor="rgba(68, 76, 231, 1)"
              color="rgba(255, 255, 255, 1)"
              border="1px solid  #444CE7"
              padding="12px 20px"
              fontSize="16px"
              type="button"
              onClick={() => setAddModal((prev) => !prev)}
            >
              <img src={plus} alt="+" />
              Добавить
            </Button>
          </div>
        </div>
      </div>
      {addModal && (
        <Modal visible={addModal} setVisible={setAddModal}>
          <AddForm />
        </Modal>
      )}
    </>
  );
};

export default HeadEntities;
