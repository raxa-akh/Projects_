'use client'

import Image from 'next/image'
import cls from './style.module.scss'
import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Notifications } from '@/components/notifications/Notifications'

type Props = {
	onToogleMenu?: () => void
}

function MobileHeaderLayout(props: Props) {
	const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)

	const toggleNotifications = () => {
		setIsNotificationsOpen(!isNotificationsOpen)
	}

	const [notifications, setNotifications] = useState(false)

	const notificationsTogle = () => {
		setNotifications(!notifications)
	}

	return (
		<div className={cls.MobileHeaderLayout}>
			{notifications && <Notifications setIsNotificationsOpen={setIsNotificationsOpen} />}
			<button className={cls.MobileHeaderLayout_burgerMenuButton} onClick={props.onToogleMenu}>
				<svg width='26' height='18' viewBox='0 0 26 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M1 1.00134H25M1 9.00134H18.3333M1 17.0013H25'
						stroke='white'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</button>
			<Image src={'/assets/Logo.png'} height={64} width={64} alt='logo' className={cls.MobileHeaderLayout_logo} />
			<button onClick={() => notificationsTogle()} className={cls.MobileHeaderLayout_notificationsButton}>
				{!isNotificationsOpen ? (
					<svg width='22.5' height='25' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M9.95853 16.9974H17.2435C17.5272 17.013 17.8102 16.9571 18.0656 16.8348C18.321 16.7126 18.5402 16.5282 18.7024 16.2992C18.8646 16.0702 18.9643 15.8043 18.992 15.5267C19.0198 15.2492 18.9747 14.9693 18.8609 14.7137C18.4758 13.5713 16.9407 12.2011 16.9407 10.8529C16.9407 7.86038 16.9407 7.07289 15.4388 5.3131C14.9522 4.74723 14.3497 4.28823 13.6705 3.96595L12.8329 3.56695C12.6919 3.48425 12.5703 3.3732 12.4761 3.2411C12.3819 3.109 12.3172 2.95883 12.2863 2.80046C12.2026 2.26749 11.9155 1.78573 11.4832 1.45288C11.0509 1.12004 10.5058 0.961033 9.95853 1.00812C9.42111 0.97644 8.89095 1.14253 8.4716 1.47396C8.05224 1.80538 7.77381 2.27834 7.69068 2.80046C7.65304 2.96407 7.57919 3.11754 7.47437 3.25001C7.36955 3.38247 7.23632 3.49068 7.08414 3.56695L6.24653 3.96595C5.56771 4.28836 4.9656 4.74735 4.47932 5.3131C2.97847 7.07289 2.97847 7.86038 2.97847 10.8529C2.97847 12.2011 1.51292 13.4338 1.12782 14.6444C0.895683 15.3762 0.767314 16.9974 2.71103 16.9974H9.95853Z'
							stroke='white'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M12.9993 17C13.0088 17.5281 12.9247 18.053 12.7522 18.5431C12.5797 19.0332 12.3223 19.4784 11.9954 19.852C11.6685 20.2255 11.2789 20.5197 10.85 20.7168C10.4211 20.9139 9.9617 21.01 9.4995 20.9991C9.03726 21.0103 8.57782 20.9145 8.14884 20.7175C7.71986 20.5205 7.3302 20.2263 7.00333 19.8527C6.67646 19.479 6.41913 19.0337 6.24683 18.5435C6.07454 18.0532 5.99085 17.5282 6.00079 17'
							stroke='white'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				) : (
					<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M19.9482 27.4968H29.0543C29.409 27.5163 29.7627 27.4463 30.082 27.2936C30.4012 27.1408 30.6753 26.9103 30.878 26.624C31.0807 26.3378 31.2054 26.0054 31.2401 25.6584C31.2747 25.3115 31.2183 24.9616 31.0762 24.6421C30.5948 23.2141 28.6759 21.5013 28.6759 19.8161C28.6759 16.0755 28.6759 15.0911 26.7985 12.8914C26.1903 12.184 25.4372 11.6103 24.5882 11.2074L23.5412 10.7087C23.3649 10.6053 23.2129 10.4665 23.0951 10.3014C22.9773 10.1362 22.8965 9.94854 22.8579 9.75057C22.7532 9.08436 22.3943 8.48216 21.854 8.0661C21.3136 7.65005 20.6323 7.45129 19.9482 7.51015C19.2764 7.47055 18.6137 7.67817 18.0895 8.09245C17.5653 8.50673 17.2173 9.09792 17.1134 9.75057C17.0663 9.95508 16.974 10.1469 16.843 10.3125C16.7119 10.4781 16.5454 10.6133 16.3552 10.7087L15.3082 11.2074C14.4596 11.6104 13.707 12.1842 13.0991 12.8914C11.2231 15.0911 11.2231 16.0755 11.2231 19.8161C11.2231 21.5013 9.39115 23.0422 8.90977 24.5555C8.6196 25.4703 8.45914 27.4968 10.8888 27.4968H19.9482Z'
							fill='#1398A0'
							stroke='#1398A0'
							stroke-width='1.04'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M23.7491 27.5C23.761 28.1602 23.6559 28.8163 23.4403 29.4289C23.2246 30.0415 22.9028 30.598 22.4942 31.065C22.0856 31.5319 21.5986 31.8996 21.0624 32.146C20.5263 32.3924 19.9521 32.5125 19.3744 32.4989C18.7966 32.5129 18.2223 32.3932 17.6861 32.1469C17.1498 31.9006 16.6628 31.5329 16.2542 31.0658C15.8456 30.5988 15.5239 30.0421 15.3085 29.4293C15.0932 28.8165 14.9886 28.1602 15.001 27.5'
							stroke='#1398A0'
							stroke-width='1.04'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				)}
			</button>
			{/* @ts-ignore */}
			{isNotificationsOpen && <Notifications setIsNotificationsOpen={setIsNotificationsOpen} />}
		</div>
	)
}

export { MobileHeaderLayout }
