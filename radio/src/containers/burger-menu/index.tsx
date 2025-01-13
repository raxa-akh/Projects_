"use client"
import { Copyright } from '@/components/copyright'
import { FacebookIcon, InstagramIcon, TelegramIcon, VkIcon, WhatsappIcon } from '@/components/icons'
import { SocialMediaLinks } from '@/components/social-media-links'
import { BurgerMemuLayout } from '@/layouts/burger-menu-layout'
import { ModalCodes, useModals } from '@/services/modal-service'

type Props = {
  closeBurgerMenu?: () => void
}

function BurgerMenu(props: Props) {
  const {} = props

  const modals = useModals()

  const callbacks = {
    onClickSignIn: () => {
      props.closeBurgerMenu?.()
      modals.open({type: ModalCodes.signin})
    },
    onClickSignUp: () => {
      props.closeBurgerMenu?.()
      modals.open({type: ModalCodes.signup})
    },
  }

  const render = {
    links: [
      {label: 'Прямой эфир', href: '/'},
      {label: 'Подкасты', href: '/podcasts'},
      {href: '/video-broadcasts', label: 'Видео эфир'},
      {label: 'Контакты', href: '/contacts'},
      {label: 'Наши площадки', href: '/our-platforms'},
      {label: 'Поддержать проект', href: '/support'},
    ],
    socialLinks: [
      {href: '/', icon: <VkIcon/>},
      {href: '/', icon: <InstagramIcon/>},
      {href: '/', icon: <TelegramIcon/>},
      {href: '/', icon: <FacebookIcon/>},
      {href: '/', icon: <WhatsappIcon/>},
    ]
  }

  return (
    <BurgerMemuLayout
      signInLabel='Войти'
      onClickSignIn={callbacks.onClickSignIn}
      signUpLabel='Регистрация'
      onClickSignUp={callbacks.onClickSignUp}
      links={render.links}
      socialMediaLinks={<SocialMediaLinks
        socialLinks={render.socialLinks}
      />}
      copyright={<Copyright
        copyrightLabel='2024 Радио «Не надо ля ля»'
      />}
    />
  )
}

export { BurgerMenu }