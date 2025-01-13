import Modal from "../../../../ui/modal/Modal";
import style from './SecurityModal.module.css'
import qrCode from '../../../../../assets/qrcode.svg'
import inputImg from '../../../../../assets/input_img.svg'
import Yandex from '../../../../../assets/yandex.svg'
function SecurityModal({visible, setVisible, openModal}){
    return(
        <Modal visible={visible} setVisible={setVisible}>
            <div className={style.modal_container}>
                <div className={style.modal_header}>
                    <div className={style.header_title}>
                        <h2>Как подключить?</h2>
                    </div>
                </div>

                <div className={style.modal_main}>
                    <div className={style.main_img}>
                        <img
                            src={qrCode}
                            alt="QrCode"
                        />

                        <img
                            src={Yandex}
                            alt="Yandex"
                            style={{width: "35%"}}
                        />
                    </div>

                    <div className={style.main_info}>
                        <ol className={style.info_list}>
                            <li>Установите приложение Яндекс Ключ на свой смартфон</li>
                            <li>Откройте приложение, приложение предложит навести камеру на QR-код</li>
                            <li>Выберите «Сканировать штрихкод» и отсканируйте указанный код</li>
                        </ol>
                    </div>

                    <div className={style.main_inputs}>
                        <form>
                            <div className={style.inputs_info}>
                            Или введите данные, указанные ниже в вашем приложении Яндекс Ключ:
                            </div>
                            <div className={style.inputs_input}>
                                <div className={style.inputs_inner}>
                                    <input className={style.input} placeholder="example@com" type='email' required/>
                                    <img src={inputImg} alt='input' className={style.input_img}/>
                                </div>
                                 <div className={style.inputs_inner}>
                                    <input style={{width: '450px'}} className={style.input} placeholder="Уникальный токен" type='text' required/>
                                    <img src={inputImg} alt='input' className={style.input_img}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={style.modal_footer}>
                    <div className={style.buttons}>
                        <button className={`${style.button} ${style.button_white}`} onClick={openModal}>Отмена</button>
                        <button className={`${style.button}`}>Подключить</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default SecurityModal;