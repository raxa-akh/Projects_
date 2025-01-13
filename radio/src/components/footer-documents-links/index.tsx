import Link from 'next/link'
import cls from './style.module.scss'
import classNames from 'classnames'

type LinkT = {
  label: string,
  href: string
}

type Props = {
  links: LinkT[]
  className?: string
}

function FooterDocumentsLinks(props: Props) {
  const {} = props

  return (
    <div className={props.className}>
      <div className={classNames(cls.FooterDocumentsLinks)}>
        {props.links.map(l => (
          <div key={l.href} className={cls.FooterDocumentsLinks_link}>
            <Link href={l.href}>{l.label}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export { FooterDocumentsLinks }