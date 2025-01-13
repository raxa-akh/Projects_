import style from './style/tableItemsServices.module.css'
import React from 'react'
import { useState } from 'react'
import { dataforpurchase } from '../../../../mock/index'

const TableItemsServices = ({ purchaseedData, handlePurchaseClick, expandedRows }) => {
	return (
		<>
			<div className={style.clue}>Выбирайте и редактируйте товары и услуги</div>
			<table className={style.content_table}>
				<thead>
					<tr>
						<th className={style.col_2}>
							<div className={style.col}>
								{' '}
								<input type='checkbox' />
								Наименование товара/услуги
							</div>
						</th>
						<th className={style.col_3}>
							<div className={style.col_end}>Кол-во</div>
						</th>
						<th className={style.col_4}>
							<div className={style.col_end}>Единица</div>
						</th>
						<th className={style.col_5}>
							<div className={style.col_end}>Цена за ед.</div>
						</th>
						<th className={style.col_6}>
							<div className={style.col_end}>Скидка</div>
						</th>
						<th className={style.col_7}>
							<div className={style.col_end}>Сумма</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{dataforpurchase.map(el => (
						<tr key={el.id}>
							<td>
								<div className={style.context_row_title}>
									<input type='checkbox' />
									{el.name}
								</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>
									<input type='text' name='count' id='count' placeholder='1' />
								</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>
									<input type='text' name='count' id='count' placeholder='Ч' />
								</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>
									<input type='text' name='count' id='count' placeholder='0' />
								</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row}>
									<input type='text' name='count' id='count' placeholder='0%' />
								</div>
							</td>
							<td>
								<div className={style.context_row_end}>{el.received}</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default TableItemsServices
