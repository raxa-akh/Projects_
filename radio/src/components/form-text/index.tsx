import cls from './style.module.scss'
import classNames from 'classnames'

type Props = {
  children: string

  bold?: boolean
}

function FormText(props: Props) {
  const {} = props

  return (
    <p className={classNames(cls.FormText, {
      [cls.bold]: props.bold
    })}>
      {props.children}
    </p>
  )
}

export { FormText }