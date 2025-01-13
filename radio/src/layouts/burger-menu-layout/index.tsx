'use client'

import Link from 'next/link'
import cls from './style.module.scss'
import React, { ReactElement } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

type Props = {
  links: {label: string, href: string}[]
  socialMediaLinks: ReactElement
  copyright: ReactElement
  signInLabel: string
  signUpLabel: string
  onClickSignIn: () => void
  onClickSignUp: () => void

}

function BurgerMemuLayout(props: Props) {
  const {} = props

  const pathname = usePathname()

  return (
    <div className={cls.BurgerMemuLayout}>
      <div className={cls.BurgerMemuLayout_auth}>
        <button onClick={props.onClickSignIn}>{props.signInLabel}</button>
        <button onClick={props.onClickSignUp}>{props.signUpLabel}</button>
      </div>
      <div className={cls.BurgerMemuLayout_links}>
      {
        props.links.map(l => (
          <Link key={l.href} className={classNames(cls.BurgerMemuLayout_pageLink, {
            [cls.active]: pathname === l.href
          })} href={l.href}>{l.label}</Link>
        ))
      }
      </div>

      {props.socialMediaLinks && React.cloneElement(props.socialMediaLinks, {
        className: cls.BurgerMemuLayout_socialMedia
      })}
      {props.copyright && React.cloneElement(props.copyright, {
        className: cls.BurgerMemuLayout_copyRight
      })}
    </div>
  )
}

export { BurgerMemuLayout }