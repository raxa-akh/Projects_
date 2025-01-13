import React from 'react';
import style from './style/modalOperationWildberries.module.css';

const ModalOperationWildberries = () => {
  return (
    <div className={style.container_main}>
      <div>
        <div>
          <span className={style.container_main_text}>
            Подключите интеграцию с Wildberries
          </span>
        </div>
        <div>
          <span className={style.container_main_text_support}>
            Вы сможете предварительно посмотреть данные перед их импортом.
          </span>
        </div>
      </div>
      <div className={style.container_main_text_support_wild}>
        <span className={style.container_main_text_support}>
          Wildberries не передает данные о трех комиссиях: хранение, приемка и
          прочие удержания. После подключения интеграции, здесь будет доступна
          загрузка «Еженедельного отчета», чтобы вы могли добавить эти расходы.
        </span>
      </div>
    </div>
  );
};

export default ModalOperationWildberries;
