import React from 'react'
import { useLocation } from 'react-router-dom'
import style from './style/tableProject.module.css'
import Button from '../../../components/ui/button/Button'
import TableHeadProject from './tableHeadProject/TableHeadProject'
import TableHeadPurchase from './tableHearPurchase/TableHeadPurchase'
import TableBodyProject from './tableBodyProject/TableBodyProject'
import TableBodyPurchase from './tableBodyPurchase/TableBodyPurchase'
import { Link } from 'react-router-dom'

const TableProject = () => {
	const location = useLocation()

	const data = [
		{
			id: 1,
			date: '05.05.1945',
			name: 'название 1',
			subname: 'подназвание',
			status: 'Новая',
			client: 'владимир',
			transAmount: '400 000',
			received: '100%',
			transfered: '50%',
			profit: '300 000',
			startDate: '1.02.2015',
			endDate: '01.08.2023'
		},
		{
			id: 5,
			date: '05.05.1945',
			name: 'название 1',
			subname: 'подназвание',
			status: 'В работе',
			client: 'владимир',
			transAmount: '400 000',
			received: '100%',
			transfered: '50%',
			profit: '300 000',
			startDate: '1.02.2015',
			endDate: '01.08.2023'
		},
		{
			id: 2,
			date: '05.05.1945',
			name: 'название 1',
			subname: 'подназвание',
			status: 'Новая',
			client: 'владимир',
			transAmount: '400 000',
			received: '100%',
			transfered: '50%',
			profit: '300 000',
			startDate: '1.02.2015',
			endDate: '01.08.2023'
		},
		{
			id: 3,
			date: '05.05.1945',
			name: 'название 1',
			subname: 'подназвание',
			status: 'Завершен',
			client: 'владимир',
			transAmount: '400 000',
			received: '100%',
			transfered: '50%',
			profit: '300 000',
			startDate: '1.02.2015',
			endDate: '01.08.2023'
		}
	]

	const isPurchase = location.pathname.includes('/purchase')
	const isSales = location.pathname.includes('/sales')

	return (
		<div className={style.block}>
			<div className={style.btn_table}>
				<Link to='/sales'>
					<Button
						backgroundColor={isSales ? '#fff' : '#F9FAFB'}
						color='rgba(52, 64, 84, 1)'
						border='1px solid #D0D5DD'
						padding='10px 16px'
						fontSize='14px'
						borderRadius='8px 0px 0px 0px'
					>
						Продажи
					</Button>
				</Link>
				<Link to='/purchase'>
					<Button
						backgroundColor={isPurchase ? '#fff' : '#F9FAFB'}
						color='rgba(52, 64, 84, 1)'
						border='1px solid #D0D5DD'
						padding='10px 16px'
						fontSize='14px'
						borderRadius='0px 8px 0px 0px'
					>
						Закупки
					</Button>
				</Link>
			</div>
			<table className={style.conteiner_table}>
				{isSales ? (
					<>
						<TableHeadProject />
						<TableBodyProject data={data} />
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

export default TableProject
