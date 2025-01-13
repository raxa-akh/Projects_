import style from './style/tableFileComment.module.css'
import React from 'react'

import { dataforpurchase } from '../../../../mock/index'

const TableFileComment = () => {
	return (
		<>
			<div className={style.files_and_comments}>
				<div className={style.comment_place}></div>
				<div className={style.comment_input_wrap}>
					<div className={style.comment_input}>
						<svg
							width='11'
							height='22'
							viewBox='0 0 11 22'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9.5 5.7499V16.3299C9.5 18.4199 7.97 20.2799 5.89 20.4799C3.5 20.7099 1.5 18.8399 1.5 16.4999V4.1399C1.5 2.8299 2.44 1.6399 3.74 1.5099C5.24 1.3599 6.5 2.5299 6.5 3.9999V14.4999C6.5 15.0499 6.05 15.4999 5.5 15.4999C4.95 15.4999 4.5 15.0499 4.5 14.4999V5.7499C4.5 5.3399 4.16 4.9999 3.75 4.9999C3.34 4.9999 3 5.3399 3 5.7499V14.3599C3 15.6699 3.94 16.8599 5.24 16.9899C6.74 17.1399 8 15.9699 8 14.4999V4.1699C8 2.0799 6.47 0.219902 4.39 0.0199019C2.01 -0.210098 0 1.6599 0 3.9999V16.2699C0 19.1399 2.1 21.7099 4.96 21.9799C8.25 22.2799 11 19.7199 11 16.4999V5.7499C11 5.3399 10.66 4.9999 10.25 4.9999C9.84 4.9999 9.5 5.3399 9.5 5.7499Z'
								fill='#6172F3'
							/>
						</svg>
						<input type='text' name='comment' id='comment' placeholder='Написать коментарий' />
					</div>
					<svg width='33' height='30' viewBox='0 0 33 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.66634 29.0001L31.7497 16.5334C33.0997 15.9501 33.0997 14.0501 31.7497 13.4668L2.66634 1.00011C1.56634 0.516776 0.349674 1.33344 0.349674 2.51678L0.333008 10.2001C0.333008 11.0334 0.949674 11.7501 1.78301 11.8501L25.333 15.0001L1.78301 18.1334C0.949674 18.2501 0.333008 18.9668 0.333008 19.8001L0.349674 27.4834C0.349674 28.6668 1.56634 29.4834 2.66634 29.0001Z'
							fill='#6172F3'
						/>
					</svg>
				</div>
			</div>
		</>
	)
}

export default TableFileComment
