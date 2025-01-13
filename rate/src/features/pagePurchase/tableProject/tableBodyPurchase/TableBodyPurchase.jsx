import React, { useState } from 'react'
import archive from '../../../../assets/archive1.svg'
import edit from '../../../../assets/edit.svg'
import del from '../../../../assets/trash-01.svg'
import style from './style/tableBodyPurchase.module.css'
import { useNavigate } from 'react-router-dom'

const TableBodyPurchase = ({ data }) => {
	const { purchaseedData, unpurchaseedData } = sortByPurchase(data)

	function sortByPurchase(dataArray, selectedValue = 'purchase') {
		const purchaseedData = {}
		const unpurchaseedData = []

		dataArray.forEach(item => {
			if (item[selectedValue]) {
				if (!purchaseedData[item[selectedValue]]) {
					purchaseedData[item[selectedValue]] = []
				}
				purchaseedData[item[selectedValue]].push(item)
			} else {
				unpurchaseedData.push(item)
			}
		})

		return { purchaseedData, unpurchaseedData }
	}
	const [expandedRows, setExpandedRows] = useState({})
	const handlePurchaseClick = purchaseId => {
		setExpandedRows(prevExpandedRows => ({
			...prevExpandedRows,
			[purchaseId]: !prevExpandedRows[purchaseId]
		}))
	}
	const navigate = useNavigate()
	const handleOpenProject = id => {
		navigate(`/purchase/${id}`)
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
			{unpurchaseedData.map(item => (
				<tr key={item.id}>
					<td>
						<div className={style.context_row}>
							<div className={style.context_row_text_date}>
								<input type='checkbox' />
								<span>{item.date}</span>
							</div>
						</div>
					</td>
					<td>
						<div className={style.context_row}>
							<div onClick={() => handleOpenProject(item.id)}>
								<span className={style.row_text}>{item.name}</span>
								<br></br>
								<span className={style.row_text2}>{item.subname}</span>
							</div>
						</div>
					</td>

					<td>
						<div className={style.context_row}>
							<span className={`${style.row_text} ${getStatusClass(item.status)}`}>
								{item.status}
							</span>
						</div>
					</td>
					<td>
						<div className={style.context_row}>{item.client}</div>
					</td>
					<td>
						<div className={style.context_row}>{item.transAmount}</div>
					</td>
					<td>
						<div className={style.context_row}>{item.transfered}</div>
					</td>
					<td>
						<div className={style.context_row}>{item.received}</div>
					</td>

					<td>
						<div className={style.context_row}>
							<svg
								width='16'
								height='5'
								viewBox='0 0 16 5'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M8.33341 3.32833C8.79365 3.32833 9.16675 2.95523 9.16675 2.49499C9.16675 2.03476 8.79365 1.66166 8.33341 1.66166C7.87318 1.66166 7.50008 2.03476 7.50008 2.49499C7.50008 2.95523 7.87318 3.32833 8.33341 3.32833Z'
									stroke='#D0D5DD'
									stroke-width='1.67'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M14.1667 3.32833C14.627 3.32833 15.0001 2.95523 15.0001 2.49499C15.0001 2.03476 14.627 1.66166 14.1667 1.66166C13.7065 1.66166 13.3334 2.03476 13.3334 2.49499C13.3334 2.95523 13.7065 3.32833 14.1667 3.32833Z'
									stroke='#D0D5DD'
									stroke-width='1.67'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M2.50008 3.32833C2.96032 3.32833 3.33341 2.95523 3.33341 2.49499C3.33341 2.03476 2.96032 1.66166 2.50008 1.66166C2.03984 1.66166 1.66675 2.03476 1.66675 2.49499C1.66675 2.95523 2.03984 3.32833 2.50008 3.32833Z'
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
			{Object.keys(purchaseedData).map(purchase => (
				<React.Fragment key={purchase}>
					<tr onClick={() => handlePurchaseClick(purchase)}>
						<td colSpan='8'>
							<div className={style.context_row}>
								<input type='checkbox' />
								<span className={style.row_purchase_text}>{purchase}</span>
							</div>
						</td>
					</tr>
					{expandedRows[purchase] &&
						purchaseedData[purchase].map(account => (
							<tr key={account.id}>
								<td>
									<div className={style.context_row_purchase}>
										<input type='checkbox' />
										<div onClick={() => handleOpenProject(account.id)}>
											<span className={style.row_text}>{account.nameProject}</span>
										</div>
									</div>
								</td>
								<td>
									<div className={style.context_row}>
										<div className={style.context_row_text}>
											<span>{account.startDate}</span>
											<span>{account.endOfDate}</span>
										</div>
									</div>
								</td>
								<td>
									<div className={style.context_row}>{account.status}</div>
								</td>
								<td>
									<div className={style.context_row}>{account.receipts}</div>
								</td>
								<td>
									<div className={style.context_row}>{account.payments}</div>
								</td>
								<td>
									<div className={style.context_row}>{account.cashFlow}</div>
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
				</React.Fragment>
			))}
		</tbody>
	)
}

export default TableBodyPurchase
