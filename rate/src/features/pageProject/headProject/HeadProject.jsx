import React, { useState } from 'react';
import icon from '../../../assets/Icon.svg';
import plus from '../../../assets/plus.svg';
import CurrentDate from '../../../components/currentDate/CurrentDate';
import Button from '../../../components/ui/button/Button';
import fd from '../../../assets/file_download.svg';
import style from './style/headProject.module.css';
import NewProject from '../newProject/NewProject';
import Modal from '../../../components/ui/modal/Modal';
import CreateGroup from '../createGroup/CreateGroup';

const HeadProject = ({ selectedValue }) => {
  const [dropListProject, setDropListProject] = useState(false);
  const [newProject, setNewProject] = useState(false);
  const [newGroupProject, setNewGroupProject] = useState(false);
  const handleNewProject = () => {
    setDropListProject((prev) => !prev);
    setNewProject((prev) => !prev);
  };
  const handleNewGroup = () => {
    setDropListProject((prev) => !prev);
    setNewGroupProject((prev) => !prev);
  };
  return (
    <div className={style.container_head_status_bar}>
      <div className={style.container_head}>
        <div className={style.container_head_block}>
          <div className={style.container_head_block_text}>
            <h1>Проекты</h1>
            <img src={icon} alt="?" />
          </div>
          <div>
            <CurrentDate />
          </div>
        </div>
        <div className={style.container_head_btn}>
          <Button
            backgroundColor="rgba(68, 76, 231, 1)"
            color="rgba(255, 255, 255, 1)"
            border="1px solid  #444CE7"
            padding="12px 20px"
            fontSize="16px"
            type="button"
            onClick={() => setDropListProject((prev) => !prev)}
          >
            <img src={plus} alt="+" />
            Создать
          </Button>
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
          {dropListProject && (
            <div>
              <div className={style.block_drop_list}>
                <ul className={style.drop_list}>
                  <li onClick={handleNewProject}>Новый проект</li>
                  <li onClick={handleNewGroup}>Новая группа</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={style.container_status_bar}>
        <div className={style.container_status_bar_content}>
          <span className={style.container_status_bar_text}>2 проекта</span>
        </div>
        <div className={style.container_status_bar_content}>
          <span className={style.container_status_bar_name}>Поступления</span>
          <span className={style.container_status_bar_text}>212 212 ₽</span>
        </div>
        <div className={style.container_status_bar_content}>
          <span className={style.container_status_bar_name}>Выплаты</span>
          <span className={style.container_status_bar_text}>8 351 600 ₽</span>
        </div>
        {selectedValue === 'cash' || selectedValue === 'accrual' ? (
          <>
            <div className={style.container_status_bar_content}>
              <span className={style.container_status_bar_name}>Прибыль</span>
              <span className={style.container_status_bar_text__color}>
                200 000
              </span>
              <span className={style.container_status_bar_text__color}>₽</span>
            </div>
            <div className={style.container_status_bar_content}>
              <span className={style.container_status_bar_name}>
                Рентабильность
              </span>
              <span className={style.container_status_bar_text__color}>
                200 000
              </span>
              <span className={style.container_status_bar_text__color}>%</span>
            </div>
          </>
        ) : (
          <div className={style.container_status_bar_content}>
            <span className={style.container_status_bar_name}>
              Денежный поток
            </span>
            <span className={style.container_status_bar_text__color}>
              200 000
            </span>
            <span className={style.container_status_bar_text__color}>₽</span>
          </div>
        )}
      </div>
      {newProject && (
        <Modal visible={newProject} setVisible={setNewProject}>
          <NewProject />
        </Modal>
      )}
      {newGroupProject && (
        <Modal visible={newGroupProject} setVisible={setNewGroupProject}>
          <CreateGroup />
        </Modal>
      )}
    </div>
  );
};

export default HeadProject;
