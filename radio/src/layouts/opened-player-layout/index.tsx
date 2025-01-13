import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { RootState } from '@/services/store'
import Image from 'next/image'
import cls from './style.module.scss'
import { ReactNode } from 'react'

type Props = {
	rightTopControls: ReactNode
	timeline: ReactNode
	controlsPanel: ReactNode
	bottomAddon: ReactNode
}

function OpenedPlayerLayout({ rightTopControls, timeline, controlsPanel, bottomAddon }: Props) {
	const { songUrl, songInfo, duration } = useSelector((state: RootState) => state.nowPlaying)
	const [playing, setPlaying] = useState(false)
	const [volume, setVolume] = useState(0.8)
	const [muted, setMuted] = useState(false)
	const [progress, setProgress] = useState({ played: 0, playedSeconds: 0 })

	const playerRef = useRef<ReactPlayer>(null)

	const handleTogglePlayPause = () => setPlaying(!playing)
	const handleVolumeChange = (newVolume: number) => setVolume(newVolume)
	const handleProgress = (state: { played: number; playedSeconds: number }) => setProgress(state)
	const handleSeek = (amount: number) => {
		if (playerRef.current) {
			const newPlayedSeconds = amount * duration
			playerRef.current.seekTo(newPlayedSeconds)
		}
	}

	return (
		<div className={cls.OpenedPlayerLayout_wrapper}>
			<div className={cls.OpenedPlayerLayout}>
				<div className={cls.OpenedPlayerLayout_controls}>
					<Image src={songInfo.art} alt={songInfo.title} layout='fill' objectFit='cover' />
					<div className={cls.OpenedPlayerLayout_rightTopControls}>{rightTopControls}</div>
					<div className={cls.OpenedPlayerLayout_controlsBottom}>
						{timeline}
						{controlsPanel}
					</div>
				</div>
				<div className={cls.OpenedPlayerLayout_info}>
					<p className={cls.OpenedPlayerLayout_infoName}>{songInfo.title}</p>
					<p className={cls.OpenedPlayerLayout_infoAuthor}>{songInfo.artist}</p>
				</div>
				<div className={cls.OpenedPlayerLayout_bottomAddon}>{bottomAddon}</div>
			</div>
			<ReactPlayer
				ref={playerRef}
				url={songUrl}
				playing={playing}
				volume={volume}
				muted={muted}
				onProgress={handleProgress}
				style={{ display: 'none' }}
			/>
		</div>
	)
}

export { OpenedPlayerLayout }
