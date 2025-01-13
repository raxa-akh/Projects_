import React, { useState, useEffect } from "react";
import StartConnectForm from "../Forms/StartConnectForm";
import SettingsAccount from "../Forms/SettingsAccount";
import Modal from "../../../../ui/modal/Modal";
import success from "../../../../../assets/bank_success.svg";
import reject from "../../../../../assets/reject.svg";

import styles from './ModalFinish.module.css'
import x from "../../../../../assets/x.svg";

function ModalFinish({ visible, setVisible, page = 1 }) {
  const [numPage, setNumPage] = useState(1);



  return (
    <div>
      <Modal visible={visible} setVisible={setVisible}>
        <div className={styles.container}>
            <div style={page === 2 ? {borderRadius: '24px 24px 0 0'} : {borderRadius: '0'}} className={styles.modal_header}>
                <div className={styles.header_info}>
                    <img src={page ===1 ? success : reject} alt=""/>
                    <span className={styles.header_title}>{page ===1 ? 'Поздравляем' : 'Ошибка'}</span>
                </div>
                <img alt="" style={{cursor: 'pointer'}} onClick={() => setVisible(false)}  src={x}/>
            </div>
            <div style={page === 2 ? {borderRadius: '0 0 24px 24px'} : {borderRadius: '0'}} className={styles.modal_main}>
                <div className={styles.main_info}>
                    <span className={styles.info_main}>
                        {page === 1 ? `Операции из вашего банка успешно 
                        загружены, а последующие буду загружаться в ДИОК.Финанс.` : `Во время интеграции вашего банка произошла
                         ошибка, попробуйте еще раз или обратитесь за помощью.`} 
                    </span><br/>
                    {page === 1 && <span className={styles.info_more}>54 операции / из 1024 операций</span>}
                </div>
            </div>
            {page === 1 && <div className={styles.modal_footer}>
                <button className={styles.footer_button}>Перейти в операции</button>
            </div>}
        </div>
      </Modal>
    </div>
  );
}

export default ModalFinish;
