import React, { ReactElement, ReactNode, cloneElement, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import cls from './style.module.scss'
import Image from 'next/image'
import { ModalCodes } from '@/services/modal-service'
import { Modals } from '@/app/(modals)'
import { OrderForm } from '@/components/order-form/OrderForm'

type Props = {
	headerContent: ReactElement
	mainContent: ReactNode
	footerContent: ReactNode
	openedPlayer: ReactNode
	collapsedPlayer: ReactNode
	burgerMenu: ReactElement
}

function MainLayoutMobile(props: Props) {
	const { footerContent, headerContent, mainContent, collapsedPlayer, openedPlayer, burgerMenu } = props

	const [playerOpened, setPlayerOpened] = useState(false)
	const [burgerMenuOpened, setBurgerMenuOpened] = useState(false)

	useEffect(() => {
		if (playerOpened || burgerMenuOpened) {
			document.body.style.overflowY = 'hidden'
		} else if (!playerOpened && !burgerMenuOpened) {
			document.body.style.overflowY = ''
		}
	}, [playerOpened, burgerMenuOpened])

	useEffect(() => {
		return () => {
			document.body.style.overflowY = ''
		}
	}, [])

	return (
		<>
			<div id={'MainLayoutMobile_headerWrapper'} className={cls.MainLayoutMobile_headerWrapper}>
				<header className={cls.MainLayoutMobile_header}>
					{headerContent &&
						React.cloneElement(headerContent, {
							...headerContent.props,
							onToogleMenu: () => setBurgerMenuOpened(prev => !prev)
						})}
				</header>
			</div>
			<div className={cls.MainLayoutMobile_content}>
				<main className={cls.MainLayoutMobile_main}>
					<OrderForm />
					{mainContent}
				</main>
			</div>
			<div className={cls.MainLayoutMobile_footerWrapper}>
				<footer className={cls.MainLayoutMobile_footer}>{footerContent}</footer>
			</div>
			<Modals />
			<motion.div
				id={'MainLayoutMobile_playerSwiper'}
				className={cls.MainLayoutMobile_playerSwiper}
				style={{ zIndex: 10000 }}
				animate={
					playerOpened
						? {
								height: 'calc(100vh - 88px)'
						  }
						: {
								height: '101px'
						  }
				}
			>
				<motion.div
					className={cls.MainLayoutMobile_playerSwiperLine}
					onClick={() => setPlayerOpened(prev => !prev)}
					animate={
						playerOpened
							? {
									background: '#000'
							  }
							: {
									background: 'transparent'
							  }
					}
				>
					<div />
				</motion.div>
				<motion.aside
					className={cls.MainLayoutMobile_player}
					animate={{
						height: playerOpened ? 'calc(100vh - 88px - 21px)' : '80px',
						background: playerOpened ? '#091616' : '#0C0D0D'
					}}
				>
					<Image
						alt=''
						src='/assets/playerMobileBlur.svg'
						height={168}
						width={297}
						className={cls.MainLayoutMobile_blur}
					/>
					<Image
						alt=''
						src='/assets/playerMobileBlur.svg'
						height={168}
						width={297}
						className={cls.MainLayoutMobile_blur2}
					/>
					<Image
						alt=''
						src='/assets/playerMobileBlur2.svg'
						height={89}
						width={334}
						className={cls.MainLayoutMobile_blur3}
					/>
					{playerOpened ? openedPlayer : collapsedPlayer}
				</motion.aside>
			</motion.div>
			<motion.aside
				className={cls.MainLayoutMobile_burgerMenu}
				animate={
					burgerMenuOpened
						? {
								top: 88
						  }
						: {
								top: '-100%'
						  }
				}
			>
				{cloneElement(burgerMenu, {
					closeBurgerMenu: () => setBurgerMenuOpened(false)
				})}
			</motion.aside>
		</>
	)
}

export { MainLayoutMobile }
