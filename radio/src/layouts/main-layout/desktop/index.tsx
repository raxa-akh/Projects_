import { ReactNode } from 'react'
import cls from './style.module.scss'
import { Modals } from '@/app/(modals)'

type Props = {
  headerContent: ReactNode
  playerContent: ReactNode
  mainContent: ReactNode
  footerContent: ReactNode
}

function MainLayoutDesktop(props: Props) {
  const {
    headerContent, playerContent, mainContent, footerContent
  } = props

  return (
    <>
      <div id={'MainLayoutDesktop_headerWrapper'} className={cls.MainLayoutDesktop_headerWrapper}>
        <header className={cls.MainLayoutDesktop_header}>
          {headerContent}
        </header>
      </div>
      <div className={cls.MainLayoutDesktop_contentWrapper}>
        <div id={'MainLayoutDesktop_content'} className={cls.MainLayoutDesktop_content}>
          <aside className={cls.MainLayoutDesktop_player}>
            <img
              src='/assets/PlayerBlur1.svg'
              className={cls.MainLayoutDesktop_playerBlur1}
            />
            <img
              src='/assets/PlayerBlur2.svg'
              className={cls.MainLayoutDesktop_playerBlur2}
            />
            <img
              src='/assets/playerMobileBlur2.svg'
              className={cls.MainLayoutDesktop_playerBlur3}
            />
            {playerContent}
          </aside>
          <main className={cls.MainLayoutDesktop_main}>
            {mainContent}
          </main>
        </div>
      </div>
      <div className={cls.MainLayoutDesktop_footerWrapper} id={'MainLayoutDesktop_footerWrapper'}>
        <footer className={cls.MainLayoutDesktop_footer}>
          <img
            src='/assets/FooterBlur.png'
            className={cls.MainLayoutDesktop_footerBlurRight}
          />
          <img
            src='/assets/FooterBlur.png'
            className={cls.MainLayoutDesktop_footerBlurLeft}
          />
          {footerContent}
        </footer>
      </div>
      <Modals/>
    </>
  )
}

export { MainLayoutDesktop }