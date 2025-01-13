"use client"
import React, {useState, useEffect, useRef}  from 'react'

import styles from "./style.module.scss"
import desktopStyles from "./desktopStyle.module.scss"
import mobileStyles from "./mobileStyle.module.scss"

import RecItemImg from "../../../public/assets/RecItem_img.svg"
import like from "../../../public/assets/like_btn.svg"
import playBtn from "../../../public/assets/play_btn.svg"
import share from "../../../public/assets/share_btn.svg"
import linkImg from "../../../public/assets/link_img.svg"
import copyBtn from "../../../public/assets/copy_text.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, VkIcon } from '../icons'
import { useForeignClickOrFocus } from '@/hooks/use-foreign-click-or-focus'
import { isMobile } from 'mobile-device-detect'
import { ModalCodes, useModals } from '@/services/modal-service'

type TrackItem = {
  authorName: string
  trackName: string
  id: string | number
  imageSrc: string
  share: {
    vk: string,
    instagram: string,
    facebook: string,
    link: string
  }
}

type TrackProps = {
  item: TrackItem
}

export function Track(props: TrackProps){
    const [isShareOpened, setIsShareOpened] = useState(false);
    const [isShareMobileOpened, setIsShareMobileOpened] = useState(false);
    const shareContainerRef = useRef<HTMLDivElement>(null);
    const modals = useModals()


    const inputRef = useRef<HTMLInputElement | null>(null);

    const callbacks = {
      openShare: () => {
        if (isMobile) {
          modals.open({type: ModalCodes.share, extraData: {
            share: props.item.share
          }})
        } else {
          setIsShareOpened(prev => !prev);
        }
      }
    }
    
    const copyPlaceholder = () => {
        const placeholderText = props.item.share.link;
        navigator.clipboard.writeText(placeholderText)
            .then(() => {
                return;
            })
            .catch(err => {
                throw err;
            });
        }

  useForeignClickOrFocus([shareContainerRef], () => setIsShareOpened(false))

    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.img}>
                    <Image src={props.item.imageSrc} fill alt=''/>
                </div>
                <div className={styles.text}>
                    <span className={styles.title}>{props.item.trackName}</span>
                    <span className={styles.author}>{props.item.authorName}</span>
                </div>
                <div className={styles.buttons}>
                    <img src={share.src} style={{width: '24px', height: "24px",cursor: 'pointer'}} onClick={callbacks.openShare}/>
                    <img src={playBtn.src} style={{width: '37.7px', height: "37.7px",cursor: 'pointer'}}/>
                    <img src={like.src} style={{width: '24px', height: "24px",cursor: 'pointer'}}/>
                </div>
                <div className={styles.favorite}>
                    <img src={like.src} style={{width: '24px', height: "24px",cursor: 'pointer'}}/>
                </div>
                {isShareOpened && (<div ref={shareContainerRef} className={desktopStyles.share_window}>
                    <div className={desktopStyles.share_window_inner}>
                        <div className={desktopStyles.share_btns}>
                            <Link href={'/'} target='_blank'><VkIcon size={24}/></Link>
                            <Link href={'/'} target='_blank'><FacebookIcon size={24}/></Link>
                            <Link href={'/'} target='_blank'><InstagramIcon size={24}/></Link>
                        </div>
                        <div className={desktopStyles.share_link}>
                            <input ref={inputRef} type="text" placeholder={props.item.share.link} className={desktopStyles.link} readOnly/>
                            <div className={desktopStyles.link_img}>
                                <Image src={linkImg} alt="" />
                            </div>
                            <div className={desktopStyles.copy_btn}>
                                <button onClick={() => copyPlaceholder()} className={desktopStyles.btn}><Image src={copyBtn} alt="" /></button>
                            </div>
                        </div>
                        <div className={desktopStyles.arrow_open}>
                            <Image alt="" src={"/assets/menu_arrow.svg"}  width={16} height={8}/>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
        
    )
}

export type { TrackItem }