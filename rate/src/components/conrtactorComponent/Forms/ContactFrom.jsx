import React, { useState } from "react";
import styles from "../ContractorStyles/Conrtactor.module.css"
import DropDown from "../Components/DropDown/DropDown";

export default function ContactsForm({setVisible, setPage}){

  function handleCloseModal(){
    setVisible(false);
    setPage(1)
  }

    return( 
    <div>  
        <div className={styles.modal_main}>
        <div className={styles.modal_content}>
          <span className={styles.modal_content_title}>Название</span>
          <input type='text' placeholder="Например, Васильев"  className={styles.modal_input}/>
        </div>
        <div className={styles.modal_content}> 
          <span className={styles.modal_content_title}>Полное название</span>
          <input type='text' placeholder="Например, ООО “Васильев”" className={styles.modal_input}/>
        </div>
        <div className={styles.modal_content}>
          <span className={styles.modal_content_title}>Группа</span>
          <DropDown setPage={setPage} special={true} arrowPos={'95%'} width={"505px"} rightPos={true} place={"Выбериту группу констрагентов"}/>
        </div>
        <div className={`${styles.modal_content} ${styles.modal_content_row}`}>
          <div className={styles.modal_content_items}>
            <span className={styles.modal_content_title}>Доходная статья</span>
            <DropDown width="240px" rightPos={true} place={"Выберите доход"}/>
          </div>
          <div className={styles.modal_content_items}>
            <span className={styles.modal_content_title}>Расходная статья</span>
            <DropDown width="240px" place={'Выберите расход'} rightPos={true}/>
          </div>
        </div>
        <div className={styles.modal_content}>
          <span className={styles.modal_content_title}>Комментарий</span>
          <textarea type='text' placeholder="Пояснение к контрагенту" className={`${styles.modal_input} ${styles.big_input}`}/>
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