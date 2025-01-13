import React, { useEffect, useState } from "react";
import styles from "./DropDownStyles/DropDownStyles.module.css"
import arrow from '../../../../assets/down_arrow.svg'
import x from '../../../../assets/x_modal.svg'
import { useRef } from "react";


function DropDown({data = ["Не задано"], place, img = arrow, rightPos = false, width = '320px', arrowPos= '', special = false, setPage}){
    const [value, setValue] = useState();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        if(place){
            setValue(place);
        }
    },[])

    const dropdownRef = useRef(null);
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
        <div ref={dropdownRef} className={styles.container}>
            <div className={styles.inner}>
                <input style={{width: width}} className={rightPos ? `${styles.input_right}` : `${styles.input}`} type="text" placeholder={value} disabled/>
                <img alt="" src={img} className={rightPos ? `${styles.arrow_right}` : `${styles.arrow}`}
                onClick={() => setIsOpen((prev) => !prev)} style={isOpen ? {transform: 'rotate(180deg)', left: arrowPos}: {left: arrowPos}}/>
                <ul className={styles.drop_down_info} style={isOpen? {display: 'block', width: width}:{display: 'none', width: width}}>
                    {special && <li className={styles.spec_li} onClick={() => setPage(3)}>Добавить группу <img alt="add" src={x}/></li>}
                    {data.map(item => <li onClick={() => setValue(item)}>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default DropDown;