import Image from 'next/image'
import cls from './style.module.scss'
import { ReactNode } from 'react'

type Props = {
	imageSrc: string
	trackNameLabel: string
	authorLabel: string
	rightTopControls: ReactNode
	timeline: ReactNode
	controlsPanel: ReactNode
	bottomAddon: ReactNode
}

function DesktopPlayerLayout(props: Props) {
	return (
		<div className={cls.DesktopPlayerLayout} id={'DesktopPlayerLayout'}>
			<div className={cls.DesktopPlayerLayout_controls}>
				<Image src={props.imageSrc} alt='' fill />
				<div className={cls.DesktopPlayerLayout_rightTopControls}>{props.rightTopControls}</div>
			</div>
			<div className={cls.DesktopPlayerLayout_info}>
				<p className={cls.DesktopPlayerLayout_infoName}>{props.trackNameLabel}</p>
				<p className={cls.DesktopPlayerLayout_infoAuthor}>{props.authorLabel}</p>
			</div>
			<div className={cls.DesktopPlayerLayout_controlsTimline}>{props.timeline}</div>
			<div className={cls.DesktopPlayerLayout_controlsPanel}>{props.controlsPanel}</div>
			<div className={cls.DesktopPlayerLayout_bottomAddon}>{props.bottomAddon}</div>
		</div>
	)
}

export { DesktopPlayerLayout }
