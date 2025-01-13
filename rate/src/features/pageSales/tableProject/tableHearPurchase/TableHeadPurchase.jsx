import React from 'react'
import style from './style/tableHeadPurchase.module.css'

const TableHeadPurchase = () => {
	return (
		<thead>
			<tr>
				<th className={style.col_1}>
					<div className={style.context_col}>
						<input type='checkbox' />
						<div>Дата</div>
					</div>
				</th>
				<th className={style.col_2}>
					<div className={style.context_col}>Название</div>
				</th>
				<th className={style.col_3}>
					<div className={style.context_col}>Статус</div>
				</th>
				<th className={style.col_4}>
					<div className={style.context_col}>Поставщик</div>
				</th>
				<th className={style.col_5}>
					<div className={style.context_col}>Сумма сделки, ₽</div>
				</th>
				<th className={style.col_6}>
					<div className={style.context_col}>Выплачено</div>
				</th>
				<th className={style.col_7}>
					<div className={style.context_col}>Поставлено</div>
				</th>
				<th className={style.col_8}>
					<div></div>
				</th>
			</tr>
		</thead>
	)
}

export default TableHeadPurchase
