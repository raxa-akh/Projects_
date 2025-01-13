'use client'

import React, { useState, useRef } from 'react'
import style from './notifications.module.scss'
import Image from 'next/image'
import elipseImg from '../icons/elipse.svg'
import elipse2Img from '../icons/elipse2.svg'
import podcast from '../icons/podcast.png'
import deleteIcon from '../icons/delete2.svg'
import xcircle from '../icons/x-circle.svg'
import { useForeignClickOrFocus } from '@/hooks/use-foreign-click-or-focus'

type Props = {
	setIsNotificationsOpen: (a: boolean) => void
}

const Notifications = (props: Props) => {
	const [isToggled, setIsToggled] = useState(false)
	const [showMore, setShowMore] = useState(false)
	const [showDeleteAll, setShowDeleteAll] = useState(false)
	const ref = useRef(null)

	const handleToggle = () => {
		setIsToggled(!isToggled)
	}

	const handleShowMore = () => {
		setShowMore(true)
	}

	const handleShowDeleteAll = () => {
		setShowDeleteAll(!showDeleteAll)
	}

	useForeignClickOrFocus([ref], () => props.setIsNotificationsOpen(false))

	return (
		<div ref={ref} className={`${style.notifications_wrap} ${isToggled && showMore ? style.expanded : ''}`}>
			<Image src={elipseImg} className={style.elipse} alt='Elipse' />
			<Image src={elipse2Img} className={style.elipse2} alt='Elipse2' />
			<div className={style.notifications_head}>
				<p>Уведомления</p>
				<div className={`${style.toggle_switch} ${isToggled ? style.toggled : ''}`} onClick={handleToggle}>
					<div className={style.toggle_circle}></div>
				</div>
			</div>

			{!isToggled ? (
				<div className={style.notifications_content}>
					<div className={style.empty_not}>
						<h3>Уведомлений пока нет</h3>
						<p>
							Для получения уведомлений о новых <br /> подкастах и видео эфирах необходимо <br />
							включить функцию уведомлений.
						</p>
					</div>
				</div>
			) : (
				<div className={style.notifications}>
					<div className={style.notifications_control}>
						<p>Новые</p>
						<svg
							width='15'
							height='4'
							viewBox='0 0 15 4'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							onClick={handleShowDeleteAll}
						>
							<path
								d='M3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2Z'
								stroke='white'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2C7 2.55228 7.44772 3 8 3C8.55228 3 9 2.55228 9 2Z'
								stroke='white'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2C12 2.55228 12.4477 3 13 3C13.5523 3 14 2.55228 14 2Z'
								stroke='white'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						{showDeleteAll && (
							<div className={style.delete_all}>
								<Image src={xcircle} alt='x' onClick={handleShowDeleteAll} />
								<p>Удалить все уведомления</p>
							</div>
						)}
					</div>
					<ul>
						{Array(4)
							.fill(null)
							.map((_, index) => (
								<li key={index}>
									<div className={style.notification}>
										<Image src={podcast} alt='podcast' />
										<label>
											<p>Тут такое дело</p>
											<span>Lorem Ipsum is simply dummy text of the printin</span>
										</label>
										<div className={style.delete}>
											<div>
												<Image src={deleteIcon} alt='delete' />
											</div>
										</div>
									</div>
								</li>
							))}
						{isToggled && !showMore && (
							<div className={style.show_more} onClick={handleShowMore}>
								<p>Показать больше</p>
							</div>
						)}
					</ul>
					{showMore && (
						<>
							<div className={style.notifications_control}>
								<p>Ранее</p>
							</div>
							<ul>
								{Array(20)
									.fill(null)
									.map((_, index) => (
										<li key={index}>
											<div className={style.notification}>
												<Image src={podcast} alt='podcast' />
												<label>
													<p>Тут такое дело</p>
													<span>
														Lorem Ipsum is simply dummy text of the
														printin
													</span>
												</label>
												<div className={style.delete}>
													<div>
														<Image src={deleteIcon} alt='delete' />
													</div>
												</div>
											</div>
										</li>
									))}
							</ul>
						</>
					)}
				</div>
			)}

			{isToggled && !showMore && (
				<div className={style.show_more} onClick={handleShowMore}>
					<p>Показать больше</p>
				</div>
			)}
		</div>
	)
}

export { Notifications }
