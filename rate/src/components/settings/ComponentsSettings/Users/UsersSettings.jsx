import React, { useEffect, useState, useRef } from "react";
import styles from "./tableSettings.module.css";
import './muiStyles.css'
import { testData } from "./data";
import burger from "../../../../assets/burger.svg";
import filtImg from "../../../../assets/filtImg.svg";
import backStrelka from "../../../../assets/backStrelka.svg";
import forwardStrelka from "../../../../assets/forwardStrelka.svg";
import ModalCreateUser from "./CreateUser/Modal/CreateUserModal";
import { IconButton, Menu, MenuItem } from "@mui/material";

const filt_obj = {'Email': false,'Роль': false,'ФИО': false,'Статус': false,'Последний вход': false,'Дата создания': false,}

function UsersSettings() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({...filt_obj});
  const [currentItems, setCurrentItems] = useState([]); 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [sortDirection, setSortDirection] = useState(null);
  const [showOptions, setShowOptions] = useState(null);

  

  const toggleSortDirection = (key) => {
    if (sortConfig.key === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortDirection('asc');
    }
  };


  const itemsPerPage = 8;

  const handleClickStepForward = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClickStepBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pages = Math.ceil(testData.length / itemsPerPage);
  const pagesList = []
  for(let i = 1; i <=pages; i++){
    pagesList.push(i)
  }
  const halfLength = Math.floor(pagesList.length/2);
  let leftList = [];
  let rightList = [];
  if(pagesList.length >= 6){
    leftList = pagesList.slice(0,3);
    rightList = pagesList.slice(pagesList.length-3, pagesList.length)
  }else{
    leftList = pagesList.slice(0, halfLength);
    rightList = pagesList.slice(halfLength+1, pagesList.length);
  }
  console.log(leftList, rightList)
  
  useEffect(()=>{
    setCurrentItems(testData.slice(indexOfFirstItem, indexOfLastItem));
    setFilter({...filt_obj})
  },[currentPage])
 
  
  function handleChangeFilter(filt){
    if (filter[filt]){
      setCurrentItems([...currentItems.sort((a,b) =>b[filt].localeCompare(a[filt]))]);
      setFilter(() => ({...filt_obj, [filt]: false}));
    }else{
    setCurrentItems([...currentItems.sort((a,b) =>a[filt].localeCompare(b[filt]))]);
    setFilter(() => ({...filt_obj, [filt]: true}));
    }
    toggleSortDirection(filt);
    setSortConfig({ key: filt, direction: sortDirection });
  }

  function handleMoreOptions(e){
    setShowOptions(e)
    console.log(e)
  }

  const dropdownRef = useRef(null);


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className={styles.main_users_settings}>
      <div>
        <ModalCreateUser />
      </div>
      <div className={styles.table_container}>
        <table className={styles.users_table}>
          <thead className={styles.head_table}>
            <tr>
              <td onClick={() => handleChangeFilter('Email')} className={styles.table_head_email} style={{width: '21%'}}>
                <div className={styles.td_inner}>
                  <span style={sortConfig.key === 'Email'? {color: '#101828'} : {color: '#667085'}}>Email</span>
                  {sortConfig.key === 'Email' && (<img style={sortDirection==='desc'? {transform: 'rotate(180deg)'} : {}} alt='arrow' src={filtImg}/>)}
                </div> 
              </td>
              <td onClick={() => handleChangeFilter('Роль')} className={styles.table_head_role} style={{width: '10%'}}>
                <div className={styles.td_inner}>
                  <span style={sortConfig.key === 'Роль'? {color: '#101828'} : {color: '#667085'}}>Роль</span>
                  {sortConfig.key === 'Роль' && (<img style={sortDirection==='desc'? {transform: 'rotate(180deg)'} : {}} alt='arrow' src={filtImg}/>)}
                </div> 
              </td>
              <td onClick={() => handleChangeFilter('ФИО')} className={styles.table_head_name} style={{width: '36%'}}>
                <div className={styles.td_inner}>
                  <span style={sortConfig.key === 'ФИО'? {color: '#101828'} : {color: '#667085'}}>ФИО/Должность</span>
                  {sortConfig.key === 'ФИО' && (<img style={sortDirection==='desc'? {transform: 'rotate(180deg)'} : {}} alt='arrow' src={filtImg}/>)}
                </div> 
              </td>
              <td onClick={() => handleChangeFilter('Статус')} className={styles.table_head_status} style={{width: '8%'}}>
                <div className={styles.td_inner}>
                  <span style={sortConfig.key === 'Статус'? {color: '#101828'} : {color: '#667085'}}>Статус</span>
                  {sortConfig.key === 'Статус' && (<img style={sortDirection==='desc'? {transform: 'rotate(180deg)'} : {}} alt='arrow' src={filtImg}/>)}
                </div> 
              </td>
              <td onClick={() => handleChangeFilter('Последний вход')} className={styles.table_head_lastSeen} style={{width: '11%'}}>
                <div className={styles.td_inner}>
                  <span style={sortConfig.key === 'Последний вход'? {color: '#101828'} : {color: '#667085'}}>Последний вход</span>
                  {sortConfig.key === 'Последний вход' && (<img style={sortDirection==='desc'? {transform: 'rotate(180deg)'} : {}} alt='arrow' src={filtImg}/>)}
                </div> 
              </td>
              <td onClick={() => handleChangeFilter('Дата создания')} className={styles.table_head_created} style={{width: '9%'}}>
                <div className={styles.td_inner}>
                  <span style={sortConfig.key === 'Дата создания'? {color: '#101828'} : {color: '#667085'}}>Дата создания</span>
                  {sortConfig.key === 'Дата создания' && (<img style={sortDirection==='desc'? {transform: 'rotate(180deg)'} : {}} alt='arrow' src={filtImg}/>)}
                </div> 
                </td>
              <td className={styles.table_head_options} style={{width: '4%'}}></td>
            </tr>
          </thead>
          <tbody className={styles.body_table}>
            {currentItems.map((el, index) => (
              <tr key={el['id']} style={{height: '5%'}} className={styles.table_row}>
                <td className={styles.table_email}>{el['Email']}</td>
                <td className={styles.table_role}>{el['Роль']}</td>
                <td className={styles.table_name}>{el["ФИО"]}<br/><span>{el['Должность']}</span></td>
                <td className={el['Статус']=== 'активный' ? `${styles.table_status} ${styles.table_succsess}`: `${styles.table_status}`}><span>{el['Статус']}</span></td>
                <td className={styles.table_lastSeen}>{el["Последний вход"]}</td>
                <td className={styles.table_created}>{el["Дата создания"]}</td>
                <td className={styles.table_options}>
                  <div style={{ float: "right" }}>
                    {/* <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleMenuClick}
                    >
                      <img src={burger} alt="burger" style={{ width: 16 }} />
                    </IconButton >
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      // classes={styles.menu}
                    >
                      <MenuItem onClick={handleMenuClose}>
                        Редактировать
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        Добавить в архив
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        Копировать настройки доступа
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        Скопировать API
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        Отправить приглашение
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>Удалить</MenuItem>
                    </Menu> */}
                    <div className={styles.container_options}>
                      <img 
                        src={burger} alt="" 
                        onClick={() => handleMoreOptions(el['id'])}/>
                      <div ref={dropdownRef} className={showOptions === el['id'] ? `${styles.options}` : `${styles.options} ${styles.non_visible}`}>
                        <span className={styles.option_title}>Редактировать</span>
                        <span className={styles.option_title}>Добавить в архив</span>
                        <span className={styles.option_title}>Копировать настройки доступа</span>
                        <span className={styles.option_title}>Скопировать API</span>
                        <span className={styles.option_title}>Отправить приглашение</span>
                        <span className={styles.option_title}>Удалить</span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
            <div>
              <button
                className={styles.back_btn}
                onClick={() => handleClickStepBack()}
                disabled={currentPage === 1}
                >
                  <img alt="back-strelka" src={backStrelka} />
                  Назад
              </button>
            </div>
            <div className={styles.find_buttons}>
              {leftList.map(item => 
                <button style={currentPage === item ? {color:'#444CE7', backgroundColor: '#EEF4FF'} : {color:'#667085', backgroundColor: '#ffffff'}}
                onClick={() => setCurrentPage(item)} 
                className={styles.find_button}>
                {item}
                </button>)}
              <span>...</span>  
              {rightList.map(item => 
                <button style={currentPage === item ? {color:'#444CE7', backgroundColor: '#EEF4FF'} : {color:'#667085', backgroundColor: '#fff'}}
                onClick={() => setCurrentPage(item)} 
                className={styles.find_button}>
                {item}
                </button>)}
            </div>
            <div>
              <button
                className={styles.forward_btn}
                onClick={() => handleClickStepForward()}
                disabled={indexOfLastItem >= testData.length}
                >
                  Вперед
                <img alt="forward-strelka" src={forwardStrelka} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default UsersSettings;
