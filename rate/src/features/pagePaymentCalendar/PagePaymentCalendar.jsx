import React, { useState } from 'react'
import HeadProject from './headProject/HeadProject'
import style from './style/pagePaymentCalendar.module.css'
import { dataforsale3 } from '../../mock'
import FilterBlockProject from '../../components/filterBlock/filterBlockProject/FilterBlockProject'
import FilterPaymentCaldar from './filterPaymentCalendar/FilterPaymentCaldar'

const TableRow = ({ item, level = 0 }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<tr onClick={toggleOpen} style={{ marginLeft: `${level * 50}px`, cursor: 'pointer' }}>
				<td className={style.td_border} style={{ paddingLeft: `${level * 50}px`, cursor: 'pointer' }}>
					<div className={style.context_row_title}>
						{item.subItems && (
							<svg
								width='13'
								height='7'
								viewBox='0 0 13 7'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								style={{
									transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
									transition: 'transform 0.3s'
								}}
							>
								<path
									d='M1.5 0.999878L6.5 5.99988L11.5 0.999878'
									stroke='#98A2B3'
									strokeWidth='1.66667'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						)}
						{item.name}
					</div>
				</td>
				<td className={style.td_border_black}>
					<div className={style.context_row_text}>1</div>
				</td>
				<td className={style.td_border_black}>
					<div className={style.context_row_text}>1</div>
				</td>
				<td className={style.td_border}>
					<div className={style.context_row_text}>1</div>
				</td>
				<td className={style.td_border}>
					<div className={style.context_row_text}>1</div>
				</td>
				<td className={style.td_border_black}>
					<div className={style.context_row_text}>1</div>
				</td>
				<td className={style.td_border_black}>
					<div className={style.context_row_text}>1</div>
				</td>
				<td className={style.td_border}>
					<div className={style.context_row_text}>1</div>
				</td>
			</tr>

			{isOpen &&
				item.subItems &&
				item.subItems.map(subItem => <TableRow key={subItem.id} item={subItem} level={level + 1} />)}
		</>
	)
}

const PagePaymentCalendar = () => {
	const [selectedValue, setSelectedValue] = useState('')
	const [open, setOpen] = useState(false)
	return (
		<div className={style.container}>
			<div className={style.container_block}>
				<div className={style.conteiner_header}>
					<HeadProject />
				</div>
				<div>
					<hr />
				</div>
				<div className={style.conteiner_table}>
					<table className={style.content_table}>
						<thead>
							<tr>
								<th className={style.col_1} />
								<th className={style.col_2}>
									<div className={style.col}>2023 План</div>
								</th>
								<th className={style.col_3}>
									<div className={style.col}>2023 Факт</div>
								</th>
								<th className={style.col_4}>
									<div className={style.col}>Сен 23 План</div>
								</th>
								<th className={style.col_5}>
									<div className={style.col}>Сен 23 Факт</div>
								</th>
								<th className={style.col_6}>
									<div className={style.col}>Ноя 23 План</div>
								</th>
								<th className={style.col_7}>
									<div className={style.col}>Ноя 23 Факт</div>
								</th>
								<th className={style.col_7}>
									<div className={style.col}>Дек 23 План</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{dataforsale3.map(item => (
								<TableRow key={item.id} item={item} />
							))}
						</tbody>
					</table>
				</div>

				<div>
					<FilterPaymentCaldar setVisible={setOpen} />
					{open && <FilterBlockProject />}
				</div>
			</div>
		</div>
	)
}

export default PagePaymentCalendar
