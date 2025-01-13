'use client'
import { useIsDesktop } from '@/hooks/use-is-desktop'
import { DesktopMainLayoutOnlyHeader } from './desktop'
import { MobileMainLayoutOnlyHeader } from './mobile'
import { ReactElement, ReactNode } from 'react'

type Props = {
  desktopHeaderContent: ReactNode
  desktopMainContent: ReactNode
  burgerMenu: ReactElement
  mobileHeaderContent: ReactElement
  mobileMainContent: ReactNode
}

function MainLayoutOnlyHeader(props: Props) {
  const {
    burgerMenu,
    desktopHeaderContent, desktopMainContent,
    mobileHeaderContent, mobileMainContent,
  } = props

  const isDesktop = useIsDesktop()

  if (isDesktop) {
    return (
      <DesktopMainLayoutOnlyHeader
        headerContent={desktopHeaderContent}
        mainContent={desktopMainContent}
      />
    )
  } else {
    return (
      <MobileMainLayoutOnlyHeader
        burgerMenu={burgerMenu}
        headerContent={mobileHeaderContent}
        mainContent={mobileMainContent}
      />
    )
  }
}

export { MainLayoutOnlyHeader }