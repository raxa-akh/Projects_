import React  from 'react'
import styles from "./RecItem.module.css"
import RecItemImg from "../../../public/assets/RecItem_img.svg"
import like from "../../../public/assets/like_btn.svg"
import playBtn from "../../../public/assets/play_btn.svg"
import share from "../../../public/assets/share_btn.svg"

type RecItem = {
  
}

type RecItemProps = {
  item: RecItem
}

export function RecItem(props: RecItemProps){
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.img}>
                    <img src={RecItemImg.src}/>
                </div>
                <div className={styles.text}>
                    <span className={styles.title}>Life in a bubble</span>
                    <span className={styles.author}>The van</span>
                </div>
                <div className={styles.buttons}>
                    <img src={share.src} style={{width: '24px', height: "24px",cursor: 'pointer'}}/>
                    <img src={playBtn.src} style={{width: '37.7px', height: "37.7px",cursor: 'pointer'}}/>
                    <img src={like.src} style={{width: '24px', height: "24px",cursor: 'pointer'}}/>
                </div>
                <div className={styles.favorite}>
                    <img src={like.src} style={{width: '24px', height: "24px",cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
    )
}