import React, { useState } from "react";
import styles from "../ContractorStyles/Conrtactor.module.css"

export default function PayForm({setVisible, setPage}){

    function handleCloseModal(){
        setVisible(false);
        setPage(1)
      }

    return( 
    <div>  
        <div className={styles.modal_main}>
            <div className={`${styles.modal_content} ${styles.modal_content_row}`}>
                <div className={styles.modal_content_items}>
                    <span className={styles.modal_content_title}>ИНН</span>
                    <input type='text' style={{width: '240px'}} placeholder="Укажите ИНН"  className={styles.filter_input}/>
                </div>
                <div className={styles.modal_content_items}>
                    <span className={styles.modal_content_title}>КПП</span>
                    <input type='text' style={{width: '250px'}} placeholder="Укажите КПП"  className={styles.filter_input}/>
                </div>
        </div>
        <div className={styles.modal_content}>
            <span className={styles.modal_content_title}>Номер счета</span>
            <input type='text' placeholder="Укажите номер счета"  className={styles.modal_input}/>
        </div>
      </div>
      <div class={styles.modal_footer}>
      <div className={styles.modal_footer_buttons}>
        <button onClick={() => handleCloseModal()} className={styles.footer_button_close}>Отменить</button>
        <button className={styles.footer_button}>Создать контрагента</button>
      </div>
    </div>
</div> 
      )
}