import React, { useState } from 'react'
import style from './style/tableSale.module.css'
import Button from '../../../components/ui/button/Button'
import TableHeadSale from './tableHeadSale/TableHeadSale'
import TableHeadPurchase from './tableHearPurchase/TableHeadPurchase'
import TableBodySale from './tableBodySale/TableBodySale'
import TableBodyPurchase from './tableBodyPurchase/TableBodyPurchase'
import TableHeadProfitability from './tableHeadProfitability/TableHeadProfitability'
import TableBodyProfitability from './tableBodyProfitability/TableBodyProfitability'

const TableSale = ({ selectedValue }) => {
	const data = [
		{
			id: 1,
			nameSale: 'SEO для курсов ИП Ларин',
			purchase: 'Группа1',
			startDate: '01.03.2023',
			endOfDate: '05.05.2024',
			status: 'в работе',
			receipts: '0',
			payments: '-1000',
			cashFlow: '0000'
		},
		{
			id: 5,
			nameSale: 'SEO для курсов ИП Ларин',
			purchase: 'Группа1',
			startDate: '01.03.2023',
			endOfDate: '05.05.2024',
			status: 'в работе',
			receipts: '0',
			payments: '-1000',
			cashFlow: '0000'
		},
		{
			id: 2,
			nameSale: 'SEO для курсов ИП Ларин',
			purchase: 'Группа2',
			startDate: '01.03.2023',
			endOfDate: '05.05.2024',
			status: 'в работе',
			receipts: '0',
			payments: '-1000',
			cashFlow: '0000'
		},
		{
			id: 3,
			nameSale: 'SEO для курсов ИП Ларин',
			purchase: 'Группа3',
			startDate: '01.03.2023',
			endOfDate: '05.05.2024',
			status: 'в работе',
			receipts: '0',
			payments: '-1000',
			cashFlow: '0000'
		},
		{
			id: 4,
			nameSale: 'SEO для курсов ИП Ларин',
			purchase: '',
			startDate: '01.03.2023',
			endOfDate: '05.05.2024',
			status: 'в работе',
			receipts: '0',
			payments: '-1000',
			cashFlow: '0000'
		}
	]
	const [btnSale, setBtnSale] = useState(true)
	const [btnPurchase, setBtnPurchase] = useState(false)

	const handleClickPurchase = () => {
		setBtnSale(false)
		setBtnPurchase(true)
	}
	const handleClickSale = () => {
		setBtnSale(true)
		setBtnPurchase(false)
	}

	if (selectedValue === 'cash') {
		return (
			<div className={style.block}>
				<div className={style.btn_table}>
					<Button
						backgroundColor='rgba(255, 255, 255, 1)'
						color='rgba(52, 64, 84, 1)'
						border='1px solid #D0D5DD'
						padding='10px 16px'
						fontSize='14px'
						borderRadius='8px 0px 0px 0px'
						lineHeight='20px'
						onClick={handleClickSale}
					>
						Проекты
					</Button>
					<Button
						backgroundColor='rgba(255, 255, 255, 1)'
						color='rgba(52, 64, 84, 1)'
						border='1px solid #D0D5DD'
						padding='10px 16px'
						fontSize='14px'
						borderRadius='0px 8px 0px 0px'
						lineHeight='20px'
						onClick={handleClickPurchase}
					>
						Группы
					</Button>
				</div>
				<table className={style.conteiner_table}>
					{btnSale && (
						<>
							<TableHeadProfitability />
							<TableBodySale data={data} />
						</>
					)}
					{btnPurchase && (
						<>
							<TableHeadProfitability />
							<TableBodyProfitability data={data} />
						</>
					)}
				</table>
			</div>
		)
	}

	return (
		<div className={style.block}>
			<div className={style.btn_table}>
				<Button
					backgroundColor='rgba(255, 255, 255, 1)'
					color='rgba(52, 64, 84, 1)'
					border='1px solid #D0D5DD'
					padding='10px 16px'
					fontSize='14px'
					borderRadius='8px 0px 0px 0px'
					onClick={handleClickSale}
				>
					Проекты
				</Button>
				<Button
					backgroundColor='rgba(255, 255, 255, 1)'
					color='rgba(52, 64, 84, 1)'
					border='1px solid #D0D5DD'
					padding='10px 16px'
					fontSize='14px'
					borderRadius='0px 8px 0px 0px'
					onClick={handleClickPurchase}
				>
					Группы
				</Button>
			</div>
			<table className={style.conteiner_table}>
				{btnSale ? (
					<>
						<TableHeadSale />
						<TableBodySale data={data} />
					</>
				) : (
					<>
						<TableHeadPurchase />
						<TableBodyPurchase data={data} />
					</>
				)}
			</table>
		</div>
	)
}

export default TableSale
