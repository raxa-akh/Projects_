import { ReactNode } from 'react'
import cls from './style.module.scss'
import classNames from 'classnames'

type Props = {
  children?: ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  marginBottom?: '16' | '24'
}

const mapMarginBottomToClass = {
  '16': cls.mb_16,
  '24': cls.mb_24
}

function Button(props: Props) {
  const {type = 'button'} = props

  return (
    <div className={classNames(
      cls.Button,
      props.marginBottom && mapMarginBottomToClass[props.marginBottom]
    )}>
      <button 
        className={cls.button}
        onClick={props.onClick} 
        type={type}
        disabled={props.disabled}
      >{props.children}</button>
    </div>
  )
}

export { Button }