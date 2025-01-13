import Link from 'next/link'
import cls from './desktopstyle.module.scss'
import { Swiper, SwiperSlide, SwiperProps, SwiperRef } from 'swiper/react';
import { ReactElement } from 'react';

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

}

function DesktopRowList<T extends { id: string | number }>(props: ListProps<T>) {
  const {} = props

  return (
    <div className={cls.DesktopRowList}>
      <div className={cls.DesktopRowList_head}>
        <h2>{props.title}</h2>
        <button onClick={props.link.onClick}>{props.link.label}</button>
      </div>
      <div className={cls.DesktopRowList_flex}>
      {
        props.list.map(item =>
        <div key={item.id}>
          {props.renderItem(item)}
        </div>
      )}

      </div>
    </div>
  )
}

export { DesktopRowList }