import React from 'react'
import archive from '../../../../assets/archive1.svg'
import edit from '../../../../assets/edit.svg'
import del from '../../../../assets/trash-01.svg'
import style from '../style/tableSale.module.css'
import { useNavigate } from 'react-router-dom'

const TableBodySale = ({ data }) => {
	const navigate = useNavigate()
	const handleOpenSale = id => {
		navigate(`/sale/${id}`)
	}
	return (
		<tbody>
			{data.map(el => (
				<tr key={el.id}>
					<td>
						<div className={style.context_row} defaultValue={''} onClick={() => handleOpenSale(el.id)}>
							<input type='checkbox' />
							<div>
								<span className={style.row_text}>{el.nameSale}</span>
							</div>
						</div>
					</td>
					<td>
						<div className={style.context_row}>{el.purchase}</div>
					</td>
					<td>
						<div className={style.context_row}>
							<div className={style.context_row_text}>
								<span>{el.startDate}</span>
								<span>{el.endOfDate}</span>
							</div>
						</div>
					</td>
					<td>
						<div className={style.context_row}>{el.status}</div>
					</td>
					<td>
						<div className={style.context_row}>{el.receipts}</div>
					</td>
					<td>
						<div className={style.context_row}>{el.payments}</div>
					</td>
					<td>
						<div className={style.context_row}>{el.cashFlow}</div>
					</td>
					<td>
						<div className={style.context_row}>
							<img src={archive} alt='archive' />
							<img src={edit} alt='edit' />
							<img src={del} alt='del' />
						</div>
					</td>
				</tr>
			))}
		</tbody>
	)
}

export default TableBodySale
