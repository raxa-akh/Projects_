import React, { useEffect, useState, useRef } from "react";
import styles from "./DropDownStyles/DropDownStyles.module.css"
import arrow from '../../../assets/down_arrow.svg'
import x from '../../../assets/x_modal.svg'


function DropDown({data = ["Не задано"], 
    place, rightPos = false, widthAll = '320px', 
    widthUl ='', arrowPos= '', special = false, setPage,
    borderLeft='',borderRight ='', borderRadius ='', height = '44px', border = ''}){
    const [value, setValue] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(()=>{
        if(place){
            setValue(place);
        }
    },[])

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return(
        <div className={styles.container}>
            <div ref={dropdownRef} onClick={() => setIsOpen(() =>!isOpen)} className={isOpen ? `${styles.inner} ${styles.inner_open}` : `${styles.inner}`} >
                <input style={{width: widthAll, height: height}} className={rightPos ? `${styles.input_right}` 
                : `${styles.input}`} 
                type="text" placeholder={value} readOnly/>
                <img alt="" src={arrow} 
                className={rightPos ? `${styles.arrow_right}` : `${styles.arrow}`}
                onClick={() => setIsOpen((prev) => !prev)} style={isOpen ? {transform: 'rotate(180deg)', left: arrowPos}: {left: arrowPos}}/>
                <ul className={styles.drop_down_info} style={isOpen? {display: 'block', width: widthUl}:{display: 'none', width: widthUl}}>
                    {special && <li className={styles.spec_li} onClick={() => setPage(3)}>Добавить группу <img alt="add" src={x}/></li>}
                    {data.map(item => <li onClick={() => setValue(item.label)}>{item.label}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default DropDown;