import React from 'react';
import fd from '../../../assets/file_download.svg';
import Button from '../../../components/ui/button/Button';
import icon from '../../../assets/Icon.svg';
import style from './style/headReports.module.css';

const HeadReports = () => {
  return (
    <div className={style.container}>
      <div className={style.container_title_head}>
        <div className={style.container_title_head_text}>
          <h1>Отчеты о движениее денежных средств</h1>
          <img src={icon} alt="?" />
        </div>
        <div>RUB</div>
      </div>
      <Button
        backgroundColor="rgba(68, 76, 231, 1)"
        color="rgba(255, 255, 255, 1)"
        border="1px solid  #444CE7"
        padding="12px 20px"
        fontSize="16px"
        type="button"
      >
        <img src={fd} alt="download" />
        .xls
      </Button>
    </div>
  );
};

export default HeadReports;
