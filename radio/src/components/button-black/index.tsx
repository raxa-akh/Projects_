import cls from './style.module.scss'

type Props = {
  children: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

function ButtonBlack(props: Props) {
  const {} = props

  return (
    <button 
      className={cls.ButtonBlack}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export { ButtonBlack }