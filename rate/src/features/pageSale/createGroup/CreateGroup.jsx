import React from 'react'
import style from './style/createPurchase.module.css'
import Input from '../../../components/ui/input/Input'
import Button from '../../../components/ui/button/Button'

const CreatePurchase = () => {
	return (
		<div className={style.create_purchase_modal} onClick={event => event.stopPropagation()}>
			<div className={style.create_purchase_modal_header}>
				<h1>Создать группу</h1>
			</div>
			<div className={style.create_purchase_modal_container}>
				<div className={style.create_purchase_modal_input_block}>
					<div>
						<label>Название</label>
					</div>
					<div className={style.create_purchase_modal_input}>
						<Input type='text' />
					</div>
				</div>
				<div className={style.create_purchase_modal_input_block}>
					<div>
						<label>Комментарий</label>
					</div>
					<div className={style.create_purchase_modal_input}>
						<Input type='text' />
					</div>
				</div>
			</div>
			<div className={style.create_purchase_modal_footer_btn}>
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

export default CreatePurchase
