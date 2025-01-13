import Link from 'next/link'
import cls from './style.module.scss'
import classNames from 'classnames'

type FooterLink = {label: string, href: string}

type Props = {
  links: FooterLink[]
  className?: string
}

function FooterLinks(props: Props) {
  const {} = props

  return (
    <nav className={classNames(cls.FooterLinks_links, props.className)}>
    {
      props.links.map(l => (
        <Link key={l.href} className={cls.FooterLinks_pageLink} href={l.href}>{l.label}</Link>
      ))
    }
  </nav>
  )
}

export { FooterLinks }
export type { FooterLink }