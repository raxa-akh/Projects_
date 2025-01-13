import React, { useState } from 'react'
import icon from '../../../assets/Icon.svg'
import plus from '../../../assets/plus.svg'
import CurrentDate from '../../../components/currentDate/CurrentDate'
import Button from '../../../components/ui/button/Button'
import fd from '../../../assets/file_download.svg'
import style from './style/headSale.module.css'
import NewSale from '../newSale/NewSale'
import Modal from '../../../components/ui/modal/Modal'
import CreatePurchase from '../createPurchase/CreatePurchase'

const HeadSale = ({ selectedValue }) => {
	const [dropListSale, setDropListSale] = useState(false)
	const [newSale, setNewSale] = useState(false)
	const [newPurchaseSale, setNewPurchaseSale] = useState(false)
	const handleNewSale = () => {
		setDropListSale(prev => !prev)
		setNewSale(prev => !prev)
	}
	const handleNewPurchase = () => {
		setDropListSale(prev => !prev)
		setNewPurchaseSale(prev => !prev)
	}
	return (
		<div className={style.container_head_status_bar}>
			<div className={style.container_head}>
				<div className={style.container_head_block}>
					<div className={style.container_head_block_text}>
						<h1>Проекты</h1>
						<img src={icon} alt='?' />
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
						onClick={() => setDropListSale(prev => !prev)}
					>
						<img src={plus} alt='+' />
						Создать
					</Button>
					<Button
						backgroundColor='rgba(68, 76, 231, 1)'
						color='rgba(255, 255, 255, 1)'
						border='1px solid  #444CE7'
						padding='12px 20px'
						fontSize='16px'
						type='button'
					>
						<img src={fd} alt='download' />
						.xls
					</Button>
					{dropListSale && (
						<div>
							<div className={style.block_drop_list}>
								<ul className={style.drop_list}>
									<li onClick={handleNewSale}>Новый проект</li>
									<li onClick={handleNewPurchase}>Новая группа</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className={style.container_status_bar}>
				<div className={style.container_status_bar_content}>
					<span className={style.container_status_bar_text}>2 проекта</span>
				</div>
				<div className={style.container_status_bar_content}>
					<span className={style.container_status_bar_name}>Поступления</span>
					<span className={style.container_status_bar_text}>212 212 ₽</span>
				</div>
				<div className={style.container_status_bar_content}>
					<span className={style.container_status_bar_name}>Выплаты</span>
					<span className={style.container_status_bar_text}>8 351 600 ₽</span>
				</div>
				{selectedValue === 'cash' || selectedValue === 'accrual' ? (
					<>
						<div className={style.container_status_bar_content}>
							<span className={style.container_status_bar_name}>Прибыль</span>
							<span className={style.container_status_bar_text__color}>200 000</span>
							<span className={style.container_status_bar_text__color}>₽</span>
						</div>
						<div className={style.container_status_bar_content}>
							<span className={style.container_status_bar_name}>Рентабильность</span>
							<span className={style.container_status_bar_text__color}>200 000</span>
							<span className={style.container_status_bar_text__color}>%</span>
						</div>
					</>
				) : (
					<div className={style.container_status_bar_content}>
						<span className={style.container_status_bar_name}>Денежный поток</span>
						<span className={style.container_status_bar_text__color}>200 000</span>
						<span className={style.container_status_bar_text__color}>₽</span>
					</div>
				)}
			</div>
			{newSale && (
				<Modal visible={newSale} setVisible={setNewSale}>
					<NewSale />
				</Modal>
			)}
			{newPurchaseSale && (
				<Modal visible={newPurchaseSale} setVisible={setNewPurchaseSale}>
					<CreatePurchase />
				</Modal>
			)}
		</div>
	)
}

export default HeadSale
