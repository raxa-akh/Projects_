import style from './style/tableShipment.module.css'
import React from 'react'

import { dataforsale } from '../../../../mock/index'

const TableShipment = () => {
	return (
		<>
			<div className={style.clue}>Чтобы добавить новую отгрузку, перейдите в Товары и услуги</div>
			<table className={style.content_table}>
				<thead>
					<tr>
						<th className={style.col_2}>
							<div className={style.col}> Дата</div>
						</th>
						<th className={style.col_3}>
							<div className={style.col}>Юрлицо</div>
						</th>
						<th className={style.col_4}>
							<div className={style.col}>Контрагент</div>
						</th>
						<th className={style.col_5}>
							<div className={style.col}>Состав</div>
						</th>
						<th className={style.col_6}>
							<div className={style.col_end}>Сумма</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{dataforsale.map(el => (
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
								<div className={style.context_row_end}>+ {el.profit} ₽</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default TableShipment
