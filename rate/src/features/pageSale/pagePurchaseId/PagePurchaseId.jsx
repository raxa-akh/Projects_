import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { dataforpurchase } from '../../../mock/index.js'
import style from './style/pagePurchaseId.module.css'

import chevronLeft from '../../../assets/chevron_left.svg'

import TableItemsServices from './tableItemsServices/TableItemsServices.jsx'
import TablePayments from './tablePayments/TablePayments.jsx'
import TableSupplies from './tableSupplies/TableSupplies.jsx'
import TableFileComment from './tableFileComment/TableFileComment.jsx'
import PlusAction from '../../pageSales/plusAction/PlusAction.jsx'
import Modal from '../../../components/ui/modal/Modal'

const PagePurchaseId = () => {
	const [newProject, setNewProject] = useState(false)
	const [newPurchaseProject, setNewPurchaseProject] = useState(false)

	const handleNewProject = () => {
		setNewProject(true)
	}
	const navigate = useNavigate()
	const { id } = useParams()
	const [purchaseItem, setPurchaseItem] = useState({})
	const [activeTable, setActiveTable] = useState('itemsServices') // Добавлено состояние для активной таблицы

	useEffect(() => {
		const purchase = dataforpurchase.find(el => el.id === Number(id))
		setPurchaseItem(purchase)
	}, [id])

	const sortDate = dataforpurchase.sort((a, b) => new Date(b.date) - new Date(a.date))

	const formattedDataforpurchase = sortDate.map(item => {
		const dateObj = new Date(item.date)
		const now = new Date()
		const diffInDays = Math.floor((now - dateObj) / (1000 * 60 * 60 * 24))

		let formattedDate
		if (diffInDays === 0) {
			formattedDate = 'сегодня'
		} else if (diffInDays === 1) {
			formattedDate = 'вчера'
		} else {
			const options = { year: 'numeric', month: 'short', day: 'numeric' }
			formattedDate = dateObj.toLocaleDateString('ru-RU', options)
		}

		return {
			...item,
			date: formattedDate
		}
	})

	const purchaseedData = {}

	formattedDataforpurchase.forEach(item => {
		if (!purchaseedData[item.date]) {
			purchaseedData[item.date] = []
		}
		purchaseedData[item.date].push(item)
	})
	const [openFilter, setOpenFilter] = useState(false)
	const [modalOperation, setModalOperation] = useState(false)
	const handleOperation = () => {
		setModalOperation(prev => !prev)
	}

	return (
		<>
			{' '}
			{newProject && (
				<Modal visible={newProject} setVisible={setNewProject}>
					<PlusAction />
				</Modal>
			)}
			<div className={style.content_container}>
				<div className={style.container_purchaseId}>
					<div className={style.container_purchaseId_btn} onClick={() => navigate(-1)}>
						<img src={chevronLeft} alt='chevronLeft' />
						<span className={style.container_purchaseId_btn_text}>Все проекты</span>
					</div>
					<div className={style.container_content_purchase}>
						<div className={style.content_header_left}>
							<div>
								<h1>{purchaseItem.name}</h1>
							</div>
							<div className={style.content_header_left_date}>
								<div className={style.content_header_left_date_text}>
									<span>{purchaseItem.startDate}</span>-<span>{purchaseItem.endDate}</span>
								</div>
								<div>?</div>
							</div>
						</div>
					</div>
					<hr />
					<div className={style.container_bar}>
						<div className={style.container_bar_block_one}>
							<div className={style.container_bar_block_one_data}>
								<div>
									<span className={style.container_bar_block_one_data_title}>
										Сделка на сумму
									</span>
								</div>
								<div className={style.container_bar_block_one_data_main}>
									<div>
										<span className={style.container_bar_block_one_data_amount}>
											{purchaseItem.transAmount} <span>₽</span>
										</span>
									</div>
								</div>
								<div className={style.container_bar_block_one_status}>
									{purchaseItem.status}
									<svg
										width='13'
										height='8'
										viewBox='0 0 13 8'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M1.5 1.5L6.5 6.5L11.5 1.5'
											stroke='#6172F3'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</div>
							</div>
							<div className={style.vertical_divider}></div>
							<div className={style.container_bar_block_one_data}>
								<div>
									<div className={style.container_bar_block_info}>
										<div>
											Тип: <span>{purchaseItem.type}</span>
										</div>
										<br />
										<div>
											Клиент: <span>{purchaseItem.client}</span>
										</div>
										<br />
										<div>
											{' '}
											Дата: <span>{purchaseItem.date}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={style.container_bar_block_one}>
							<div className={style.container_bar_block_one_data}>
								<div>
									<span className={style.container_bar_block_one_data_title}>
										Поступления
									</span>
								</div>
								<div className={style.container_bar_block_one_data_main}>
									<div>
										<span className={style.container_bar_block_one_data_amount}>
											{purchaseItem.transAmount} <span>₽</span>
										</span>
									</div>
								</div>
								<div className={style.container_bar_block_one_status_amount_green}>
									Из {purchaseItem.transAmount} ₽
								</div>
							</div>
							<div className={style.vertical_divider}></div>
							<div className={style.container_bar_block_one_data}>
								<div>
									<span className={style.container_bar_block_one_data_title}>
										Отгрузки клиенту
									</span>
								</div>
								<div className={style.container_bar_block_one_data_main}>
									<div>
										<span className={style.container_bar_block_one_data_amount}>
											{purchaseItem.transAmount} <span>₽</span>
										</span>
									</div>
								</div>
								<div className={style.container_bar_block_one_status_amount}>
									Из {purchaseItem.transAmount} ₽
								</div>
							</div>
						</div>
					</div>

					<div className={style.table_control}>
						<div className={style.table_select_modal}>
							<div className={style.selection_modal}>
								<span
									className={`${style.select_item1} ${
										activeTable === 'itemsServices' ? style.select_item1_active : ''
									}`}
									onClick={() => setActiveTable('itemsServices')}
								>
									Товары и услуги
								</span>
								<span
									className={`${style.select_item2} ${
										activeTable === 'Payments' ? style.select_item2_active : ''
									}`}
									onClick={() => setActiveTable('Payments')}
								>
									Выплаты
								</span>
								<span
									className={`${style.select_item3} ${
										activeTable === 'Supplies' ? style.select_item3_active : ''
									}`}
									onClick={() => setActiveTable('Supplies')}
								>
									Поставки
								</span>
							</div>
							<div className={style.add_item_service} onClick={handleNewProject}>
								{activeTable !== 'Supplies' && activeTable !== 'fileComment' && (
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M5.99997 1.26221V10.7378M1.26217 6.00001H10.7378'
											stroke='#6172F3'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								)}
								{activeTable === 'itemsServices' && 'Добавить товар или услугу'}
								{activeTable === 'Payments' && 'Добавить выплату'}
								{activeTable === 'Supplies' && ''}
								{activeTable === 'fileComment' && ''}
							</div>
						</div>
						<div className={style.table_control_right_block}>
							<div className={style.table_positions}>
								4 позиции на <span>4000 ₽</span>
							</div>
							<div
								className={`${style.table_comments} ${
									activeTable === 'fileComment' ? style.table_comments_active : ''
								}`}
								onClick={() => setActiveTable('fileComment')}
							>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8.33329 12.5L5.77058 15.0947C5.41311 15.4566 5.23438 15.6376 5.08075 15.6504C4.94747 15.6614 4.81697 15.6079 4.72992 15.5063C4.62959 15.3893 4.62959 15.1349 4.62959 14.6262V13.3263C4.62959 12.8699 4.25585 12.5397 3.8043 12.4736V12.4736C2.71141 12.3135 1.85311 11.4552 1.69302 10.3623C1.66663 10.1821 1.66663 9.96706 1.66663 9.537V5.66663C1.66663 4.26649 1.66663 3.56643 1.93911 3.03165C2.17879 2.56124 2.56124 2.17879 3.03165 1.93911C3.56643 1.66663 4.26649 1.66663 5.66663 1.66663H11.8333C13.2334 1.66663 13.9335 1.66663 14.4683 1.93911C14.9387 2.17879 15.3211 2.56124 15.5608 3.03165C15.8333 3.56643 15.8333 4.26649 15.8333 5.66663V9.16663M15.8333 18.3333L14.0196 17.0724C13.7647 16.8951 13.6372 16.8065 13.4985 16.7437C13.3753 16.6879 13.2459 16.6473 13.1129 16.6228C12.9632 16.5952 12.8079 16.5952 12.4974 16.5952H11C10.0665 16.5952 9.59983 16.5952 9.24331 16.4135C8.92971 16.2538 8.67474 15.9988 8.51495 15.6852C8.33329 15.3287 8.33329 14.862 8.33329 13.9285V11.8333C8.33329 10.8999 8.33329 10.4332 8.51495 10.0766C8.67474 9.76304 8.92971 9.50807 9.24331 9.34828C9.59983 9.16663 10.0665 9.16663 11 9.16663H15.6666C16.6 9.16663 17.0668 9.16663 17.4233 9.34828C17.7369 9.50807 17.9918 9.76304 18.1516 10.0766C18.3333 10.4332 18.3333 10.8999 18.3333 11.8333V14.0952C18.3333 14.8718 18.3333 15.2601 18.2064 15.5663C18.0373 15.9747 17.7128 16.2992 17.3044 16.4683C16.9981 16.5952 16.6099 16.5952 15.8333 16.5952V18.3333Z'
										stroke='#1D2939'
										strokeWidth='1.67'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								Файлы и комментарии
							</div>
						</div>
					</div>

					{activeTable === 'itemsServices' && <TableItemsServices />}
					{activeTable === 'Payments' && <TablePayments />}
					{activeTable === 'Supplies' && <TableSupplies />}
					{activeTable === 'fileComment' && <TableFileComment />}
				</div>
			</div>
		</>
	)
}

export default PagePurchaseId
