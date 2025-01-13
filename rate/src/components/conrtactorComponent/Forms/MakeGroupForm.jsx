import React, { useState } from "react";
import styles from "../ContractorStyles/Conrtactor.module.css"

export default function MakeGroupForm({setVisible, setPage}){

    function handleCloseModal(){
        setVisible(false);
        setPage(1)
      }

    return( 
    <div>  
        <div className={styles.modal_main}>
        <div className={styles.modal_content}>
            <span className={styles.modal_content_title}>Номер счета</span>
            <input type='text' placeholder="Например, мои поставщики"  className={styles.modal_input}/>
        </div>
        <div className={styles.modal_content}>
          <span className={styles.modal_content_title}>Комментарий</span>
          <textarea type='text' placeholder="Добавьте комментарий к этой группе" className={`${styles.modal_input} ${styles.big_input}`}/>
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