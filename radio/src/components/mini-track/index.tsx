import styles from './style.module.scss'
import { PlayIcon } from '../icons/play-icon'
import Image from 'next/image'

type TrackItem = {
  authorName: string
  trackName: string
  id: number | string
  imageSrc: string
}

type TrackProps = {
  item: TrackItem
}

function MiniTrack(props: TrackProps) {
  const {} = props

  return (
    <div className={styles.slider_item}>
      <div className={styles.slider_item_img}>
        <Image alt="" src={props.item.imageSrc} fill/>
      </div>
      <div className={styles.slider_item_text}>
          <p className={styles.slider_item_text_title_span}>{props.item.trackName}</p>
          <div className={styles.slider_item_text_info}>
              <span className={styles.slider_item_text_info_span}>{props.item.authorName}</span>
              <button>
                <PlayIcon size={27}/>
              </button>
          </div>
      </div>
  </div>
  )
}

export { MiniTrack }
export type { TrackProps }