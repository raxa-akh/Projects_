import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNowPlayingActions } from '../../services/store/slices/nowPlayingSlice/nowPlayingSlice'
import { PauseIcon } from '../../components/icons/pause-icon'
import { PlayIcon } from '../../components/icons/play-icon'
import { HeartStrokeIcon, ShareIcon } from '@/components/icons'
import Image from 'next/image'
import cls from './style.module.scss'
import { RootState, AppDispatch } from '@/services/store/'
import classNames from 'classnames'

function CollapsedPlayerLayout() {
	const dispatch = useDispatch<AppDispatch>()
	const { songUrl, songInfo, duration, loading, error } = useSelector((state: RootState) => state.nowPlaying)

	const [playing, setPlaying] = useState(false)
	const [volume, setVolume] = useState(0.8)
	const [muted, setMuted] = useState(false)
	const [progress, setProgress] = useState({ played: 0, playedSeconds: 0 })

	const playerRef = useRef<ReactPlayer>(null)

	useEffect(() => {
		dispatch(fetchNowPlayingActions.fetchNowPlaying())
	}, [dispatch])

	const handleTogglePause = () => setPlaying(!playing)
	const handleVolumeChange = (newVolume: number) => setVolume(newVolume)
	const handleProgress = (state: { played: number; playedSeconds: number }) => setProgress(state)
	const handleSeek = (amount: number) => {
		if (playerRef.current) {
			const newPlayedSeconds = amount * duration
			playerRef.current.seekTo(newPlayedSeconds)
		}
	}

	return (
		<div id={'CollapsedPlayerLayout'} className={cls.CollapsedPlayerLayout}>
			<button className={cls.CollapsedPlayerLayout_playbutton} onClick={handleTogglePause}>
				{playing ? <PauseIcon /> : <PlayIcon />}
			</button>
			<Image className={cls.CollapsedPlayerLayout_image} src={songInfo.art} alt='' height={52} width={52} />
			<div className={cls.CollapsedPlayerLayout_info}>
				<p className={cls.CollapsedPlayerLayout_infoName}>{songInfo.title}</p>
				<p className={cls.CollapsedPlayerLayout_infoAuthor}>{songInfo.artist}</p>
			</div>
			<button className={classNames(cls.CollapsedPlayerLayout_addonButtons, cls.ml_auto)}>
				<ShareIcon />
			</button>
			<button className={cls.CollapsedPlayerLayout_addonButtons}>
				<HeartStrokeIcon />
			</button>
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

export { CollapsedPlayerLayout }
