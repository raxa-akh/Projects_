"use client"

import { RowList } from '@/components/row-list'
import cls from './style.module.scss'
import { ReactElement, useState } from 'react'
import { Grid } from 'swiper/modules'

type Props<T extends {
  id: string | number
}> = {
  title: string
  list: T[]
  renderItem: (item: T) => ReactElement
}

function ItemsSlider<T extends {id: string | number}> (props: Props<T>) {

  const [showAll, setShowAll] = useState(false);

  return (
    <RowList
      title={props.title}
      link={{
        onClick: () => setShowAll(prev => !prev),
        label: showAll ? 'Показать меньше' : 'Показать все'
      }}
      list={showAll ? props.list :  props.list.slice(0, 5)}
      renderItem={props.renderItem}
      swiperProps={{
        spaceBetween: 16,
        slidesPerView: 'auto',
        grid: {
          rows: showAll ? 2 : 1,
          fill: 'row'
        },
        modules: [Grid]
      }}
    />
  )
}

export { ItemsSlider }