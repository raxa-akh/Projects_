import React, { ReactElement, ReactNode, cloneElement, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import cls from './style.module.scss'
import { Modals } from '@/app/(modals)'

type Props = {
  headerContent: ReactElement
  mainContent: ReactNode
  burgerMenu: ReactElement
}

function MobileMainLayoutOnlyHeader(props: Props) {
  const {
    headerContent, mainContent, 
    burgerMenu
  } = props

  const [burgerMenuOpened, setBurgerMenuOpened] = useState(false)

  return (
    <>
      <div id={'MobileMainLayoutOnlyHeader_headerWrapper'} className={cls.MobileMainLayoutOnlyHeader_headerWrapper}>
        <header className={cls.MobileMainLayoutOnlyHeader_header}>
          {headerContent && React.cloneElement(
            headerContent, 
            {
              ...headerContent.props,
              onToogleMenu: () => setBurgerMenuOpened(prev => !prev)
            }
          )}
        </header>
      </div>
      <div className={cls.MobileMainLayoutOnlyHeader_content}>
        <main className={cls.MobileMainLayoutOnlyHeader_main}>
          {mainContent}
        </main>
      </div>
      <Modals/>
      <motion.aside className={cls.MobileMainLayoutOnlyHeader_burgerMenu}
        animate={burgerMenuOpened ? {
          top: 88
        } : {
          top: '-100%'
        }}
        
      >
        {cloneElement(burgerMenu, {
          closeBurgerMenu: () => setBurgerMenuOpened(false)
        })}
      </motion.aside>
    </>
  )
}

export { MobileMainLayoutOnlyHeader }