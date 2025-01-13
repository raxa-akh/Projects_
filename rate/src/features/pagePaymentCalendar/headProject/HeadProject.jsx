import React, { useState } from 'react'
import style from './style/headProject.module.css'

const HeadProject = () => {
	return (
		<div className={style.container_head_status_bar}>
			<div className={style.container_head}>
				<div className={style.container_head_block}>
					<div className={style.container_head_block_text}>
						<h1>
							Платежный календарь{' '}
							<svg
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M6.57496 6.50002C6.77088 5.94308 7.15759 5.47344 7.66659 5.1743C8.17559 4.87515 8.77404 4.7658 9.35594 4.86561C9.93784 4.96543 10.4656 5.26796 10.8459 5.71963C11.2261 6.1713 11.4342 6.74296 11.4333 7.33335C11.4333 9.00002 8.93329 9.83335 8.93329 9.83335M8.99996 13.1667H9.00829M17.3333 9.00002C17.3333 13.6024 13.6023 17.3334 8.99996 17.3334C4.39759 17.3334 0.666626 13.6024 0.666626 9.00002C0.666626 4.39765 4.39759 0.666687 8.99996 0.666687C13.6023 0.666687 17.3333 4.39765 17.3333 9.00002Z'
									stroke='#98A2B3'
									stroke-width='1.33333'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</h1>
						<span className={style.today}>Сегодня</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeadProject
