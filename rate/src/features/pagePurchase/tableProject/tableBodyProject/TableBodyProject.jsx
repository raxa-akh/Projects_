import React from 'react'
import style from '../style/tableProject.module.css'
import { useNavigate } from 'react-router-dom'

const TableBodyProject = ({ data }) => {
	const navigate = useNavigate()
	const handleOpenProject = id => {
		navigate(`/sale/${id}`)
	}

	const getStatusClass = status => {
		switch (status) {
			case 'Новая':
				return style.row_text_new
			case 'В работе':
				return style.row_text_work
			case 'Завершен':
				return style.row_text_end
			default:
				return ''
		}
	}

	return (
		<tbody>
			{data.map(el => (
				<tr key={el.id}>
					<td>
						<div className={style.context_row}>
							<div className={style.context_row_text_date}>
								<input type='checkbox' />
								<span>{el.date}</span>
							</div>
						</div>
					</td>
					<td>
						<div className={style.context_row} onClick={() => handleOpenProject(el.id)}>
							<div>
								<span className={style.row_text}>{el.name}</span>
							</div>
						</div>
					</td>
					<td>
						<div className={style.context_row}>
							<span className={`${style.row_text} ${getStatusClass(el.status)}`}>{el.status}</span>
						</div>
					</td>
					<td>
						<div className={style.context_row}>{el.client}</div>
					</td>
					<td>
						<div className={style.context_row}>{el.transAmount}</div>
					</td>
					<td>
						<div className={style.context_row}>{el.received}</div>
					</td>
					<td>
						<div className={style.context_row}>{el.transfered}</div>
					</td>
					<td>
						<div className={style.context_row_green}>{el.profit}</div>
					</td>
					<td>
						<div className={style.context_row}>
							<svg
								width='16'
								height='4'
								viewBox='0 0 16 4'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M7.66679 2.99835C8.12703 2.99835 8.50012 2.62525 8.50012 2.16501C8.50012 1.70478 8.12703 1.33168 7.66679 1.33168C7.20655 1.33168 6.83346 1.70478 6.83346 2.16501C6.83346 2.62525 7.20655 2.99835 7.66679 2.99835Z'
									stroke='#D0D5DD'
									strokeWidth='1.67'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M13.5001 2.99835C13.9604 2.99835 14.3335 2.62525 14.3335 2.16501C14.3335 1.70478 13.9604 1.33168 13.5001 1.33168C13.0399 1.33168 12.6668 1.70478 12.6668 2.16501C12.6668 2.62525 13.0399 2.99835 13.5001 2.99835Z'
									stroke='#D0D5DD'
									strokeWidth='1.67'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M1.83346 2.99835C2.29369 2.99835 2.66679 2.62525 2.66679 2.16501C2.66679 1.70478 2.29369 1.33168 1.83346 1.33168C1.37322 1.33168 1.00012 1.70478 1.00012 2.16501C1.00012 2.62525 1.37322 2.99835 1.83346 2.99835Z'
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
	)
}

export default TableBodyProject
