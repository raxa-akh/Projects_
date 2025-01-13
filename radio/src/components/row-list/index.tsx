"use client"
import { useMediaQuery } from 'react-responsive'
import cls from './style.module.scss'
import { MobileRowList } from './mobile'
import { Swiper, SwiperSlide, SwiperProps, SwiperRef } from 'swiper/react';
import { ReactElement } from 'react';
import { DesktopRowList } from './desktop';
import { useIsDesktop } from '@/hooks/use-is-desktop';

type ListProps<T extends {
  id: string | number
}> = {
  list: T[],
  renderItem: (item: T) => ReactElement
  title: string
  link: {
    label: string
    onClick: () => void
  }
  swiperProps?: SwiperProps
}

function RowList<T extends { id: string | number }>(props: ListProps<T>) {
  const {} = props

  const isDesktop = useIsDesktop()

  if (!isDesktop) {
    return (<MobileRowList
      {...props}
    />)
  }

  return (
    <DesktopRowList
    {...props}
  />
  )
}

export { RowList }