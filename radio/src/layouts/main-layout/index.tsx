'use client'
import { useIsDesktop } from '@/hooks/use-is-desktop'
import { MainLayoutDesktop } from './desktop'
import { MainLayoutMobile } from './mobile'
import { ReactElement, ReactNode } from 'react'

type Props = {
  desktopFooterContent: ReactNode
  desktopHeaderContent: ReactNode
  desktopMainContent: ReactNode
  desktopPlayerContent: ReactNode
  burgerMenu: ReactElement
  collapsedPlayer: ReactNode
  openedPlayer: ReactNode
  mobileFooterContent: ReactNode
  mobileHeaderContent: ReactElement
  mobileMainContent: ReactNode
}

function MainLayout(props: Props) {
  const {
    burgerMenu, collapsedPlayer, desktopFooterContent,
    desktopHeaderContent, desktopMainContent,
    desktopPlayerContent, mobileFooterContent,
    mobileHeaderContent, mobileMainContent,
    openedPlayer,
  } = props

  const isDesktop = useIsDesktop()

  if (isDesktop) {
    return (
      <MainLayoutDesktop
        footerContent={desktopFooterContent}
        headerContent={desktopHeaderContent}
        mainContent={desktopMainContent}
        playerContent={desktopPlayerContent}
      />
    )
  } else {
    return (
      <MainLayoutMobile
        burgerMenu={burgerMenu}
        collapsedPlayer={collapsedPlayer}
        footerContent={mobileFooterContent} 
        headerContent={mobileHeaderContent}
        mainContent={mobileMainContent}
        openedPlayer={openedPlayer}
      />
    )
  }
}

export { MainLayout }