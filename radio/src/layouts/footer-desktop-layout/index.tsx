"use client"
import { ReactElement, cloneElement } from 'react'
import cls from './style.module.scss'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

type Props = {
  footerLinks: ReactElement
  socialMediaLinks: ReactElement
  copyright: ReactElement
  googleStoreLink: ReactElement
  appStoreLink: ReactElement
  footerDocumentsLinks: ReactElement
}

function FooterDesktopLayout(props: Props) {
  const {} = props

  const isBigScreen = useMediaQuery({minWidth: 1444})

  return (
    <>
      <div className={cls.FooterDesktopLayout_top}>
        <div  className={cls.FooterDesktopLayout_footerLinks}>
          {props.footerLinks}
        </div>
        <div className={cls.FooterDesktopLayout_getApp}>
          {props.googleStoreLink}
          {props.appStoreLink}
        </div>
      </div>
      <div className={cls.FooterDesktopLayout_bottom}>
        <div className={cls.FooterDesktopLayout_copyRight}>
          <Image
            src={'/assets/Logo.png'}
            height={isBigScreen ? 80 : 60}
            width={isBigScreen ? 80 : 60}
            alt={'logo'}
          />
          {props.copyright}
        </div>

        {props.footerDocumentsLinks && cloneElement(props.footerDocumentsLinks, {
          className: cls.FooterDesktopLayout_footerDocuments
        })}

        {props.socialMediaLinks && cloneElement(props.socialMediaLinks, {
          className: cls.FooterDesktopLayout_social
        })}
      </div>
    </>
  )
}

export { FooterDesktopLayout }
