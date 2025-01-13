import { ReactElement } from 'react'
import cls from './style.module.scss'
import classNames from 'classnames'

type Props = {
  icon: ReactElement
  label: string
  disabled?: boolean
  marginBottom?: '12' | '16' | '24' | '60'
}

const mapMarginBottomToClass = {
  '12': cls.mb_12,
  '16': cls.mb_16,
  '24': cls.mb_24,
  '60': cls.mb_60
}

function OauthButton(props: Props) {
  const {} = props

  return (
    <button className={classNames(
      cls.OauthButton,
      props.marginBottom && mapMarginBottomToClass[props.marginBottom]
    )} disabled={props.disabled}>
      {props.icon}
      <span>{props.label}</span>
    </button>
  )
}

export { OauthButton }