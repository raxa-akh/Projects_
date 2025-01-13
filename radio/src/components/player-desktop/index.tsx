import React from 'react'
import styles from './Player.module.scss'

import songImg from '../../../public/assets/Song_img.svg'
import share from '../../../public/assets/share_btn.svg'
import like from '../../../public/assets/like_btn.svg'
import volume from '../../../public/assets/volume_btn.svg'
import progress from '../../../public/assets/progress.svg'
import live from '../../../public/assets/live.svg'
import startBtn from '../../../public/assets/start_btn.svg'
import liveBtn from '../../../public/assets/live_btn.svg'
import nextBtn from '../../../public/assets/next20sec_btn.svg'
import prevBtn from '../../../public/assets/prev20sec_btn.svg'
import pasueBtn from '../../../public/assets/pause_btn.svg'
import arrowLeft from '../../../public/assets/arrow_left.svg'
import arrowRight from '../../../public/assets/arrow_right.svg'
import playBtn from '../../../public/assets/play_btn.svg'
import song1 from '../../../public/assets/more_img_1.svg'

function PlayerDesktop() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.header_inner}>
					<div className={styles.image}>
						<img alt='' src={songImg.src} className={styles.song_img} />
						<div className={styles.player_options}>
							<img alt='' src={share.src} />
							<img alt='' src={like.src} />
							<img alt='' src={volume.src} />
						</div>
					</div>
					<div className={styles.name}>
						<span className={styles.name_span}>Song Name</span>
					</div>
					<div className={styles.author}>
						<span className={styles.author_span}>Author</span>
					</div>
				</div>
			</div>
			<div className={styles.player}>
				<div className={styles.player_inner}>
					<div className={styles.progress_bar}>
						<div className={styles.progress}>
							<img alt='' src={progress.src} />
						</div>
						<div className={styles.live}>
							<img alt='' src={live.src} />
							<span className={styles.live_span}>LIVE</span>
						</div>
					</div>
					<div className={styles.controls}>
						<img alt='' src={startBtn.src} />
						<img alt='' src={prevBtn.src} />
						<img alt='' src={pasueBtn.src} />
						<img alt='' src={nextBtn.src} />
						<img alt='' src={liveBtn.src} />
					</div>
				</div>
			</div>
			<div className={styles.more}>
				<div className={styles.more_inner}>
					<div className={styles.more_title}>
						<span className={styles.more_title_span}>Ранее в эфире</span>
					</div>
					<div className={styles.more_slider}>
						<div className={styles.slider_arrow_left}>
							<img alt='' src={arrowLeft.src} />
						</div>
						<div className={styles.slider_items}>
							<div className={styles.slider_item}>
								<div className={styles.slider_item_img}>
									<img alt='' src={song1.src} />
								</div>
								<div className={styles.slider_item_text}>
									<div className={styles.slider_item_text_title}>
										<span className={styles.slider_item_text_title_span}>Without me</span>
									</div>
									<div className={styles.slider_item_text_info}>
										<span className={styles.slider_item_text_info_span}>Halsey</span>
										<img alt='' src={playBtn.src} />
									</div>
								</div>
							</div>
							<div className={styles.slider_item}>
								<div className={styles.slider_item_img}>
									<img alt='' src={song1.src} />
								</div>
								<div className={styles.slider_item_text}>
									<div className={styles.slider_item_text_title}>
										<span className={styles.slider_item_text_title_span}>Song Name</span>
									</div>
									<div className={styles.slider_item_text_info}>
										<span className={styles.slider_item_text_info_span}>Author</span>
										<img alt='' src={playBtn.src} />
									</div>
								</div>
							</div>
						</div>
						<div className={styles.slider_arrow_right}>
							<img alt='' src={arrowRight.src} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { PlayerDesktop }
