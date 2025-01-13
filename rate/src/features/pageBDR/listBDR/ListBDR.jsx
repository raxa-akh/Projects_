import React from 'react'
import { Link } from 'react-router-dom' // Импортируем Link из React Router
import style from './style/listbd.module.css'
import { dataforsale } from '../../../mock'

const ListBDR = () => {
	return (
		<div className={style.container}>
			<table className={style.content_table}>
				<thead>
					<tr>
						<th className={style.col_2}>
							<div className={style.col}>Название</div>
							<svg
								width='12'
								height='11'
								viewBox='0 0 12 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M5.99992 0.833313V10.1666M5.99992 10.1666L10.6666 5.49998M5.99992 10.1666L1.33325 5.49998'
									stroke='#344054'
									strokeWidth='1.33333'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</th>
						<th className={style.col_3}>
							<div className={style.col}>Валюта</div>
						</th>
						<th className={style.col_4}>
							<div className={style.col}>Юрлицо</div>
						</th>
						<th className={style.col_5}>
							<div className={style.col}>Проект</div>
						</th>
						<th className={style.col_5}>
							<div className={style.col}>Период</div>
						</th>
						<th className={style.col_5}>
							<div className={style.col}>Дата изменения</div>
						</th>
						<th className={style.col_6}>
							<div className={style.col_}>Кто изменил</div>
						</th>
						<th className={style.col_6}>
							<div className={style.col_end}></div>
						</th>
					</tr>
				</thead>
				<tbody>
					{dataforsale.map(el => (
						<tr key={el.id}>
							<td>
								<Link to={`/budget-income-expenses/${el.id}`}>
									<div className={style.context_row_title}>
										{el.date} <span>коментарий</span>
									</div>
								</Link>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>{el.name}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>{el.name}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>{el.name}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>{el.name}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>{el.name}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>{el.name}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row_end}>
									<svg
										width='16'
										height='4'
										viewBox='0 0 16 4'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M8.00016 2.83335C8.4604 2.83335 8.8335 2.46026 8.8335 2.00002C8.8335 1.53978 8.4604 1.16669 8.00016 1.16669C7.53993 1.16669 7.16683 1.53978 7.16683 2.00002C7.16683 2.46026 7.53993 2.83335 8.00016 2.83335Z'
											stroke='#D0D5DD'
											strokeWidth='1.67'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M13.8335 2.83335C14.2937 2.83335 14.6668 2.46026 14.6668 2.00002C14.6668 1.53978 14.2937 1.16669 13.8335 1.16669C13.3733 1.16669 13.0002 1.53978 13.0002 2.00002C13.0002 2.46026 13.3733 2.83335 13.8335 2.83335Z'
											stroke='#D0D5DD'
											strokeWidth='1.67'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M2.16683 2.83335C2.62707 2.83335 3.00016 2.46026 3.00016 2.00002C3.00016 1.53978 2.62707 1.16669 2.16683 1.16669C1.70659 1.16669 1.3335 1.53978 1.3335 2.00002C1.3335 2.46026 1.70659 2.83335 2.16683 2.83335Z'
											stroke='#D0D5DD'
											strokeWidth='1.67'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ListBDR
