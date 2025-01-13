import React from 'react';
import style from './style/modalOperationXML.module.css';

const ModalOperationXML = () => {
  return (
    <div className={style.container_main}>
      <div>
        <span className={style.container_main_text}>
          Загрузите данные из вашего XML-файла (.xml)
        </span>
      </div>
      <div>
        <span className={style.container_main_text_support}>
          Вы сможете предварительно посмотреть данные перед их
          импортом.Внимание! Вы можете загрузить белорусскую выписку XML (формат
          из подсистемыИнтернет-клиент) в кодировке UTF-8 или ваш XML-файл в
          требуемом формате.
        </span>
      </div>
    </div>
  );
};

export default ModalOperationXML;
