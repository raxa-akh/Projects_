import { ReactElement } from 'react'
import cls from './style.module.scss'
import Link from 'next/link'

type SocialLink = {icon: ReactElement, href: string}

type Props = {
  socialLinks: SocialLink[]
  className?: string
}

function SocialMediaLinks(props: Props) {
  const {} = props

  return (
    <div className={props.className}>
      <div className={cls.SocialMediaLinks_socialMedia}>
      {
        props.socialLinks.map(l => (
          <Link key={l.href} className={cls.SocialMediaLinks_socialMediaLink} href={l.href}>{l.icon}</Link>
        ))
      }
    </div>
  </div>
  )
}

export { SocialMediaLinks }
export type { SocialLink }