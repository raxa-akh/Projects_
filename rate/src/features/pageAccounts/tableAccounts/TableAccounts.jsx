import React, { useState } from 'react';
import more from '../../../assets/more-horizontal.svg';
import style from './style/tableAccounts.module.css';
import archive from '../../../assets/archive1.svg';
import edit from '../../../assets/edit.svg';
import del from '../../../assets/trash-01.svg';
import Modal from '../../../components/ui/modal/Modal';
import EditAccount from '../editAccount/editAccount';
import ArchiveModal from '../archiveModal/ArchiveModal';
import DeleteModal from '../deletAccount/DeleteAccount';
import ConvertModal from '../convertModal/ConvertModal';
import ShiftAccountGroupModal from '../shiftAccountGroupModal/ShiftAccountGroupModal';
import TableSection from './tableDropDown/TableSection';

const TableAccounts = ({ selectedValue }) => {
  const data = [
    {
      id: 1,
      accountName: { name: 'VTB', comment: 'comment' },
      group: 'Группа1',
      initialBalance: '1 222 222',
      currentBalance: '1 222 222',
      type: 'cash',
      requesites: '111111111',
      entities: 'dog',
    },
    {
      id: 4,
      accountName: { name: 'VTB', comment: 'comment' },
      group: 'Группа1',
      initialBalance: '1 222 222',
      currentBalance: '1 222 222',
      type: 'cash',
      requesites: '111111111',
      entities: 'romashka',
    },
    {
      id: 2,
      accountName: { name: 'VTB', comment: 'comment' },
      group: 'Группа2',
      initialBalance: '1 222 222',
      currentBalance: '1 222 222',
      type: 'cash',
      requesites: '111111111',
      entities: 'dog',
    },
    {
      id: 3,
      accountName: { name: 'VTB', comment: 'comment' },
      group: 'Группа2',
      initialBalance: '1 222 222',
      currentBalance: '1 222 222',
      type: 'cash',
      requesites: '111111111',
      entities: 'romashka',
    },
    {
      id: 5,
      accountName: { name: 'VTB', comment: 'comment' },
      group: '',
      initialBalance: '1 222 222',
      currentBalance: '1 222 222',
      type: 'cash',
      requesites: '111111111',
      entities: 'cat',
    },
    {
      id: 6,
      accountName: { name: 'A', comment: 'comment' },
      group: '',
      initialBalance: '1 222 222',
      currentBalance: '1 222 222',
      type: 'cash',
      requesites: '111111111',
      entities: 'cat',
    },
  ];
  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = currentDate.toLocaleDateString('ru-RU');
  const [btn, setBtn] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [archiveModal, setArchiveModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [convertModal, setConvertModal] = useState(false);
  const [shiftAccountGroupModal, setShiftAccountGroupModal] = useState(false);
  const arr = [];
  const handleBtn = (event) => {
    event.preventDefault();
    setBtn((prev) => !prev);
  };
  return (
    <>
      <table className={style.content_table}>
        {arr.length === 0 ? (
          <thead>
            <tr>
              <th className={style.col_1}>
                <div className={style.col}>
                  <input type="checkbox" />
                  <div>Название счета</div>
                </div>
              </th>
              <th className={style.col_2}>
                <div className={style.col}>Группа</div>
              </th>
              <th className={style.col_3}>
                <div className={style.col}>Начальный остаток</div>
              </th>
              <th className={style.col_4}>
                <div className={style.col}>Текущий остаток</div>
              </th>
              <th className={style.col_5}>
                <div className={style.col}>Тип</div>
              </th>
              <th className={style.col_6}>
                <div className={style.col}>Реквизиты</div>
              </th>
              <th className={style.col_7}>
                <div className={style.col}>Юрлицо</div>
              </th>
              <th className={style.col_8}>
                <div className={style.col}></div>
              </th>
            </tr>
          </thead>
        ) : (
          <thead>
            <tr>
              <th colSpan={8}>
                <div className={style.content_render}>
                  <div className={style.content_render_col}>
                    <input type="checkbox" />
                    {arr.length}Выбрано
                  </div>
                  <div className={style.content_render_tool}>
                    <div
                      className={style.content_render_tool_btn}
                      onClick={() => setShiftAccountGroupModal((prev) => !prev)}
                    >
                      <img src={archive} alt="archive" />
                      Поместить в группу
                    </div>
                    <div
                      className={style.content_render_tool_btn}
                      onClick={() => setConvertModal((prev) => !prev)}
                    >
                      <img src={archive} alt="archive" />
                      Конвертировать в контрагента
                    </div>
                    <div
                      className={style.content_render_tool_btn}
                      onClick={() => setArchiveModal((prev) => !prev)}
                    >
                      <img src={archive} alt="archive" />
                      Поместить в архив
                    </div>
                    <div
                      className={style.content_render_tool_btn}
                      onClick={() => setDelModal((prev) => !prev)}
                    >
                      <img src={del} alt="del" />
                      Удалить
                    </div>
                  </div>
                </div>
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        {selectedValue === 'group' || selectedValue === 'entities' ? (
          <TableSection
            selectedValue={selectedValue}
            data={data}
            setArchiveModal={setArchiveModal}
            setEditModal={setEditModal}
            setDelModal={setDelModal}
          />
        ) : (
          <tbody>
            {data.map((el) => (
              <tr key={el.id}>
                <td>
                  <div className={style.row}>
                    <input type="checkbox" />
                    <div>
                      <span className={style.row_text}>
                        {el.accountName.name}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={style.row}>{el.group}</div>
                </td>
                <td>
                  <div className={style.row}>
                    <div>
                      <div className={style.row_text_currrent}>
                        {el.initialBalance}
                      </div>
                      <div>{formattedDate}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={style.row}>
                    <div>
                      <div className={style.row_text_currrent}>
                        {el.currentBalance}
                      </div>
                      <div>{formattedDate}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={style.row}>{el.type}</div>
                </td>
                <td>
                  <div className={style.row}>{el.requesites}</div>
                </td>
                <td>
                  <div className={style.row}>{el.entities}</div>
                </td>
                <td onClick={handleBtn}>
                  {/* <div className={style.btn_row}>
                      <img src={more} alt="..." />
                    </div> */}

                  <div className={style.btn_row}>
                    <img
                      src={archive}
                      alt="archive"
                      onClick={() => setArchiveModal((prev) => !prev)}
                    />
                    <img
                      src={edit}
                      alt="edit"
                      onClick={() => setEditModal((prev) => !prev)}
                    />
                    <img
                      src={del}
                      alt="del"
                      onClick={() => setDelModal((prev) => !prev)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {editModal && (
        <Modal visible={editModal} setVisible={setEditModal}>
          <EditAccount
            visible={archiveModal}
            setVisible={setArchiveModal}
            first={setEditModal}
            visibleDel={delModal}
            setVisibleDel={setDelModal}
          />
        </Modal>
      )}
      {archiveModal && (
        <Modal visible={archiveModal} setVisible={setArchiveModal}>
          <ArchiveModal />
        </Modal>
      )}
      {delModal && (
        <Modal visible={delModal} setVisible={setDelModal}>
          <DeleteModal />
        </Modal>
      )}
      {convertModal && (
        <Modal visible={convertModal} setVisible={setConvertModal}>
          <ConvertModal />
        </Modal>
      )}
      {shiftAccountGroupModal && (
        <Modal
          visible={shiftAccountGroupModal}
          setVisible={setShiftAccountGroupModal}
        >
          <ShiftAccountGroupModal />
        </Modal>
      )}
    </>
  );
};

export default TableAccounts;
