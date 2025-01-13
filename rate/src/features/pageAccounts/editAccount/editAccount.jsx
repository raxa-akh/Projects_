import React, { useState } from 'react';
import style from './style/editAccount.module.css';
import Button from '../../../components/ui/button/Button';
import Input from '../../../components/ui/input/Input';
import del from '../../../assets/trash-01-2.svg';
import archive from '../../../assets/archive.svg';
import Modal from '../../../components/ui/modal/Modal';
import ArchiveModal from '../archiveModal/ArchiveModal';
import DeleteAccount from '../deletAccount/DeleteAccount';

const EditAccount = ({
  visible,
  setVisible,
  first,
  visibleDel,
  setVisibleDel,
}) => {
  const [selectOpt, setSelectOpt] = useState('');

  const handleArchive = () => {
    if (first) {
      setVisible(true);
    }
  };
  const handleDelete = () => {
    if (first) {
      setVisibleDel(true);
    }
  };

  const handleOption = (event) => {
    setSelectOpt(event.target.value);
  };
  return (
    <>
      <div
        className={style.block_account}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={style.container_account_head}>
          <div>
            <h1>Редактировать счет</h1>
          </div>
          <div
            className={style.container_account_head_del}
            onClick={handleDelete}
          >
            <img src={del} alt="del" />
            Удалить
          </div>
        </div>

        <form className={style.form_account}>
          <div className={style.form_account_input_block}>
            <div>
              <label>Название</label>
            </div>
            <div className={style.form_account_input}>
              <Input type="text" />
            </div>
          </div>
          <div className={style.frame132}>
            <div className={style.form_account_input_block}>
              <div>
                <label>Группа счетов</label>
              </div>
              <div className={style.form_account_input}>
                <Input list="group" placeholder="Выберите группу" />
                <datalist id="group">
                  <option>Group1</option>
                  <option>Group2</option>
                </datalist>
              </div>
            </div>
            <div className={style.form_account_input_block}>
              <div>
                <label>Юрлицо</label>
              </div>
              <div className={style.form_account_input}>
                <Input list="entities" placeholder="Выберите юрлицо" />
                <datalist id="entities">
                  <option>Romashka</option>
                  <option>Kavkaz</option>
                </datalist>
              </div>
            </div>
          </div>
          <div className={style.frame134}>
            <div className={style.form_account_input_block}>
              <div>
                <label>Тип счета</label>
              </div>
              <div className={style.form_account_input}>
                <select value={selectOpt} onChange={handleOption}>
                  <option value="nal">Наличный</option>
                  <option value="bnal">Безналичный</option>
                </select>
              </div>
            </div>
            <div className={style.form_account_input_block}>
              <div>
                <label>Валюта</label>
              </div>
              <div className={style.form_account_input}>
                <select>
                  <option>RUB</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>
          {selectOpt === 'bnal' && (
            <>
              <div className={style.frame132}>
                <div className={style.form_account_input_block}>
                  <div>
                    <label>Бик</label>
                  </div>
                  <div className={style.form_account_input}>
                    <Input type="text" />
                  </div>
                </div>
                <div className={style.form_account_input_block}>
                  <div>
                    <label>Банк</label>
                  </div>
                  <div className={style.form_account_input}>
                    <Input type="text" />
                  </div>
                </div>
              </div>
              <div className={style.frame132}>
                <div className={style.form_account_input_block}>
                  <div>
                    <label>Расч. счет №</label>
                  </div>
                  <div className={style.form_account_input}>
                    <Input type="text" />
                  </div>
                </div>
                <div className={style.form_account_input_block}>
                  <div>
                    <label>Кор. счет №</label>
                  </div>
                  <div className={style.form_account_input}>
                    <Input type="text" />
                  </div>
                </div>
              </div>
            </>
          )}
          <div className={style.frame135}>
            <div className={style.form_account_input_block}>
              <div>
                <label>Начальный остаток</label>
              </div>
              <div className={style.form_account_input}>
                <Input value={0} />
              </div>
            </div>
            <div className={style.form_account_input_block}>
              <div>
                <label>Дата</label>
              </div>
              <div className={style.form_account_input}>
                <Input type="date" />
              </div>
            </div>
          </div>

          <hr />
          <div className={style.form_account_input_block}>
            <div>
              <label>Комментарий</label>
            </div>
            <div className={style.form_account_input}>
              <Input type="text" />
            </div>
          </div>
        </form>

        <div className={style.footer_block}>
          <div className={style.footer_block_archve} onClick={handleArchive}>
            <img src={archive} alt="archive" />
            Поместить в архив
          </div>
          <div className={style.footer_btn}>
            <Button
              backgroundColor="rgba(255, 255, 255, 1)"
              color="rgba(52, 64, 84, 1)"
              border="1px solid  #D0D5DD"
              padding="12px 20px"
              fontSize="16px"
            >
              Отмена
            </Button>
            <Button
              backgroundColor="rgba(68, 76, 231, 1)"
              color="rgba(255, 255, 255, 1)"
              border="1px solid  #444CE7"
              padding="12px 20px"
              fontSize="16px"
            >
              Создать
            </Button>
          </div>
        </div>
      </div>
      {visible && (
        <Modal visible={visible} setVisible={setVisible}>
          <ArchiveModal setVisible={setVisible} />
        </Modal>
      )}
      {visibleDel && (
        <Modal visible={visibleDel} setVisible={setVisibleDel}>
          <DeleteAccount />
        </Modal>
      )}
    </>
  );
};

export default EditAccount;
