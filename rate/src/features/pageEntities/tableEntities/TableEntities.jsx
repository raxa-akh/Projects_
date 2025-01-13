import React, { useState } from 'react';
import archive from '../../../assets/archive.svg';
import del from '../../../assets/trash-01-2.svg';
import edit from '../../../assets/edit.svg';
import trash from '../../../assets/trash-01.svg';
import cl from './style/tableEntities.module.css';
import Modal from '../../../components/ui/modal/Modal';
import EditForm from '../editForm/EditForm';
import DeleteEntities from '../deletEntities/DeleteEntities';
import ArchiveModal from '../archiveModal/ArchiveModal';

const TableEntities = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'ромашка',
      title1: 'ООО Ромашка',
      INN: '1244412',
      KPP: '111211212',
    },
    {
      id: 2,
      title: 'Кавказ',
      title1: 'ООО Горы',
      INN: '1244412',
      KPP: '111211212',
    },
  ]);
  const [editModal, setEditModal] = useState(false);
  const [deletModal, setDeletModal] = useState(false);
  const [archiveModal, setArchiveModal] = useState(false);

  const arr = [];
  return (
    <>
      <table className={cl.content_table}>
        {arr.length === 0 ? (
          <thead>
            <tr>
              <th className={cl.col_entities_1}>
                <div className={cl.col_one}>
                  <input type="checkbox" />
                  <div>Краткое название</div>
                </div>
              </th>
              <th className={cl.col_entities_2}>
                <div className={cl.col_one}>Полное название</div>
              </th>
              <th className={cl.col_entities_3}>
                <div className={cl.col_one}>ИНН</div>
              </th>
              <th className={cl.col_entities_4}>
                <div className={cl.col_one}>КПП</div>
              </th>
              <th className={cl.col_entities_5}>
                <div className={cl.col_one}></div>
              </th>
            </tr>
          </thead>
        ) : (
          <thead>
            <tr>
              <th>
                <div className={cl.container_render}>
                  <div className={cl.container_render_block}>
                    <input type="checkbox" />
                    {arr.length}Выбрано
                  </div>
                  <div className={cl.tool}>
                    <div
                      className={cl.tool_btn}
                      onClick={() => setArchiveModal((prev) => !prev)}
                    >
                      <img src={archive} alt="archive" />
                      Поместить в архив
                    </div>
                    <div
                      className={cl.tool_btn}
                      onClick={() => setDeletModal((prev) => !prev)}
                    >
                      <img src={del} alt="del" />
                      Удалить
                    </div>
                  </div>
                </div>
              </th>
              <th>
                <div className={cl.container_render}></div>
              </th>
              <th>
                <div className={cl.container_render}></div>
              </th>
              <th>
                <div className={cl.container_render}></div>
              </th>
              <th>
                <div className={cl.container_render}></div>
              </th>
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <td>
                <div className={cl.row_one}>
                  <input type="checkbox" />
                  <div>
                    <span className={cl.text}>{el.title}</span>
                    <br />
                    <span className={cl.support_text}>{el.title1}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className={cl.row_one}>{el.title1}</div>
              </td>
              <td>
                <div className={cl.row_one}>{el.INN}</div>
              </td>
              <td>
                <div className={cl.row_one}>{el.KPP}</div>
              </td>
              <td>
                <div className={cl.row_one}>
                  <img
                    src={edit}
                    alt="icon1"
                    onClick={() => setEditModal((prev) => !prev)}
                  />
                  <img
                    src={trash}
                    alt="icon2"
                    onClick={() => setDeletModal((prev) => !prev)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editModal && (
        <Modal visible={editModal} setVisible={setEditModal}>
          <EditForm />
        </Modal>
      )}
      {deletModal && (
        <Modal visible={deletModal} setVisible={setDeletModal}>
          <DeleteEntities />
        </Modal>
      )}
      {archiveModal && (
        <Modal visible={archiveModal} setVisible={setArchiveModal}>
          <ArchiveModal />
        </Modal>
      )}
    </>
  );
};

export default TableEntities;
