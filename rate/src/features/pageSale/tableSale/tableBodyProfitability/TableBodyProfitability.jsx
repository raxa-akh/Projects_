import React, { useState } from 'react'
import style from '../tableBodyPurchase/style/tableBodyPurchase.module.css'
import archive from '../../../../assets/archive1.svg'
import edit from '../../../../assets/edit.svg'
import del from '../../../../assets/trash-01.svg'
import { useNavigate } from 'react-router-dom'

const TableBodyProfitability = ({ data }) => {
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
	const handleOpenSale = id => {
		navigate(`/sale/${id}`)
	}
	return (
		<tbody>
			{unpurchaseedData.map(item => (
				<tr key={item.id}>
					<td>
						<div className={style.context_row}>
							<input type='checkbox' />
							<div onClick={() => handleOpenSale(item.id)}>
								<span>{item.nameSale}</span>
							</div>
						</div>
					</td>
					<td>
						<div className={style.context_row}>
							<div className={style.context_row_text}>
								<span>{item.startDate}</span>
								<span>{item.endOfDate}</span>
							</div>
						</div>
					</td>
					<td>
						<div className={style.context_row}>{item.status}</div>
					</td>
					<td>
						<div className={style.context_row}>{item.receipts}</div>
					</td>
					<td>
						<div className={style.context_row}>{item.payments}</div>
					</td>
					<td>
						<div className={style.context_row}>{item.cashFlow}</div>
					</td>
					<td>
						<div className={style.context_row}>{}</div>
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
			{Object.keys(purchaseedData).map(purchase => (
				<React.Fragment key={purchase}>
					<tr onClick={() => handlePurchaseClick(purchase)}>
						<td colSpan='8'>
							<div className={style.context_row}>
								<input type='checkbox' />
								{purchase}
							</div>
						</td>
					</tr>
					{expandedRows[purchase] &&
						purchaseedData[purchase].map(account => (
							<tr key={account.id}>
								<td>
									<div className={style.context_row_purchase}>
										<input type='checkbox' />
										<div>
											<span>{account.nameSale}</span>
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
									<div className={style.context_row}>{}</div>
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

export default TableBodyProfitability
