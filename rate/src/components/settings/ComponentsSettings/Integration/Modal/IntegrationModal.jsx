import React, { useState, useEffect } from "react";
import StartConnectForm from "../Forms/StartConnectForm";
import SettingsAccount from "../Forms/SettingsAccount";
import Modal from "../../../../ui/modal/Modal";
import vtb from "../../../../../assets/vtb.svg";
import tinkof from "../../../../../assets/tinkof.svg";
import sberbank from "../../../../../assets/sberbank.svg";
import "../../Styles/mainModal.css";
import x from "../../../../../assets/x.svg";

function IntegrationModal({ bank, visible, setVisible, openModal }) {
  const [page, setPage] = useState("start");
  const [numPage, setNumPage] = useState(1);
  console.log(page)

  const handleClickOpenPage = (page) => {
    setPage(page);
  };
  console.log(bank);
  let bankIcon;
  let bankName;
  switch (bank) {
    case "tinkof":
      bankIcon = tinkof;
      bankName = "Тинькофф Банк";
      break;
    case "vtb":
      bankIcon = vtb;
      bankName = "ВТБ Банк";
      break;
    case "sberbank":
      bankIcon = sberbank;
      bankName = "СберБанк";
      break;
    default:
      bankIcon = null;
  }

  useEffect(() =>{
    if (numPage===1){
      setPage("start")
    }else{
      setPage("userRights")
    }
  },[numPage])

  return (
    <div>
      <Modal visible={visible} setVisible={setVisible}>
        <div className="container_modal">
          <div className="modal_header">
            <div className="header_bank_modal">
              <div className="header_info">
                <img alt="bank_logo" src={bankIcon} className="bank_logo" />
                <h3 className="bank_name">{bankName}</h3>
              </div>
              <img
                alt="close modal"
                src={x}
                onClick={() => openModal()}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="change_form_btns">
              <button
                onClick={() => handleClickOpenPage("start")}
                className={'left_btn'}
                disabled={page !== "start"}
              >
                Начало подключения
              </button>
              <button
                onClick={() => handleClickOpenPage("userRights")}
                className={
                   page === 'userRights' ? `middle_btn` : `middle_btn disabled_btn`
                }
                disabled={page !== "userRights"}
              >
                Авторизация в банке
              </button>
              <button
                onClick={() => handleClickOpenPage("accessSettings")}
                className={
                  page === 'accessSettings' ? `right_btn` : `right_btn disabled_btn`
                }
                disabled={page !== "accessSettings"}
              >
                Настройка счетов
              </button>
            </div>
          </div>
          {numPage === 1 && (
            <StartConnectForm setNumPage={setNumPage} bankName={bankName} />
          )}
          {numPage === 2 && <SettingsAccount setNumPage={setNumPage} />}
        </div>
      </Modal>
    </div>
  );
}

export default IntegrationModal;
