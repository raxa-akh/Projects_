import style from './style/tableExpenses.module.css'
import React from 'react'

import { dataforpurchase } from '../../../../mock/index'

const TableExpenses = () => {
	return (
		<>
			<div className={style.clue}>Расходы по сделке</div>
			<table className={style.content_table}>
				<thead>
					<tr>
						<th className={style.col_2}>
							<div className={style.col}> Дата</div>
						</th>
						<th className={style.col_3}>
							<div className={style.col}>Счёт</div>
						</th>
						<th className={style.col_4}>
							<div className={style.col}>Контрагент</div>
						</th>
						<th className={style.col_5}>
							<div className={style.col}>Статья</div>
						</th>
						<th className={style.col_6}>
							<div className={style.col_end}>Сумма</div>
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
								<div className={style.context_row}>{el.name}</div>
							</td>
							<td className={style.td_border}>
								<div className={style.context_row_end}>- {el.profit} ₽</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default TableExpenses
