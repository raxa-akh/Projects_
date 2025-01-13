

"use client"
import classNames from "classnames";
import styles from "./style.module.scss"
import './style.scss'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { Swiper as SwiperEl, SwiperSlide, SwiperProps, SwiperRef } from 'swiper/react';
import { isMobile } from 'mobile-device-detect';
import Swiper from "swiper";

type ListProps<T extends {
  id: string | number
}> = {
  list: T[],
  renderItem: (item: T) => ReactElement
  title: string
  swiperProps: SwiperProps
}

function MiniCarousel<T extends { id: string | number }>(props: ListProps<T>) {
  const {} = props

  const [isEnd, setIsEnd] = useState(true)
  const [isBeginning, setIsBeginning] = useState(false)

  const sliderRef = useRef<SwiperRef>(null)

  const onSlideChange = (swiper: Swiper) => {
    //@ts-ignore
    setIsEnd(s.isEnd)
    //@ts-ignore
    setIsBeginning(s.isBeginning)
  }

  useEffect(() => {
    if (sliderRef.current) {
      //@ts-ignore
      setIsEnd(sliderRef.current.swiper.isEnd)
      //@ts-ignore
      setIsBeginning(sliderRef.current.swiper.isBeginning)
    }
  }, [])

  return (
    <div className={classNames(styles.TracksCarousel, 'MiniCarousel')}>
    <div className={styles.more_inner}>
        <div className={styles.more_title}>
          <h3 className={styles.more_title_span}>{props.title}</h3>
        </div>
        <div className={styles.row}>
          {!isMobile  && <button className={styles.arrowButton} disabled={isBeginning} onClick={() => sliderRef.current?.swiper.slidePrev()}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99893 1.87783L1.88969 7.75256C1.4706 8.15556 1.48237 8.82978 1.91527 9.21792L8.22582 14.8759" stroke={isBeginning ? "#3A4343" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>}
          <SwiperEl
            {...props.swiperProps}
            onSlideChange={onSlideChange}
            ref={sliderRef}
          >
            {
              props.list.map(item =>
                <SwiperSlide key={item.id}>
                  {props.renderItem(item)}
                </SwiperSlide>
            )}
          </SwiperEl>
          {!isMobile  && <button className={styles.arrowButton} disabled={isEnd} onClick={() => sliderRef.current?.swiper.slideNext()}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00107 1.87783L8.11031 7.75256C8.5294 8.15556 8.51763 8.82978 8.08473 9.21792L1.77418 14.8759" stroke={isEnd ? "#3A4343" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>}
        </div>
    </div>
</div>
  )
}

export { MiniCarousel }