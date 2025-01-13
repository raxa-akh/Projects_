import React from 'react'
import style from '../style/tableProject.module.css'

const TableHeadProject = () => {
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
					<div className={style.context_col}>Клиент</div>
				</th>
				<th className={style.col_5}>
					<div className={style.context_col}>Сумма сделки, ₽</div>
				</th>
				<th className={style.col_6}>
					<div className={style.context_col}>Поступило</div>
				</th>
				<th className={style.col_7}>
					<div className={style.context_col}>Отгружено</div>
				</th>
				<th className={style.col_8}>
					<div className={style.context_col}>Прибыль, ₽</div>
				</th>
				<th className={style.col_9}>
					<div></div>
				</th>
			</tr>
		</thead>
	)
}

export default TableHeadProject
