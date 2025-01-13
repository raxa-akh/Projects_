import React, { useState, useEffect } from "react";
import Modal from "../../../../../ui/modal/Modal";
import reject from "../../../../../../assets/reject.svg";
import styles from './ModalDelete.module.css'
import x from "../../../../../../assets/x.svg";

function ModalDelete({ visible, setVisible}) {




  return (
    <div>
      <Modal visible={visible} setVisible={setVisible}>
        <div className={styles.container}>
            <div className={styles.modal_header}>
                <div className={styles.header_info}>
                    <img src={reject} alt=""/>
                    <span className={styles.header_title}>{'Удалить правило'}</span>
                </div>
                <img alt="" style={{cursor: 'pointer'}} onClick={() => setVisible(false)}  src={x}/>
            </div>
            <div className={styles.modal_main}>
                <div className={styles.main_info}>
                    <span className={styles.info_main}>
                    Вы действительно хотите удалить правило?
                    </span>       
                </div>
            </div>
           <div className={styles.modal_footer}>
                <button className={styles.footer_button}>Удалить</button>
            </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDelete;
