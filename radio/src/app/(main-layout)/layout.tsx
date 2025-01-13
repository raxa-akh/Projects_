"use client"
import { MainLayout } from "@/layouts/main-layout";
import { DesktopHeaderContent } from "@/containers/desktop-header-content";
import { DesktopPlayerContent } from "@/containers/desktop-player";
import { MobileHeaderContent } from "@/containers/mobile-header-content";
import { BurgerMenu } from "@/containers/burger-menu";
import { FooterMobile } from "@/containers/footer-mobile";
import { FooterDesktop } from "@/containers/footer-desktop";
import { CollapsedPlayer } from "@/containers/collapsed-player";
import { OpenedPlayer } from "@/containers/opened-player";
import { Modals } from "../(modals)";



export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
  <MainLayout
  //burger
    burgerMenu={<BurgerMenu/>}
    //footer
    desktopFooterContent={<FooterDesktop />}
    mobileFooterContent={<FooterMobile />}
    //header
    desktopHeaderContent={<DesktopHeaderContent />}
    mobileHeaderContent={<MobileHeaderContent />}
    //main
    desktopMainContent={children}
    mobileMainContent={children}
    //player
    desktopPlayerContent={<DesktopPlayerContent />}
    collapsedPlayer={<CollapsedPlayer />}
    openedPlayer={<OpenedPlayer />}
  />
	)
}
