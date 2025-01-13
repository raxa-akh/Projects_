import React from 'react'
import style from '../style/tableSale.module.css'

const TableHeadProfitability = () => {
	return (
		<thead>
			<tr>
				<th className={style.col_1}>
					<div className={style.context_col}>
						<input type='checkbox' />
						<div>Название проекта</div>
					</div>
				</th>
				<th className={style.col_2}>
					<div className={style.context_col}>Начало/Конец</div>
				</th>
				<th className={style.col_3}>
					<div className={style.context_col}>Статус</div>
				</th>
				<th className={style.col_4}>
					<div className={style.context_col}>Доходы, ₽</div>
				</th>
				<th className={style.col_5}>
					<div className={style.context_col}>Расходы, ₽</div>
				</th>
				<th className={style.col_6}>
					<div className={style.context_col}>Прибыль, ₽</div>
				</th>
				<th className={style.col_7}>
					<div className={style.context_col}>Рентабельность %</div>
				</th>
				<th className={style.col_8}>
					<div></div>
				</th>
			</tr>
		</thead>
	)
}

export default TableHeadProfitability
