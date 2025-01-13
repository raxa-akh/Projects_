import React from 'react';
import cl from './style/editForm.module.css';
import close from '../../../assets/Close.svg';
import Input from '../../../components/ui/input/Input';
import Button from '../../../components/ui/button/Button';

const EditForm = () => {
  return (
    <div className={cl.conteiner} onClick={(e) => e.stopPropagation()}>
      <div className={cl.content_head}>
        <div className={cl.content_head_text_icon}>
          <h1>Редактировать юрлицо </h1>
          <img src={close} alt="close" />
        </div>
      </div>
      <>
        <form className={cl.content_main}>
          <div>
            <div>
              <label>Название</label>
            </div>
            <div className={cl.block_input}>
              <Input type="text" placeholder="Цветы" defaultValue={''} />
            </div>
          </div>
          <div>
            <div>
              <label>Полное название</label>
            </div>
            <div className={cl.block_input}>
              <Input type="text" placeholder="ООО Ромашка" defaultValue={''} />
            </div>
          </div>
          <div className={cl.content_inn_kpp}>
            <div className={cl.block_inn_kpp}>
              <div>
                <label>ИНН</label>
              </div>
              <div className={cl.block_input}>
                <Input type="text" defaultValue={''} />
              </div>
            </div>
            <div className={cl.block_inn_kpp}>
              <div>
                <label>КПП*</label>
              </div>
              <div className={cl.block_input}>
                <Input type="text" defaultValue={''} />
              </div>
            </div>
          </div>
          <div className={cl.frame93}>
            <div className={cl.conteiner_frame93}>
              <div className={cl.conteiner_frame93_input}>
                <div>
                  <label>ФИО директора</label>
                </div>
                <div className={cl.block_input}>
                  <Input type="text" defaultValue={''} />
                </div>
              </div>
              <div className={cl.conteiner_upload}>
                <div className={cl.conteiner_upload_file}>
                  <div className={cl.conteiner_upload_file_frame86}>
                    <span>
                      Подпись
                      <br />
                      формат jpg, png
                    </span>
                    <Button
                      backgroundColor="rgba(255, 255, 255, 1)"
                      color="rgba(52, 64, 84, 1)"
                      border="1px solid var(--gray-300, #D0D5DD)"
                      padding="8px 14px"
                      fontSize="14px"
                      type="button"
                    >
                      Загрузить
                    </Button>
                  </div>
                </div>
                <div className={cl.conteiner_upload_file}>
                  <div className={cl.conteiner_upload_file_frame86}>
                    <span>
                      Печать
                      <br />
                      формат jpg, png
                    </span>
                    <Button
                      backgroundColor="rgba(255, 255, 255, 1)"
                      color="rgba(52, 64, 84, 1)"
                      border="1px solid var(--gray-300, #D0D5DD)"
                      padding="8px 14px"
                      fontSize="14px"
                      type="button"
                    >
                      Загрузить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={cl.conteiner_frame93}>
              <div className={cl.content_frame90}>
                <div className={cl.block_inn_kpp}>
                  <div>
                    <label>ФИО Бухгалтера</label>
                  </div>
                  <div className={cl.block_input}>
                    <Input type="text" defaultValue={''} />
                  </div>
                </div>
                <div className={cl.block_inn_kpp}>
                  <div>
                    <label>Адрес</label>
                  </div>
                  <div className={cl.block_input}>
                    <Input type="text" defaultValue={''} />
                  </div>
                </div>
              </div>
              <div className={cl.conteiner_upload}>
                <div className={cl.conteiner_upload_file}>
                  <div className={cl.conteiner_upload_file_frame86}>
                    <span>
                      Подпись
                      <br />
                      формат jpg, png
                    </span>
                    <Button
                      backgroundColor="rgba(255, 255, 255, 1)"
                      color="rgba(52, 64, 84, 1)"
                      border="1px solid var(--gray-300, #D0D5DD)"
                      padding="8px 14px"
                      fontSize="14px"
                      type="button"
                    >
                      Загрузить
                    </Button>
                  </div>
                </div>
                <div className={cl.conteiner_upload_file}>
                  <div className={cl.conteiner_upload_file_frame86}>
                    <span>
                      Логотип
                      <br />
                      формат jpg, png
                    </span>
                    <Button
                      backgroundColor="rgba(255, 255, 255, 1)"
                      color="rgba(52, 64, 84, 1)"
                      border="1px solid var(--gray-300, #D0D5DD)"
                      padding="8px 14px"
                      fontSize="14px"
                      type="button"
                    >
                      Загрузить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={cl.block_comment}>
            <div>
              <span>Комментарий</span>
            </div>
            <div className={cl.block_textarea}>
              <textarea onClick={(e) => e.stopPropagation()}></textarea>
            </div>
          </div>
        </form>
      </>
      <div className={cl.footer_btn}>
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
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default EditForm;
