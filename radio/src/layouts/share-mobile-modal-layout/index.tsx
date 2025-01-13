import { MouseEvent, ReactNode, useEffect, useRef } from "react";
import classNames from "classnames";
import { ShareMobileModalLayoutProps } from "./type";
import cls from  './style.module.scss';
import Link from "next/link";
import { FacebookIcon, InstagramIcon, VkIcon } from "@/components/icons";
import Image from "next/image";

type Props = {
  className?: string
  waiting?: boolean
  share?: {
    vk: string,
    instagram: string,
    facebook: string,
    link: string
  }
}

function ShareMobileModalLayout(props: ShareMobileModalLayoutProps & Props) {

  const ref = useRef<HTMLDivElement>(null)

  const callbacks = {
    onClose: (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === ref.current) {
        props.onClose()
      }
    }
  }

  const inputRef = useRef<HTMLInputElement | null>(null);

    const copyPlaceholder = () => {
        const placeholderText = props.share?.link || '';
        navigator.clipboard.writeText(placeholderText)
            .then(() => {
                return;
            })
            .catch(err => {
                throw err;
            });
        }

  useEffect(() => {
    document.body.classList.add(cls.overflowHidden)

    return () => {
      document.body.classList.remove(cls.overflowHidden)
    }
  })

  return (
    <div 
      className={classNames(
        cls.ShareMobileModalLayout, 
        props.className,
        {
          [cls.background]: props.background
        }
      )}
      onClick={callbacks.onClose}
    >
      <div 
        className={cls.ShareMobileModalLayout_scroll}
        ref={ref}
        onClick={callbacks.onClose}
      >

        <div className={
          classNames(
            cls.ShareMobileModalLayout_frame,
          )
        }>
          <div className={classNames(cls.ShareMobileModalLayout_content, {
            [cls.center]: true
          })}>
              <div className={cls.share_btns}>
                  <Link href={props.share?.vk || ''} target='_blank'><VkIcon size={40}/></Link>
                  <Link href={props.share?.facebook || ''} target='_blank'><FacebookIcon size={40}/></Link>
                  <Link href={props.share?.instagram || ''} target='_blank'><InstagramIcon size={40}/></Link>
              </div>
              <div className={cls.share_link}>
                  <input ref={inputRef} type="text" placeholder={props.share?.link} className={cls.link} readOnly/>
                  <div className={cls.link_img}>
                      <Image src={'/assets/link_img.svg'} width={20} height={20} alt="" />
                  </div>
                  <div className={cls.copy_btn}>
                      <button onClick={() => copyPlaceholder()} className={cls.btn}>
                        <Image src={'/assets/copy_text.svg'} width={20} height={20} alt="" />
                      </button>
                  </div>
              </div>
              <div className={cls.arrow_open}>
                <Image alt="" src={"/assets/menu_arrow.svg"}  width={16} height={8}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export { ShareMobileModalLayout }
