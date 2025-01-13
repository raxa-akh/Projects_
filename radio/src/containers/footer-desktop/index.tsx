import { AppplicationLink } from "@/components/application-link"
import { FooterLinks } from "@/components/footer-links"
import { AppStoreIcon } from "@/components/icons/app-store-icon"
import { FooterDesktopLayout } from "../../layouts/footer-desktop-layout"
import { GoogleStoreIcon } from "@/components/icons/googe-store-icon"
import { FooterDocumentsLinks } from "@/components/footer-documents-links"
import { SocialMediaLinks } from "@/components/social-media-links"
import { Copyright } from "@/components/copyright"
import { FacebookIcon, InstagramIcon, TelegramIcon, VkIcon, WhatsappIcon } from "@/components/icons"

type Props = {

}

function FooterDesktop(props: Props) {
  const {} = props

  const render = {
    links: [
      {label: 'Прямой эфир', href: '/'},
      {label: 'Подкасты', href: '/podcasts'},
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
    ],
    playMarketLink: '/',
    appStoreLink: '/',
    footerDocumentsLinks: [
      {label: 'Privacy Policy', href: '/'},
      {label: 'Terms & Conditions', href: '/'},
      {label: 'Cookie Settings', href: '/'},
    ],
  }

  return (
    <FooterDesktopLayout
      footerLinks={<FooterLinks
        links={render.links}
      />}
      appStoreLink={<AppplicationLink
        href='/'
        bottomText='App Store'
        topText='Загрузите в'
        icon={<AppStoreIcon/>}
      />}
      googleStoreLink={<AppplicationLink
        href='/'
        bottomText='Google Play'
        topText='Доступно в'
        icon={<GoogleStoreIcon/>}
      />}
      footerDocumentsLinks={<FooterDocumentsLinks
        links={render.footerDocumentsLinks}
      />}
      socialMediaLinks={<SocialMediaLinks
        socialLinks={render.socialLinks}
      />}
      copyright={<Copyright
        copyrightLabel='2024 Радио «Не надо ля ля»'
      />}
    />
  )
}

export { FooterDesktop }