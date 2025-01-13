import { FormEvent, ReactNode } from 'react'
import cls from './style.module.scss'
import classNames from 'classnames'

type Props = {
  onSubmit: (e: FormEvent) => void
  children: ReactNode
  marginBottom?: '32'
}

const mapMarginBottomToClass = {
  '32': cls.mb_32,
}

function Form(props: Props) {
  const {} = props

  return (
    <form className={classNames(cls.Form, props.marginBottom && mapMarginBottomToClass[props.marginBottom])} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

export { Form }