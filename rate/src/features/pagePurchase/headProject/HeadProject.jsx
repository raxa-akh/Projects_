import React, { useState } from 'react'
import icon from '../../../assets/Icon.svg'
import plus from '../../../assets/plus.svg'
import CurrentDate from '../../../components/currentDate/CurrentDate'
import Button from '../../../components/ui/button/Button'
import fd from '../../../assets/file_download.svg'
import style from './style/headProject.module.css'
import NewProject from '../newProject/NewProject'
import Modal from '../../../components/ui/modal/Modal'
import CreatePurchase from '../createPurchase/CreatePurchase'

const HeadProject = ({ btnPurchase, btnProject }) => {
	const [newProject, setNewProject] = useState(false)
	const [newPurchaseProject, setNewPurchaseProject] = useState(false)

	const handleNewProject = () => {
		setNewProject(true)
	}

	const handleNewPurchase = () => {
		setNewPurchaseProject(true)
	}

	const salesText = [
		{ name: '4 продажи на сумму', value: '400 000 ₽' },
		{ name: 'Общая прибыль', value: '300 000 ₽' }
	]

	const purchasesText = [
		{ name: '1 закупки на сумму', value: '0 ₽' },
		{ name: 'Общая сумма', value: '0 ₽' }
	]

	const statusBarText = btnProject ? salesText : btnPurchase ? purchasesText : []

	return (
		<div className={style.container_head_status_bar}>
			<div className={style.container_head}>
				<div className={style.container_head_block}>
					<div className={style.container_head_block_text}>
						<h1>Название компании</h1>
					</div>
					<div>
						<CurrentDate />
					</div>
				</div>
				<div className={style.container_head_btn}>
					<Button
						backgroundColor='rgba(68, 76, 231, 1)'
						color='rgba(255, 255, 255, 1)'
						border='1px solid  #444CE7'
						padding='12px 20px'
						fontSize='16px'
						type='button'
						onClick={btnProject ? handleNewProject : handleNewPurchase}
					>
						<img src={plus} alt='+' />
						{btnProject ? 'Создать продажу' : btnPurchase ? 'Создать закупку' : ''}
					</Button>
				</div>
			</div>
			{statusBarText.length > 0 && (
				<div className={style.container_status_bar}>
					{statusBarText.map((item, index) => (
						<div key={index} className={style.container_status_bar_content}>
							<span className={style.container_status_bar_name}>{item.name}</span>
							<span className={style.container_status_bar_text}>{item.value}</span>
							{index === 0 && <div className={style.vertical_divider}></div>}
						</div>
					))}
				</div>
			)}
			{newProject && (
				<Modal visible={newProject} setVisible={setNewProject}>
					<NewProject />
				</Modal>
			)}
			{newPurchaseProject && (
				<Modal visible={newPurchaseProject} setVisible={setNewPurchaseProject}>
					<CreatePurchase />
				</Modal>
			)}
		</div>
	)
}

export default HeadProject
