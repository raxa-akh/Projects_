import classNames from 'classnames'
import cls from './style.module.scss'

type Props = {
  children: string
  marginBottom?: '32' | '24'
}

const mapMarginBottomToClass = {
  '32': cls.mb_32,
  '24': cls.mb_24,
}

function FormSeparator(props: Props) {
  const {} = props

  return (
    <div className={classNames(cls.FormSeparator, props.marginBottom && mapMarginBottomToClass[props.marginBottom])}>
      <div/>
      <p>{props.children}</p>
      <div/>
    </div>
  )
}

export { FormSeparator }