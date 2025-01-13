'use client'

import { Range } from 'react-range'
import classNames from 'classnames'
import cls from './style.module.scss'
import { useState, useEffect } from 'react'

type Props = {
	isLive?: boolean
	duration: number
	currentTime: number
	onSeek: (amount: number) => void
}

function Timeline(props: Props) {
	const [value, setValue] = useState([0])

	useEffect(() => {
		setValue([(props.currentTime / props.duration) * 100])
	}, [props.currentTime, props.duration])

	const handleChange = (values: number[]) => {
		setValue(values)
		props.onSeek(values[0] / 100)
	}

	return (
		<div className={classNames(cls.Timeline, 'timeline')}>
			<Range
				step={0.1}
				min={0}
				max={100}
				values={value}
				onChange={handleChange}
				renderTrack={({ props, children }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: '6px',
							width: '100%',
							backgroundColor: '#1C1C1C',
							borderRadius: 10,
							position: 'relative'
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: 0,
								bottom: 0,
								borderRadius: 10,
								height: '6px',
								left: 0,
								backgroundColor: '#1BB8BD',
								width: value[0] + '%'
							}}
						>
							{children}
						</div>
					</div>
				)}
				renderThumb={({ props }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: '16px',
							width: '16px',
							backgroundColor: '#1BB8BD',
							borderRadius: '50%',
							position: 'absolute',
							top: '50%',
							right: 0,
							transform: 'translate(50%,-50%)'
						}}
						className={cls.thumb}
					/>
				)}
			/>
			<div className={cls.Timeline_time}>
				<p>
					{Math.floor(props.currentTime / 60)}:{('0' + Math.floor(props.currentTime % 60)).slice(-2)}
				</p>
				<p>
					{'-' + Math.floor((props.duration - props.currentTime) / 60)}:
					{('0' + Math.floor((props.duration - props.currentTime) % 60)).slice(-2)}
				</p>
			</div>
		</div>
	)
}

export { Timeline }
