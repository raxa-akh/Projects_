"use client"
import { ReactElement } from 'react';
import cls from './mobilestyle.module.scss'
import { Swiper, SwiperSlide, SwiperProps, SwiperRef } from 'swiper/react';
import Link from 'next/link';
import classNames from 'classnames';
import './style.scss'
import 'swiper/css/grid';

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

function MobileRowList<T extends { id: string | number }>(props: ListProps<T>) {
  const {} = props


  
  return (
    <div className={classNames(cls.MobileRowList, 'MobileRowList')}>
      <div className={cls.MobileRowList_head}>
        <h2>{props.title}</h2>
        <button onClick={props.link.onClick}>{props.link.label}</button>
      </div>
      <Swiper
        {...props.swiperProps}
      >
        {
          props.list.map(item =>
            <SwiperSlide key={item.id}>
              {props.renderItem(item)}
            </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export { MobileRowList }