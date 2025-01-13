"use client"

import { ReactNode, useEffect } from 'react'
import cls from './style.module.scss'
import { Modals } from '@/app/(modals)'
import Image from 'next/image'

type Props = {
  headerContent: ReactNode
  mainContent: ReactNode
}

function DesktopMainLayoutOnlyHeader(props: Props) {
  const {
    headerContent, mainContent
  } = props

  useEffect(() => {
    document.body.classList.add(cls.overflowHidden)

    return () => {
      document.body.classList.remove(cls.overflowHidden)
    }
  })

  return (
    <>
      <div id={'DesktopMainLayoutOnlyHeader_headerWrapper'} className={cls.DesktopMainLayoutOnlyHeader_headerWrapper}>
        <header className={cls.DesktopMainLayoutOnlyHeader_header}>
          {headerContent}
        </header>
      </div>
      <div className={cls.DesktopMainLayoutOnlyHeader_contentWrapper}>
        <main id={'DesktopMainLayoutOnlyHeader_content'} className={cls.DesktopMainLayoutOnlyHeader_content}>
          <div className={cls.DesktopMainLayoutOnlyHeader_blur1}>
            <Image src={'/assets/PlayerBlur1.svg'} fill alt=''/>
          </div>
          {mainContent}
        </main>
      </div>
      <Modals/>
    </>
  )
}

export { DesktopMainLayoutOnlyHeader }