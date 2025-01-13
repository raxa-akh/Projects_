import React from 'react'
import style from './style/filterBlock.module.css'
import Input from '../ui/input/Input'
import Button from '../ui/button/Button'
import search from '../../assets/search.svg'
import chevron from '../../assets/chevron-down.svg'

const FilterBlockSaleId = () => {
	return (
		<div className={style.main_filter}>
			<div className={style.block_input__btn}>
				<div className={style.block_input}>
					<div>
						<img src={search} alt='search' />
					</div>
					<div style={{ width: '100%' }}>
						<Input style={{ width: '100%' }} type='text' placeholder='Поиск по названию или № счета' />
					</div>
				</div>
				<div>
					<Button
						backgroundColor='rgba(255, 255, 255, 1)'
						color='rgba(16, 24, 40, 1)'
						border='1px solid  #D0D5DD'
						padding='12px 20px'
						fontSize='16px'
					>
						Скрыть фильтр
						<img src={chevron} alt='chevron' />
					</Button>
				</div>
			</div>
			<div className={style.horizontal_content_3}>
				<div>
					<div>
						<span>Параметры</span>
					</div>
					<div>
						<div>
							<select>
								<option>Метод начисления</option>
							</select>
						</div>
						<div>
							<select>
								<option>Клиенты</option>
							</select>
						</div>
						<div>
							<select>
								<option>Статус сделки</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>Период</span>
					</div>
					<div>
						<div>
							<Input type='date' placeholder='Выбрать период' />
						</div>
					</div>
				</div>
			</div>

			<div className={style.horizontal_content_5}>
				<div>
					<div>
						<span>Параметры</span>
					</div>
					<div>
						<div>
							<select>
								<option>Юрлица и счета</option>
							</select>
						</div>
						<div>
							<select>
								<option>Проекты</option>
							</select>
						</div>
						<div>
							<select>
								<option>Сделки</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>Отображение</span>
					</div>
					<div>
						<div>
							<select>
								<option>По месяцам</option>
							</select>
						</div>
						<div>
							<select>
								<option>Метод начисления</option>
							</select>
						</div>
						<div>
							<select>
								<option>Движение денег</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>Период</span>
					</div>
					<div>
						<div>
							<Input type='date' placeholder='Выбрать период' />
						</div>
					</div>
				</div>
			</div>

			<div className={style.horizontal_content_7}>
				<div className={style.horizontal_content_tip}>
					<div>
						<span>Вид прибыли</span>
					</div>
					<div className={style.frame79}>
						<div className={style.toolType}>
							<Input type='checkbox' />
							<span>Операционная</span>
						</div>
						<div className={style.toolType}>
							<Input type='checkbox' />
							<span>EBITDA</span>
						</div>
						<div className={style.toolType}>
							<Input type='checkbox' />
							<span>EBIT</span>
						</div>
						<div className={style.toolType}>
							<Input type='checkbox' />
							<span>EBT</span>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>Параметры</span>
					</div>
					<div>
						<div>
							<select>
								<option>Юрлица и счета</option>
							</select>
						</div>
						<div>
							<select>
								<option>Контрагенты</option>
							</select>
						</div>
						<div>
							<select>
								<option>Проекты</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>Отображение</span>
					</div>
					<div>
						<div>
							<select>
								<option>По периодам</option>
							</select>
						</div>
						<div>
							<select>
								<option>По месяцам</option>
							</select>
						</div>
						<div>
							<select>
								<option>Метод начисления</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>Период</span>
					</div>
					<div>
						<div>
							<Input type='date' placeholder='Выбрать период' />
						</div>
					</div>
				</div>
			</div>
			<div className={style.horizontal_content_8}>
				<div className={style.horizontal_content_tip}>
					<div>
						<span>Тип</span>
					</div>
					<div className={style.frame79}>
						<div className={style.toolType}>
							<Input type='checkbox' />
							<span>Вып. план,%</span>
						</div>
						<div className={style.toolType}>
							<Input type='checkbox' />
							<span>Факт</span>
						</div>
						<div className={style.toolType}>
							<Input type='checkbox' />
							<span>Откл</span>
						</div>
						<div className={style.toolType}>
							<Input type='checkbox' />
							<span>Откл.%</span>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>Параметры</span>
					</div>
					<div>
						<div>
							<select>
								<option>Юрлица и счета</option>
							</select>
						</div>
						<div>
							<select>
								<option>Проекты</option>
							</select>
						</div>
						<div>
							<select>
								<option>Показатели прибыли</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>Отображение</span>
					</div>
					<div>
						<div>
							<select>
								<option>По месяцам</option>
							</select>
						</div>
						<div>
							<select>
								<option>Метод начисления</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div className={style.horizontal_content_9}>
				<div>
					<div>
						<span>Параметры</span>
					</div>
					<div>
						<div>
							<select>
								<option>Проекты</option>
							</select>
						</div>
						<div>
							<select>
								<option>Статус сделки</option>
							</select>
						</div>
						<div>
							<select>
								<option>Юрлица и счета</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<div>
						<div>
							<span>Период</span>
						</div>
						<div>
							<div>
								<Input type='date' placeholder='Выбрать период' />
							</div>
						</div>
					</div>
					<div>
						<div>
							<span>Отображение</span>
						</div>
						<div>
							<div>
								<select>
									<option>По месяцам</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FilterBlockSaleId
