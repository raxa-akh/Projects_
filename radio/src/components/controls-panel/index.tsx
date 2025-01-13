import { BackTo20SecondsIcon, BackToLiveIcon, BackToStartIcon, NextTo20SecondsIcon, PauseIcon } from '../icons'
import { PlayIcon } from '../icons/play-icon'
import cls from './style.module.scss'

type Props = {
	onTogglePause?: () => void
	onSetStart?: () => void
	onSetBack?: () => void
	onSetNext?: () => void
	onSetLive?: () => void
	paused: boolean
}

function ControlsPanel(props: Props) {
	return (
		<div className={cls.ControlsPanel}>
			<button className={cls.ControlsPanel_button} onClick={props.onSetStart}>
				<BackToStartIcon />
			</button>
			<button className={cls.ControlsPanel_button} onClick={props.onSetBack}>
				<BackTo20SecondsIcon />
			</button>
			<button className={cls.ControlsPanel_button} onClick={props.onTogglePause}>
				{props.paused ? <PlayIcon size={60} /> : <PauseIcon />}
			</button>
			<button className={cls.ControlsPanel_button} onClick={props.onSetNext}>
				<NextTo20SecondsIcon />
			</button>
			<button className={cls.ControlsPanel_button} onClick={props.onSetLive}>
				<BackToLiveIcon />
			</button>
		</div>
	)
}

export { ControlsPanel }
