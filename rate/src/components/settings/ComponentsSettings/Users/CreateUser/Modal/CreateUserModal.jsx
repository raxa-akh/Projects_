import React, { useState, useEffect, useRef } from "react";
import Modal from "../../../../../ui/modal/Modal";
import ContactsForm from "../Forms/ContactsForm";
import UserRights from "../Forms/UserRights";
import AccessSettings from "../Forms/AccessSettings";
import CreateSupport from "../Forms/CreateSupport";
import CreateConsultant from "../Forms/CreateConsultant";
import bottomStrelka from "../../../../../../assets/bottomStrelka.svg";
import "../../../Styles/mainModal.css";
import x from "../../../../../../assets/x_modal.svg";

const options = [
  'Создать пользователя', 
  'Создать пользователя', 
  'Создать пользователя', 
  'Создать пользователя', 
  "Добавить специалиста технической поддержки",
  "Добавить консультанта",
  
]

function ModalCreateUser() {
  const [visible, setVisible] = useState(false);
  const [moreUsers, setMoreUsers] = useState(false);
  const [page, setPage] = useState({"contactFrom" : true});
  const [numPage, setNumPage] = useState(1);
  const [navig, setNavig] = useState(false);

  const handleClickOpenModal = () => {
    setNumPage(1);
    setVisible((prev) => !prev);
    setNavig(true);
  };
  const handleOpenMore = () => {
      setMoreUsers(prev => !prev);
  }
  // useEffect(()=>{
  //   if(numPage===2){
  //     setPage(prev => ({...page, 'userRights' : !prev}));
  //   }
  //   if(numPage===3){
  //     setPage(prev => ({...page, 'accessSettings' : !prev}));
  //   }

  //   if(visible===false){
  //     setPage({"contactFrom" : true})
  //   }
  // },[numPage, visible])

  const handleClickOpenMoreModal = (page) => {
      setNumPage(page);
      setNavig(false);
      setVisible((prev) => !prev);
      setMoreUsers(prev => !prev);
  };
  
  // const toggleDropdown = () => {
  //   setMoreUsers(!moreUsers);
  // };
  const dropdownRef = useRef(null);


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMoreUsers(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="open_modal_create_user">
        <button
          onClick={() => handleClickOpenModal()}
          className="btn_create_user"
        >
          Создать пользователя
        </button>
        <button
          className="btn_strelka_bottom"
          onClick={() => handleOpenMore()}
        >
          <img alt="strelka" src={bottomStrelka} style={moreUsers ? {transform: 'rotate(180deg)', transition: 'transform 0.2s ease'} : {}} />
        </button>
        <div ref={dropdownRef} className={moreUsers ? 'btn_create_user_options' : 'btn_create_user_options non_visible'}>
            <span onClick={() => handleClickOpenMoreModal(4)} className='create_support_btn'>Добавить спецалиста службы поддержки</span>
            <span onClick={() => handleClickOpenMoreModal(5)} className='create_consul_btn'>Добавить консультанта</span>
        </div>
      </div>
      <Modal visible={visible} setVisible={setVisible} width={"650px"}>
        <div
          onClick={(event) => event.stopPropagation()}
          className="container_modal"
        >
          <div className="modal_header_create_user">
            <div className="header_intro">
              <h2>{options[numPage]}</h2>
            <img
              alt="close modal"
              src={x}
              onClick={() => handleClickOpenModal()}
              style={{ cursor: "pointer" , marginRight: '10px'}}
            />
            </div>
            {navig && (<div style={{width: '100%'}} className="change_form_btns">
              <button
                onClick={() => setNumPage(1)}
                className={"left_btn"}
              >
                Контакты
              </button> 
              <button
                onClick={() => setNumPage(2)}
                className={page.userRights ?"middle_btn" : 'middle_btn disabled_btn'}
                disabled={!page.userRights}
              >
                Права пользователя
              </button>
              <button
                onClick={() => setNumPage(3)}
                className={page.accessSettings ? "right_btn" : 'right_btn disabled_btn'}
                disabled={!page.accessSettings}
              >
                Настройки доступа
              </button>
            </div> )}
          </div>
          <div>
          </div>
        </div>
            {numPage === 1 && <ContactsForm setNumPage={setNumPage} page={page} setPage={setPage}/>}
            {numPage === 2 && <UserRights setNumPage={setNumPage} page={page} setPage={setPage}/>}
            {numPage === 3 && <AccessSettings setNumPage={setNumPage} page={page} setPage={setPage}/>}
            {numPage === 4 && <CreateSupport setNumPage={setNumPage} page={page} setPage={setPage}/>}
            {numPage === 5 && <CreateConsultant setNumPage={setNumPage} page={page} setPage={setPage}/>}
      </Modal>
    </div>
  );
}

export default ModalCreateUser;
