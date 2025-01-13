import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../../../mock/index.js'
import { arrDate } from '../../../mock/index.js'
import style from './style/pageBDRId.module.css'
import FilterBlockProjectId from '../../../components/filterBlock/filterBlockProjectId/FilterBlockProjectId.jsx'
import FilterProject from '../filterProjext/FilterProject.jsx'

const PageBDRId = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const [projectItem, setProjectItem] = useState({})
	const [expandedRows, setExpandedRows] = useState({})

	const handleGroupClick = date => {
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

	const groupedData = {}

	formattedArrDate.forEach(item => {
		if (!groupedData[item.date]) {
			groupedData[item.date] = []
		}
		groupedData[item.date].push(item)
	})
	const [openFilter, setOpenFilter] = useState(false)
	const [modalOperation, setModalOperation] = useState(false)
	const handleOperation = () => {
		setModalOperation(prev => !prev)
	}
	return (
		<div className={style.content_container}>
			<div className={style.container_projectId}>
				<div className={style.container_content_project}>
					<div className={style.content_header_left}>
						<div>
							<h1>{projectItem.nameProject}</h1>
						</div>
					</div>
				</div>
				<hr />
				<div className={style.table_head}>
					<div className={style.table_head_title}>Общий бюджет</div>
					<div className={style.table_head_total}>Итого</div>
					<div className={style.table_head_date}>Окт 23</div>
				</div>
				<table className={style.content_table}>
					<thead>
						<tr>
							<th className={style.col_1_title}>
								<div className={style.col}>Общий бюджет</div>
							</th>
							<th className={style.col_2}>
								<div className={style.col}>План</div>
							</th>
							<th className={style.col_2}>
								<div className={style.col}>Факт</div>
							</th>
							<th className={style.col_2}>
								<div className={style.col}>% Вып. плана</div>
							</th>
							<th className={style.col_2}>
								<div className={style.col}>Откл.</div>
							</th>
							<th className={style.col_2_last}>
								<div className={style.col}>% Откл.</div>
							</th>
							<th className={style.col_8}>
								<div className={style.col}>План</div>
							</th>
							<th className={style.col_8}>
								<div className={style.col}>Факт</div>
							</th>
							<th className={style.col_8}>
								<div className={style.col}>% Вып. плана</div>
							</th>
							<th className={style.col_8}>
								<div className={style.col}>Откл.</div>
							</th>
							<th className={style.col_8}>
								<div className={style.col}>% Откл.</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(groupedData).map(date => (
							<React.Fragment key={date}>
								<tr onClick={() => handleGroupClick(date)}>
									<td colSpan='8'>
										<div className={style.row_drop_color}>
											<input type='checkbox' />
											{date}
										</div>
									</td>
								</tr>
								{expandedRows[date] &&
									groupedData[date].map(item => (
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

export default PageBDRId
