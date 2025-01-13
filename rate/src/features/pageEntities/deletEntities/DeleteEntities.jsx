import React from 'react';
import Button from '../../../components/ui/button/Button';
import cl from './style/deleteEntities.module.css';

const DeleteEntities = () => {
  return (
    <div className={cl.container} onClick={(e) => e.stopPropagation()}>
      <div className={cl.head}>
        <h2>Удалить юрлицо</h2>
      </div>
      <div className={cl.main}>
        <p>Вы действительно хотите удалить “@”?</p>
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
          backgroundColor="rgba(240, 68, 56, 1)"
          color="rgba(255, 255, 255, 1)"
          border="1px solid  #F04438"
          padding="12px 20px"
          fontSize="16px"
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default DeleteEntities;
