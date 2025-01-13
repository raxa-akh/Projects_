import { FormEvent, ReactElement, ReactNode } from 'react'
import cls from './style.module.scss'
import classNames from 'classnames'
import Image from 'next/image'

const mapMarginBottomToClass = {
  '16': cls.mb_16,
  '24': cls.mb_24,
  '32': cls.mb_32,
  '40': cls.mb_40,
}

const mapFontSizeToClass = {
  '20': cls.fs_20,
  '24': cls.fs_24,
}

type Props = {
  children: ReactNode
  onSubmit?: (e: FormEvent) => void
  icon: ReactElement
}

function FormWithIcon(props: Props) {
  const {} = props

  return (
    <form className={cls.FormWithIcon} onSubmit={props.onSubmit}>
      <div className={cls.FormWithIcon_blur}>
        <div className={cls.FormWithIcon_blur1}>
          <Image src={'/assets/PlayerBlur1.svg'} fill alt=''/>
        </div>
        <div className={cls.FormWithIcon_blur2}>
          <Image src={'/assets/PlayerBlur1.svg'} fill alt=''/>
        </div>
      </div>
      <div className={cls.FormWithIcon_icon}>
        {props.icon}
      </div>
      <div  className={cls.FormWithIcon_content}>
        {props.children}
      </div>
    </form>
  )
}

type TitleProps = {
  children: string
  marginBottom?: '16' | '24' | '32'
  fontSize?: '20' | '24'
}

function Title(props: TitleProps) {
  return <h1 className={classNames(
    cls.FormWithIcon_Title,
    props.marginBottom && mapMarginBottomToClass[props.marginBottom],
    props.fontSize && mapFontSizeToClass[props.fontSize],
  )}>
    {props.children}
  </h1>
}

type PProps = {
  children: ReactNode
  marginBottom?: '16' | '24' | '32' | '40'
}

function P(props: PProps) {
  return <p className={classNames(
    cls.FormWithIcon_P,
    props.marginBottom && mapMarginBottomToClass[props.marginBottom],
  )}>
    {props.children}
  </p>
}

FormWithIcon.Title = Title
FormWithIcon.P = P

export { FormWithIcon }