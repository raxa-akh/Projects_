'use client'

import { useCallback, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { ControlsPanel } from '@/components/controls-panel'
import { HeartStrokeIcon, ShareIcon, VolumeIcon } from '@/components/icons'
import { MiniCarousel } from '@/components/mini-carousel'
import { MiniTrack, TrackProps } from '@/components/mini-track'
import { PlayerIconButton } from '@/components/player-icon-button'
import { Timeline } from '@/components/timeline'
import { OpenedPlayerLayout } from '@/layouts/opened-player-layout'
import { RootState } from '@/services/store'

type Props = {}

function OpenedPlayer(props: Props) {
	const { songUrl, songInfo, duration } = useSelector((state: RootState) => state.nowPlaying)
	const [playing, setPlaying] = useState(false)
	const [volume, setVolume] = useState(0.8)
	const [muted, setMuted] = useState(false)
	const [progress, setProgress] = useState({ played: 0, playedSeconds: 0 })

	const playerRef = useRef<ReactPlayer>(null)

	const handleTogglePause = () => setPlaying(!playing)
	const handleVolumeChange = (newVolume: number) => setVolume(newVolume)
	const handleProgress = (state: { played: number; playedSeconds: number }) => setProgress(state)
	const handleSeek = (amount: number) => {
		if (playerRef.current) {
			const newPlayedSeconds = amount * duration
			playerRef.current.seekTo(newPlayedSeconds)
		}
	}

	const handleSeekToStart = () => {
		if (playerRef.current) {
			playerRef.current.seekTo(0)
		}
	}

	const handleSeekBack = () => {
		if (playerRef.current) {
			const newPlayedSeconds = Math.max(progress.playedSeconds - 20, 0)
			playerRef.current.seekTo(newPlayedSeconds)
		}
	}

	const handleSeekForward = () => {
		if (playerRef.current) {
			const newPlayedSeconds = Math.min(progress.playedSeconds + 20, duration)
			playerRef.current.seekTo(newPlayedSeconds)
		}
	}

	const renders = {
		tracks: [
			{ authorName: 'Halsey', trackName: 'Without me', id: 1, imageSrc: '/assets/more_img_1.svg' },
			{ authorName: 'Halsey', trackName: 'Without me', id: 2, imageSrc: '/assets/more_img_1.svg' },
			{ authorName: 'Halsey', trackName: 'Without me', id: 3, imageSrc: '/assets/more_img_1.svg' },
			{ authorName: 'Halsey', trackName: 'Without me', id: 4, imageSrc: '/assets/more_img_1.svg' },
			{ authorName: 'Halsey', trackName: 'Without me', id: 5, imageSrc: '/assets/more_img_1.svg' }
		],

		trackItem: useCallback((item: TrackProps['item']) => <MiniTrack item={item} />, [])
	}

	return (
		<>
			<OpenedPlayerLayout
				imageSrc={songInfo.art}
				authorLabel={songInfo.artist}
				trackNameLabel={songInfo.title}
				rightTopControls={
					<>
						<PlayerIconButton icon={<ShareIcon />} onClick={() => {}} />
						<PlayerIconButton icon={<HeartStrokeIcon />} onClick={() => {}} />
						<PlayerIconButton icon={<VolumeIcon />} onClick={() => setMuted(!muted)} />
					</>
				}
				controlsPanel={
					<ControlsPanel
						paused={!playing}
						onTogglePause={handleTogglePause}
						onSetStart={handleSeekToStart}
						onSetBack={handleSeekBack}
						onSetNext={handleSeekForward}
					/>
				}
				timeline={<Timeline duration={duration} currentTime={progress.playedSeconds} onSeek={handleSeek} />}
				bottomAddon={
					<MiniCarousel
						title='Ранее в эфире'
						list={renders.tracks}
						renderItem={renders.trackItem}
						swiperProps={{
							spaceBetween: 20,
							slidesPerView: 'auto'
						}}
					/>
				}
			/>
			<ReactPlayer
				ref={playerRef}
				url={songUrl}
				playing={playing}
				volume={volume}
				muted={muted}
				onProgress={handleProgress}
				style={{ display: 'none' }}
			/>
		</>
	)
}

export { OpenedPlayer }
