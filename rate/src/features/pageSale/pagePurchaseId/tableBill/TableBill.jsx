import style from './style/tableBill.module.css'
import React from 'react'

import { dataforpurchase } from '../../../../mock/index'

const TableBill = () => {
	return (
		<>
			<div className={style.clue}>Список выставленных счетов вашим клиентам</div>
			<table className={style.content_table}>
				<thead>
					<tr>
						<th className={style.col_2}>
							<div className={style.col}> Дата</div>
						</th>
						<th className={style.col_3}>
							<div className={style.col}>Номер счета</div>
						</th>
						<th className={style.col_4}>
							<div className={style.col}>Контрагент</div>
						</th>
						<th className={style.col_5}>
							<div className={style.col_end}>Сумма</div>
						</th>
						<th className={style.col_6}>
							<div className={style.col_end}></div>
						</th>
					</tr>
				</thead>
				<tbody>
					{dataforpurchase.map(el => (
						<tr key={el.id}>
							<td>
								<div className={style.context_row_title}>{el.date}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>{el.name}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>{el.name}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row_end}>{el.name}</div>
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
											d='M7.99967 2.99833C8.45991 2.99833 8.83301 2.62524 8.83301 2.165C8.83301 1.70476 8.45991 1.33167 7.99967 1.33167C7.53944 1.33167 7.16634 1.70476 7.16634 2.165C7.16634 2.62524 7.53944 2.99833 7.99967 2.99833Z'
											stroke='#D0D5DD'
											stroke-width='1.67'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M13.833 2.99833C14.2932 2.99833 14.6663 2.62524 14.6663 2.165C14.6663 1.70476 14.2932 1.33167 13.833 1.33167C13.3728 1.33167 12.9997 1.70476 12.9997 2.165C12.9997 2.62524 13.3728 2.99833 13.833 2.99833Z'
											stroke='#D0D5DD'
											stroke-width='1.67'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M2.16634 2.99833C2.62658 2.99833 2.99967 2.62524 2.99967 2.165C2.99967 1.70476 2.62658 1.33167 2.16634 1.33167C1.7061 1.33167 1.33301 1.70476 1.33301 2.165C1.33301 2.62524 1.7061 2.99833 2.16634 2.99833Z'
											stroke='#D0D5DD'
											stroke-width='1.67'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default TableBill
