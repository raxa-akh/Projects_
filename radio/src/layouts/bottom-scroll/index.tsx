"use client"

import { ReactNode, UIEvent, useEffect, useState } from 'react'
import cls from './style.module.scss'
import { useIsDesktop } from '@/hooks/use-is-desktop'

type Props = {
  children: ReactNode
}
//carousel
//DesktopPlayerLayout
function BottomScroll(props: Props) {
  const {} = props

  const isDesktop = useIsDesktop()
  const [height, setHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    const resizeHandler = () => {
      const Carousel = document.getElementById('carousel')  || document.getElementById('Search')
      const DesktopPlayerLayout = document.getElementById('DesktopPlayerLayout')
      if (!Carousel || !DesktopPlayerLayout) return setHeight(undefined)
      const top = Carousel.offsetTop + Carousel.offsetHeight - 90
      const bottom = DesktopPlayerLayout.offsetTop + DesktopPlayerLayout.offsetHeight
      setHeight(bottom - top)
    }

    window.addEventListener('resize', resizeHandler)
    resizeHandler()
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])


  if (!isDesktop) return (
    <>
      {props.children}
    </>
  )

  return (
    <div className={cls.BottomScroll} style={{height}}>
      {props.children}
    </div>
  )
}

export { BottomScroll }