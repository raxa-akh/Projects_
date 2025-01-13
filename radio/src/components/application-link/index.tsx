import Link from 'next/link'
import cls from './style.module.scss'
import { ReactElement } from 'react'

type Props = {
  href: string
  icon: ReactElement
  topText: string
  bottomText: string
}

function AppplicationLink(props: Props) {
  const {} = props

  return (
    <div>
      <Link href={props.href} target='_blank' className={cls.AppplicationLink}>
        {props.icon}
        <div>
          <p className={cls.AppplicationLink_top}>{props.topText}</p>
          <p className={cls.AppplicationLink_bottom}>{props.bottomText}</p>
        </div>
      </Link>
    </div>
  )
}

export { AppplicationLink }