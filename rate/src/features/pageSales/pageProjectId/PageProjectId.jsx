import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../../../mock/index.js'
import { arrDate } from '../../../mock/index.js'
import style from './style/pageProjectId.module.css'
import plus from '../../../assets/plus.svg'
import Button from '../../../components/ui/button/Button.jsx'
import FilterBlockProjectId from '../../../components/filterBlock/filterBlockProjectId/FilterBlockProjectId.jsx'
import chevronLeft from '../../../assets/chevron_left.svg'
import FilterProject from '../filterProjext/FilterProject.jsx'
import Modal from '../../../components/ui/modal/Modal.jsx'
import ModalOperationCreate from '../../pageOperations/modalOperation/ModalOperationCreate.jsx'

const PageProjectId = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const [projectItem, setProjectItem] = useState({})
	const [expandedRows, setExpandedRows] = useState({})

	const handlePurchaseClick = date => {
		setExpandedRows(prevExpandedRows => ({
			...prevExpandedRows,
			[date]: !prevExpandedRows[date]
		}))
	}

	useEffect(() => {
		const project = data.find(el => el.id === Number(id))
		setProjectItem(project)
	}, [id])

	const sortDate = arrDate.sort((a, b) => new Date(b.date) - new Date(a.date))

	const formattedArrDate = sortDate.map(item => {
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

	formattedArrDate.forEach(item => {
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
		<div className={style.content_container}>
			<div className={style.container_projectId}>
				<div className={style.container_projectId_btn} onClick={() => navigate(-1)}>
					<img src={chevronLeft} alt='chevronLeft' />
					<span className={style.container_projectId_btn_text}>Все проекты</span>
				</div>
				<div className={style.container_content_project}>
					<div className={style.content_header_left}>
						<div>
							<h1>{projectItem.nameProject}</h1>
						</div>
						<div className={style.content_header_left_date}>
							<div className={style.content_header_left_date_text}>
								<span>{projectItem.startDate}</span>-<span>{projectItem.endDate}</span>
							</div>
							<div>{projectItem.status}</div>
						</div>
					</div>
					<div className={style.content_header_status_bar}>
						<div className={style.content_header_status_bar_gap}>
							<span className={style.content_header_status_bar_text}>2 операции</span>
						</div>
						<div>|</div>
						<div className={style.content_header_status_bar_gap}>
							<span className={style.content_header_status_bar_text_reg}>2 поступления</span>
							<span className={style.content_header_status_bar_text}>1 212 212 ₽</span>
						</div>
						<div>|</div>
						<div className={style.content_header_status_bar_gap}>
							<span className={style.content_header_status_bar_text_reg}>6 выплат</span>
							<span className={style.content_header_status_bar_text}>8 351 600 ₽</span>
						</div>
						<div>|</div>
						<div className={style.content_header_status_bar_gap}>
							<span className={style.content_header_status_bar_text_reg}>Итого</span>
							<span className={style.content_header_status_bar_text_green}>
								+200 000 <span className={style.content_header_status_bar_text_green_rub}>₽</span>
							</span>
						</div>
					</div>
				</div>
				<hr />
				<div className={style.container_bar}>
					<div>
						<div className={style.container_bar_block_one}>
							<div className={style.container_bar_block_one_data}>
								<div>
									<span>Денежный поток</span>
								</div>
								<div className={style.container_bar_block_one_data_main}>
									<div>
										<span>343 354 ₽</span>
									</div>
									<div>
										<span>100 000 ₽</span>
									</div>
								</div>
							</div>
							<hr />
							<div className={style.container_bar_block_one_data_footer}>
								<span className={style.container_bar_block_one_data_footer_btn}>
									Спланировать бюджет
								</span>
							</div>
						</div>
					</div>
					<div className={style.container_bar_block_two}>
						<div>
							<div>
								<div>Incoment</div>
								<div>
									<span>1000</span>
									<span>3000</span>
								</div>
							</div>
							<div>расходы</div>
						</div>
						<div>Bar component</div>
					</div>
				</div>
				<div className={style.conteiner_create_operation}>
					<div>
						<h3 className={style.conteiner_create_operation_text}>Операции по проекту</h3>
					</div>
					<div>
						<Button
							backgroundColor='rgba(68, 76, 231, 1)'
							color='rgba(255, 255, 255, 1)'
							border='1px solid  #444CE7'
							padding='10px 16px'
							fontSize='14px'
							lineHeight='20px'
							type='button'
							onClick={handleOperation}
						>
							<img src={plus} alt='+' />
							Добавить операцию
						</Button>
						{modalOperation && (
							<Modal visible={modalOperation} setVisible={setModalOperation}>
								<ModalOperationCreate />
							</Modal>
						)}
					</div>
				</div>

				<table className={style.content_table}>
					<thead>
						<tr>
							<th className={style.col_1}>
								<div className={style.col}>
									<input type='checkbox' />
									Дата
								</div>
							</th>
							<th className={style.col_2}>
								<div className={style.col}>Счет</div>
							</th>
							<th className={style.col_3}>
								<div className={style.col}>Тип</div>
							</th>
							<th className={style.col_4}>
								<div className={style.col}>Контрагент</div>
							</th>
							<th className={style.col_5}>
								<div className={style.col}>Статья</div>
							</th>
							<th className={style.col_6}>
								<div className={style.col}>Проект</div>
							</th>
							<th className={style.col_7}>
								<div className={style.col}>Сделка</div>
							</th>
							<th className={style.col_8}>
								<div className={style.col}>Сумма</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(purchaseedData).map(date => (
							<React.Fragment key={date}>
								<tr onClick={() => handlePurchaseClick(date)}>
									<td colSpan='8'>
										<div className={style.row_drop_color}>
											<input type='checkbox' />
											{date}
										</div>
									</td>
								</tr>
								{expandedRows[date] &&
									purchaseedData[date].map(item => (
										<tr key={item.id}>
											<td>
												<div className={style.row_drop}>
													<input type='checkbox' />
													<div>{item.date}</div>
												</div>
											</td>
											<td>
												<div className={style.row}>{item.account}</div>
											</td>
											<td>
												<div className={style.row}>{item.type}</div>
											</td>
											<td>
												<div className={style.row}>{item.counterparty}</div>
											</td>
											<td>
												<div className={style.row}>{item.article}</div>
											</td>
											<td>
												<div className={style.row}>{item.project}</div>
											</td>
											<td>
												<div className={style.row}>{item.deal}</div>
											</td>
											<td>
												<div className={style.row}>{item.amount}</div>
											</td>
										</tr>
									))}
							</React.Fragment>
						))}
					</tbody>
				</table>
			</div>
			<FilterProject setVisible={setOpenFilter} />
			{openFilter && <FilterBlockProjectId />}
		</div>
	)
}

export default PageProjectId
