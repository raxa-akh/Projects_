import Link from 'next/link'
import cls from './style.module.scss'
import { ReactElement, cloneElement } from 'react'
import Image from 'next/image'

type Props = {
  footerLinks: ReactElement
  socialMediaLinks: ReactElement
  copyright: ReactElement
  googleStoreLink: ReactElement
  appStoreLink: ReactElement
  footerDocumentsLinks: ReactElement
}

function FooterMobileLayout(props: Props) {
  const {} = props


  return (
    <div className={cls.FooterMobileLayout}>
      {props.footerLinks}
      <div  className={cls.FooterMobileLayout_getApp}>
        {props.googleStoreLink}
        {props.appStoreLink}
      </div>
      <div className={cls.FooterMobileLayout_socialMedia}>
        {props.socialMediaLinks}
      </div>
      {
        props.footerDocumentsLinks && cloneElement(props.footerDocumentsLinks, {
          className: cls.FooterMobileLayout_footerDocumentsLinks
        })
      }
      <div className={cls.FooterMobileLayout_copyRight}>
        <Image
          src={'/assets/Logo.png'}
          height={52}
          width={52}
          alt={'logo'}
        />
        {props.copyright}
      </div>
    </div>
  )
}

export { FooterMobileLayout }