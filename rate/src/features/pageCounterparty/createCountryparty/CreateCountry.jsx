import React, { useState } from 'react';
import style from './style/createCountry.module.css';
import Button from '../../../components/ui/button/Button';
import CreateCountryContact from './createCountrypartyContact/CreateCountryContact';
import CreateCountryRequisites from './createCountryRequisites/CreateCountryRequisites';

const CreateCountry = () => {
  const [openContact, setOpenContact] = useState(true);
  const [openRequisites, setOpenRequisites] = useState(false);

  const handleContact = () => {
    setOpenContact(true);
    setOpenRequisites(false);
  };
  const handleRequisites = () => {
    setOpenContact(false);
    setOpenRequisites(true);
  };

  return (
    <div
      className={style.container}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={style.container_header}>
        <h1>Создание контрагента</h1>
      </div>
      <div className={style.container_main}>
        <div className={style.container_main_btn}>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(52, 64, 84, 1)"
            border="1px solid #D0D5DD"
            padding="10px 16px"
            fontSize="14px"
            borderRadius="8px 0px 0px 8px"
            lineHeight="20px"
            onClick={handleContact}
          >
            Контакты
          </Button>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(52, 64, 84, 1)"
            border="1px solid #D0D5DD"
            padding="10px 16px"
            fontSize="14px"
            borderRadius="0px 8px 8px 0px"
            lineHeight="20px"
            onClick={handleRequisites}
          >
            Реквизиты
          </Button>
        </div>
        {openContact && <CreateCountryContact />}
        {openRequisites && <CreateCountryRequisites />}
      </div>
      <div className={style.container_footer}>
        <Button
          backgroundColor="rgba(255, 255, 255, 1)"
          color="rgba(52, 64, 84, 1)"
          border="1px solid  #D0D5DD"
          padding="12px 20px"
          fontSize="16px"
          lineHeight="24px"
        >
          Отмена
        </Button>
        <Button
          backgroundColor="rgba(68, 76, 231, 1)"
          color="rgba(255, 255, 255, 1)"
          border="1px solid  #444CE7"
          padding="12px 20px"
          fontSize="16px"
          lineHeight="24px"
        >
          Создать контрагента
        </Button>
      </div>
    </div>
  );
};

export default CreateCountry;
