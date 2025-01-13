import React from 'react';
import Button from '../../../components/ui/button/Button';
import cl from './style/archiveModal.module.css';

const ArchiveModal = () => {
  return (
    <div className={cl.container} onClick={(e) => e.stopPropagation()}>
      <div className={cl.head}>
        <h2>Добавление в архив</h2>
      </div>
      <div className={cl.main}>
        <p>Вы действительно хотите добавить “@” в архив?</p>
      </div>
      <div className={cl.btn}>
        <Button
          backgroundColor="rgba(255, 255, 255, 1)"
          color="rgba(52, 64, 84, 1)"
          border="1px solid  #D0D5DD"
          padding="12px 20px"
          fontSize="16px"
        >
          Отмена
        </Button>
        <Button
          backgroundColor="rgba(68, 76, 231, 1)"
          color="rgba(255, 255, 255, 1)"
          border="1px solid  #444CE7"
          padding="12px 20px"
          fontSize="16px"
        >
          В архив
        </Button>
      </div>
    </div>
  );
};

export default ArchiveModal;
