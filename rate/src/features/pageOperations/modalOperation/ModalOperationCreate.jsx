import React, { useState } from 'react';
import style from './style/modalOperation.module.css';
import close from '../../../assets/x-close.svg';
import Button from '../../../components/ui/button/Button';
import ModalOperationEntrance from './modalOperationEntrance/ModalOperationEntrance';
import ModalOperationPayments from './modalOperationPayments/ModalOperationPayments';
import ModalOperationMoving from './modalOperationMoving/ModalOperationMoving';
import ModalOperationAccural from './modalOperationAccural/ModalOperationAccural';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const ModalOperationCreate = ({ onClose }) => {
  const [entrance, setEntrance] = useState(true);
  const [payments, setPayments] = useState(false);
  const [moving, setMoving] = useState(false);
  const [accural, setAccural] = useState(false);

  const handleEntrance = () => {
    setEntrance(true);
    setPayments(false);
    setMoving(false);
    setAccural(false);
  };
  const handlePayments = () => {
    setPayments(true);
    setEntrance(false);
    setMoving(false);
    setAccural(false);
  };
  const handleMoving = () => {
    setPayments(false);
    setEntrance(false);
    setMoving(true);
    setAccural(false);
  };
  const handleAccural = () => {
    setPayments(false);
    setEntrance(false);
    setMoving(false);
    setAccural(true);
  };

  return (
    <>
      <div
        className={style.container}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={style.container_header}>
          <div className={style.container_header_title}>
            <h1>Создание операции</h1>
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
              onClick={handleEntrance}
            >
              Поступление
            </Button>
            <Button
              backgroundColor="rgba(255, 255, 255, 1)"
              color="rgba(52, 64, 84, 1)"
              border="1px solid #D0D5DD"
              padding="10px 16px"
              fontSize="14px"
              borderRadius="0px 0px 0px 0px"
              lineHeight="20px"
              onClick={handlePayments}
            >
              Выплата
            </Button>
            <Button
              backgroundColor="rgba(255, 255, 255, 1)"
              color="rgba(52, 64, 84, 1)"
              border="1px solid #D0D5DD"
              padding="10px 16px"
              fontSize="14px"
              borderRadius="0px 0px 0px 0px"
              lineHeight="20px"
              onClick={handleMoving}
            >
              Перемещение
            </Button>
            <Button
              backgroundColor="rgba(255, 255, 255, 1)"
              color="rgba(52, 64, 84, 1)"
              border="1px solid #D0D5DD"
              padding="10px 16px"
              fontSize="14px"
              borderRadius="0px 8px 8px 0px"
              lineHeight="20px"
              onClick={handleAccural}
            >
              Начисление
            </Button>
          </div>
        </div>
        {entrance && <ModalOperationEntrance options={options} />}
        {payments && <ModalOperationPayments />}
        {moving && <ModalOperationMoving />}
        {accural && <ModalOperationAccural />}
        <div className={style.container_footer}>
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
              Создать операцию
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalOperationCreate;
