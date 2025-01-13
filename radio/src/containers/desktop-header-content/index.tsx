"use client"
import { ModalCodes, useModals } from '@/services/modal-service'
import cls from './style.module.scss'
import { DesktopHeaderLayout } from '@/layouts/desktop-header-layout'

type Props = {
  disableLinks?: boolean
}

function DesktopHeaderContent(props: Props) {
  const {} = props

  const modals = useModals()
  const links = [
    {href: '/', label: 'Прямой эфир'},
    {href: '/podcasts', label: 'Подкасты'},
    {href: '/video-broadcasts', label: 'Видео эфир'},
  ]

  const callbacks = {
    onClickSignIn: () => {
      modals.open({type: ModalCodes.signin})
    },
    onClickSignUp: () => {
      modals.open({type: ModalCodes.signup})
    },
  }

  return (
    <DesktopHeaderLayout
      links={links}
      onClickSignIn={callbacks.onClickSignIn}
      onClickSignUp={callbacks.onClickSignUp}
      disableLinks={props.disableLinks}
    >
    </DesktopHeaderLayout>
  )
}

export { DesktopHeaderContent }