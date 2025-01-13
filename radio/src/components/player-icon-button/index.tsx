import { ReactElement } from 'react'
import cls from './style.module.scss'

type Props = {
  onClick: () => void
  icon: ReactElement
}

function PlayerIconButton(props: Props) {
  const {} = props

  return (
    <button className={cls.PlayerIconButton} onClick={props.onClick}>
      {props.icon}
    </button>
  )
}

export { PlayerIconButton }