import React, { useState } from 'react';
import cl from './style/headAccounts.module.css';
import CurrentDate from '../../../components/currentDate/CurrentDate';
import Button from '../../../components/ui/button/Button';
import icon from '../../../assets/Icon.svg';
import plus from '../../../assets/plus.svg';
import Modal from '../../../components/ui/modal/Modal';
import CreateAccount from '../createAccount/CreateAccount';
import CreateGroup from '../createGroup/CreateGroup';

const HeadAccounts = () => {
  const [dropList, setDropList] = useState(false);
  const [newAccountModal, setNewAccountModal] = useState(false);
  const [newGroup, setNewGroup] = useState(false);
  return (
    <>
      <div className={cl.container}>
        <div className={cl.container_content}>
          <div className={cl.content_text}>
            <div className={cl.head}>
              <h1>Мои счета</h1>
              <div>
                <img src={icon} alt="?" />
              </div>
            </div>
            <div>
              <CurrentDate />
            </div>
          </div>
          <div>
            <Button
              backgroundColor="rgba(68, 76, 231, 1)"
              color="rgba(255, 255, 255, 1)"
              border="1px solid  #444CE7"
              padding="12px 20px"
              fontSize="16px"
              type="button"
              onClick={() => setDropList((prev) => !prev)}
            >
              <img src={plus} alt="+" />
              Создать
            </Button>
            {dropList && (
              <div>
                <div className={cl.block_drop_list}>
                  <ul className={cl.drop_list}>
                    <li onClick={() => setNewAccountModal((prev) => !prev)}>
                      Новый счет
                    </li>
                    <li onClick={() => setNewGroup((prev) => !prev)}>
                      Новая группа
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={cl.conteiner_accounts}>
          <div>
            <div className={cl.status_bar}>
              <div className={cl.status_bar_strong}>
                <span>2 счета</span>
              </div>
              <div className={cl.status_bar_current}>
                <span>Текущий остаток:</span>
              </div>
              <div className={cl.status_bar_current_text}>
                <span>1 212 212 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {newAccountModal && (
        <Modal visible={newAccountModal} setVisible={setNewAccountModal}>
          <CreateAccount />
        </Modal>
      )}
      {newGroup && (
        <Modal visible={newGroup} setVisible={setNewGroup}>
          <CreateGroup />
        </Modal>
      )}
    </>
  );
};

export default HeadAccounts;
