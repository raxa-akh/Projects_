import React from 'react'
import Input from '../../../components/ui/input/Input'
import Button from '../../../components/ui/button/Button'
import style from './style/newProject.module.css'
import xClose from '../../../assets/x-close.svg'
import Select from 'react-select'
import { useState } from 'react'

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
const NewProject = () => {
	const [selectedOption, setSelectedOption] = useState(null)

	return (
		<div className={style.container} onClick={event => event.stopPropagation()}>
			<div className={style.container_header}>
				<div className={style.container_header_img}>
					<h1>Создание продажи</h1>
					<img src={xClose} alt='x' />
				</div>
			</div>
			<div className={style.container_main}>
				<div className={style.block_container_main}>
					<label className={style.content_main}>
						Название сделки
						<div className={style.container_main_input}>
							<Input type='text' placeholder='Например, разработка сайта' />
						</div>
					</label>
				</div>
				<div className={style.block_container_main}>
					<label className={style.content_main}>
						Клиент
						<div className={style.container_main_select}>
							<Select
								defaultValue={selectedOption}
								onChange={setSelectedOption}
								options={options}
								styles={customStyles}
								className={style.react_select}
								placeholder='Укажите, кому продаете товар или услугу'
							/>
						</div>
					</label>
				</div>
				<div className={style.block_container_main}>
					<label className={style.content_main}>
						Дата сделки
						<div className={style.container_main_select_duo}>
							<Select
								defaultValue={selectedOption}
								onChange={setSelectedOption}
								options={options}
								styles={customStyles}
								className={style.react_select}
								placeholder='04.11.2023'
							/>
							<Select
								defaultValue={selectedOption}
								onChange={setSelectedOption}
								options={options}
								styles={customStyles}
								className={style.react_select}
								placeholder='НДС'
							/>
						</div>
					</label>
				</div>
				<div className={style.block_container_main}>
					<label className={style.content_main}>
						Коментарий
						<div className={style.container_main_textarea}>
							<Input type='text' placeholder='Добавьте комментарий к этой сделке' />
						</div>
					</label>
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

export default NewProject
