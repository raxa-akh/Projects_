import React from 'react'
import Input from '../../../components/ui/input/Input'
import Button from '../../../components/ui/button/Button'
import style from './style/plusAction.module.css'
import xClose from '../../../assets/x-close.svg'
import Select from 'react-select'
import { useState } from 'react'

import { dataforsale } from '../../../mock'

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
]
const customStyles = {
	control: (provided, state) => ({
		...provided,

		background: 'white',
		border: '1px solid  #D0D5DD',
		borderRadius: '8px',
		padding: '10px 14px ',
		width: '100%',
		height: '100%',
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center'
	}),
	option: (provided, state) => ({
		...provided,
		background: state.isSelected ? 'blue' : 'white',
		color: state.isSelected ? 'white' : 'black',
		padding: '10px',
		height: '44px'
	})
}

const PlusAction = () => {
	const [selectedOption, setSelectedOption] = useState(null)

	return (
		<div className={style.container} onClick={event => event.stopPropagation()}>
			<div className={style.container_header}>
				<div className={style.container_header_img}>
					<h1>
						Добавьте операции к сделке или <span>создайте новую</span>
					</h1>
					<img src={xClose} alt='x' />
				</div>
			</div>
			<div className={style.container_main}>
				<div className={style.block_container_main}>
					<label className={style.content_main}>
						<div className={style.container_main_input_search}>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z'
									fill='#667085'
								/>
							</svg>
							<Input type='text' placeholder='Поиск операции' />
						</div>
						<div className={style.container_main_input}>
							<Input type='text' placeholder='Сумма от' />
						</div>
						<div className={style.horyzontal_divider}></div>
						<div className={style.container_main_input}>
							<Input type='text' placeholder='Сумма до' />
						</div>
					</label>
				</div>
				<div className={style.block_container_main}>
					<label className={style.content_main}>
						<div className={style.container_filter_burger}>
							<svg
								width='12'
								height='8'
								viewBox='0 0 12 8'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1 1.5L6 6.5L11 1.5'
									stroke='#101828'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							Дата операции
						</div>
						<div className={style.container_filter_burger}>
							<svg
								width='12'
								height='8'
								viewBox='0 0 12 8'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1 1.5L6 6.5L11 1.5'
									stroke='#101828'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							Юрлица и счета
						</div>
						<div className={style.container_filter_burger}>
							<svg
								width='12'
								height='8'
								viewBox='0 0 12 8'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1 1.5L6 6.5L11 1.5'
									stroke='#101828'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							Контрагент
						</div>
						<div className={style.container_filter_burger}>
							<svg
								width='12'
								height='8'
								viewBox='0 0 12 8'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1 1.5L6 6.5L11 1.5'
									stroke='#101828'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							Проекты
						</div>
					</label>
				</div>
				<div className={style.block_container_main}>
					<table className={style.content_table}>
						<thead>
							<tr>
								<th className={style.col_2}>
									<div className={style.col}>Дата</div>
								</th>
								<th className={style.col_3}>
									<div className={style.col}>Счёт</div>
								</th>
								<th className={style.col_4}>
									<div className={style.col}>Тип</div>
								</th>
								<th className={style.col_5}>
									<div className={style.col}>Контрагент</div>
								</th>
								<th className={style.col_6}>
									<div className={style.col_end}>Статья</div>
								</th>
								<th className={style.col_6}>
									<div className={style.col_end}>Проект</div>
								</th>
								<th className={style.col_6}>
									<div className={style.col_end}>Сумма</div>
								</th>
							</tr>
							<tr>
								<td colspan='7'>
									<div className={style.clue}>Можно прикрепить к сделке 1</div>
								</td>
							</tr>
						</thead>
						<tbody>
							{dataforsale.map(el => (
								<tr key={el.id}>
									<td>
										<div className={style.context_row_title}>{el.date}</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row}>{el.profit}</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row}>
											<div className={style.transfer_left}>
												<svg
													width='23'
													height='12'
													viewBox='0 0 23 12'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M21.25 6L1.25 6M1.25 6L5.34724 10.5M1.25 6L5.34724 1.5'
														stroke='#12B76A'
														stroke-width='2'
														stroke-linecap='round'
														stroke-linejoin='round'
													/>
												</svg>
											</div>
										</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row}>--</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row}>курсовая разница</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row}>--</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row_end}>+ {el.profit} ₽</div>
									</td>
								</tr>
							))}
							<tr>
								<td colspan='7'>
									<div className={style.clue}>Прикрепленные к сделке 0</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className={style.container_footer}>
				<Button
					backgroundColor='rgba(255, 255, 255, 1)'
					color='rgba(52, 64, 84, 1)'
					border='1px solid  #D0D5DD'
					padding='12px 20px'
					fontSize='16px'
				>
					Отмена
				</Button>
				<Button
					backgroundColor='rgba(68, 76, 231, 1)'
					color='rgba(255, 255, 255, 1)'
					border='1px solid  #444CE7'
					padding='12px 20px'
					fontSize='16px'
				>
					Создать
				</Button>
			</div>
		</div>
	)
}

export default PlusAction
