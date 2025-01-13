import Link from 'next/link'
import cls from './style.module.scss'
import classNames from 'classnames'

type Props = {
  children: string
  href: string
  onClick?: () => void
  bold?: boolean
  marginBottom?: '8'
}

const mapMarginBottomToClass = {
  '8': cls.mb_8,
}

function FormLink(props: Props) {
  const {} = props

  return (
    <Link href={props.href} className={classNames(cls.FormLink, {
      [cls.bold]: props.bold
    }, props.marginBottom && mapMarginBottomToClass[props.marginBottom])} onClick={props.onClick}>
      {props.children}
    </Link>
  )
}

export { FormLink }