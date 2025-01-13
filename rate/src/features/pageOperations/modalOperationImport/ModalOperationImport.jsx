import React, { useState } from 'react';
import style from './style/modalOperationImport.module.css';
import close from '../../../assets/x-close.svg';
import Button from '../../../components/ui/button/Button';
import ModalOperationExtract from './modalOperationExtract/ModalOperationExtract.jsx';
import ModalOperationExcel from './modalOperationExcel/ModalOperationExcel.jsx';
import ModalOperationXML from './modalOperationXML/ModalOperationXML.jsx';
import ModalOperationWildberries from './modalOperationWildberries/ModalOperationWildberries.jsx';

const ModalOperationImport = ({ onClose }) => {
  const [extract, setExtract] = useState(true);
  const [excel, setExcel] = useState(false);
  const [xml, setXml] = useState(false);
  const [wildberries, setWildberries] = useState(false);

  const handleExtract = () => {
    setExtract(true);
    setExcel(false);
    setXml(false);
    setWildberries(false);
  };
  const handleExcel = () => {
    setExtract(false);
    setExcel(true);
    setXml(false);
    setWildberries(false);
  };
  const handleXML = () => {
    setExtract(false);
    setExcel(false);
    setXml(true);
    setWildberries(false);
  };
  const handleWildberries = () => {
    setExtract(false);
    setExcel(false);
    setXml(false);
    setWildberries(true);
  };
  return (
    <div
      className={style.container}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={style.container_header}>
        <div className={style.container_header_title}>
          <h1>Импорт операций</h1>
          <img src={close} alt="close" onClick={onClose} />
        </div>
        <div className={style.container_header_btn}>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(52, 64, 84, 1)"
            border="1px solid #D0D5DD"
            padding="10px 16px"
            fontSize="14px"
            borderRadius="8px 0px 0px 8px"
            lineHeight="20px"
            onClick={handleExtract}
          >
            Выписка
          </Button>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(52, 64, 84, 1)"
            border="1px solid #D0D5DD"
            padding="10px 16px"
            fontSize="14px"
            borderRadius="0px 0px 0px 0px"
            lineHeight="20px"
            onClick={handleExcel}
          >
            Excel
          </Button>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(52, 64, 84, 1)"
            border="1px solid #D0D5DD"
            padding="10px 16px"
            fontSize="14px"
            borderRadius="0px 0px 0px 0px"
            lineHeight="20px"
            onClick={handleXML}
          >
            XML
          </Button>
          <Button
            backgroundColor="rgba(255, 255, 255, 1)"
            color="rgba(52, 64, 84, 1)"
            border="1px solid #D0D5DD"
            padding="10px 16px"
            fontSize="14px"
            borderRadius="0px 8px 8px 0px"
            lineHeight="20px"
            onClick={handleWildberries}
          >
            Wildberries
          </Button>
        </div>
      </div>
      {extract && <ModalOperationExtract />}
      {excel && <ModalOperationExcel />}
      {xml && <ModalOperationXML />}
      {wildberries && <ModalOperationWildberries />}
      <div className={style.container_footer_btn}>
        <Button
          backgroundColor="rgba(68, 76, 231, 1)"
          color="rgba(255, 255, 255, 1)"
          border="1px solid #444CE7"
          padding="12px 20px"
          fontSize="16px"
          borderRadius="8px"
          lineHeight="24px"
        >
          Загрузить операцию
        </Button>
      </div>
    </div>
  );
};

export default ModalOperationImport;
