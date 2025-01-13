import { ReactNode, useEffect, useLayoutEffect, useRef } from 'react'
import cls from './style.module.scss'
import { XmarkIcon } from '@/components/icons'
import { useIsDesktop } from '@/hooks/use-is-desktop'
import Image from 'next/image'

type Props = {
  title: string
  children: ReactNode
  onClose: () => void
  playerDesktop: ReactNode
}

function SignModalLayout(props: Props) {
  const {} = props
  const isDesktop = useIsDesktop()

  const contentRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) {
        const container = document.getElementById('MainLayoutDesktop_content')
        if (container && contentRef.current) {
          contentRef.current.style.right = window.innerWidth - container.offsetWidth - container.offsetLeft + 'px'
        }
        const header = document.getElementById('MainLayoutDesktop_headerWrapper')
  
        const footer = document.getElementById('MainLayoutDesktop_footerWrapper')
        if (footer && header && contentRef.current) {
          contentRef.current.style.height = footer.offsetTop  + 'px'
        }
        if (wrapperRef.current) {
          wrapperRef.current.style.overflowY = ''
          const footer = document.getElementById('MainLayoutDesktop_footerWrapper')
          if (footer && header && wrapperRef.current) {
            wrapperRef.current.style.height = footer.offsetTop  + 'px'
          }
          wrapperRef.current.style.position = ''
          document.body.classList.remove(cls.overflowHidden)
          var root = document.getElementsByTagName( 'html' )[0]
          root.classList.remove(cls.overflowHidden)
        }
        const player = document.getElementById('DesktopPlayerLayout')
        if (playerRef.current && player) {
          playerRef.current.style.height = player.offsetHeight  + 'px'
          playerRef.current.style.width = player.offsetWidth  + 'px'
          const rect = player.getBoundingClientRect()
          const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          playerRef.current.style.top = rect.top + scrollTop + 'px'
          playerRef.current.style.left = rect.left + scrollLeft  + 'px'
        }
        
      } else {
        if (contentRef.current) {
          contentRef.current.style.right = ''
          contentRef.current.style.top = ''
          contentRef.current.style.height = ''
          
        }
        const header = document.getElementById('MainLayoutMobile_headerWrapper') 
        // if (header && header && contentRef.current) {
        //   contentRef.current.style.top = header.offsetHeight  + 'px'
        // }
        const player = document.getElementById('MainLayoutMobile_playerSwiper') 
        // if (player && header && header && contentRef.current) {
        //   contentRef.current.style.height = 21 + player.offsetTop - header.offsetHeight  + 'px'
        // }
        if (header && header && wrapperRef.current) {
          wrapperRef.current.style.top = header.offsetHeight  + 'px'
        }
        if (player && header && header && wrapperRef.current) {
          wrapperRef.current.style.height = 21 + player.offsetTop - header.offsetHeight  + 'px'
          wrapperRef.current.style.overflowY = 'auto'
        }
        if (wrapperRef.current) {
          wrapperRef.current.style.position = 'fixed'
          wrapperRef.current.style.position = 'fixed'
          if (player && header)
          wrapperRef.current.style.height = 21 + player.offsetTop - header.offsetHeight  + 'px'
          document.body.classList.add(cls.overflowHidden)
          var root = document.getElementsByTagName( 'html' )[0]
          root.classList.add(cls.overflowHidden)
        }
      } 
    }
    handler()
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return (
    <div className={cls.SignModalLayout} onClick={props.onClose} ref={wrapperRef}>
      <div className={cls.SignModalContent} ref={contentRef} onClick={e => e.stopPropagation()}>
        <div className={cls.SignModalLayout_blur}>
          <div className={cls.SignModalLayout_blur1}>
            <Image src={'/assets/PlayerBlur1.svg'} fill alt=''/>
          </div>
          <div className={cls.SignModalLayout_blur2}>
            <Image src={'/assets/PlayerBlur2.svg'} fill alt=''/>
          </div>
        </div>
        <div className={cls.SignModalLayout_content}>
          <div className={cls.SignModalContent_head}>
            <h2 className={cls.SignModalLayout_title}>{props.title}</h2>
            <button onClick={props.onClose}>
              <XmarkIcon color='#fff' size={19}/>
            </button>
          </div>
          {props.children}
        </div>
      </div>
       {isDesktop &&  <aside 
        className={cls.SignInModal_player}
        ref={playerRef}
        onClick={e => e.stopPropagation()}
       >
            <img
              src='/assets/PlayerBlur1.svg'
              className={cls.SignInModal_playerBlur1}
            />
            <img
              src='/assets/PlayerBlur2.svg'
              className={cls.SignInModal_playerBlur2}
            />
            <img
              src='/assets/playerMobileBlur2.svg'
              className={cls.SignInModal_playerBlur3}
            />
            {props.playerDesktop}
          </aside>}
    </div>
  )
}

export { SignModalLayout }