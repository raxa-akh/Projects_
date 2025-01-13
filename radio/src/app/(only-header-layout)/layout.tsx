"use client"
import { MainLayoutOnlyHeader } from "@/layouts/main-layout-only-header";
import { DesktopHeaderContent } from "@/containers/desktop-header-content";
import { MobileHeaderContent } from "@/containers/mobile-header-content";
import { BurgerMenu } from "@/containers/burger-menu";



export default function MainLayouyOnlyHeader({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
  <MainLayoutOnlyHeader
  //burger
    burgerMenu={<BurgerMenu/>}
    //header
    desktopHeaderContent={<DesktopHeaderContent disableLinks/>}
    mobileHeaderContent={<MobileHeaderContent/>}
    //main
    desktopMainContent={children}
    mobileMainContent={children}
  />
	)
}
