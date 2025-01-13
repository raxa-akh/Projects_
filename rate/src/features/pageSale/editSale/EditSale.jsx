import React from 'react'
import Input from '../../../components/ui/input/Input'
import Button from '../../../components/ui/button/Button'
import style from './style/editSale.module.css'
import xClose from '../../../assets/x-close.svg'
import archive from '../../../assets/archive.svg'
import trash from '../../../assets/trash-01-2.svg'

const EditSale = () => {
	return (
		<div className={style.container} onClick={event => event.stopPropagation()}>
			<div className={style.container_header}>
				<div className={style.container_header_img}>
					<h1>Новый проект</h1>
					<img src={xClose} alt='x' />
				</div>
			</div>
			<div className={style.container_main}>
				<div className={style.block_container_main}>
					<label className={style.content_main}>
						Название
						<div className={style.container_main_input}>
							<Input type='text' placeholder='СММ' />
						</div>
					</label>
				</div>
				<div>
					<label className={style.content_main}>
						Группы счетов
						<div style={{ width: '456px' }}>
							<select className={style.container_main_select}>
								<option disabled>Выбрать группу</option>
								<option>Purchase1</option>
								<option>Purchase2</option>
							</select>
						</div>
					</label>
				</div>
				<hr />
				<div className={style.container_main_comment}>
					<label className={style.content_main}>
						Комментарий
						<div className={style.container_main_comment_text}>
							<textarea style={{ height: '49px' }} />
						</div>
					</label>
				</div>
			</div>
			<div className={style.container_footer}>
				<div className={style.container_footer_btn}>
					<div className={style.content_btn}>
						<img src={archive} alt='archive' />
						<span className={style.content_btn_acrhive}>В архив</span>
					</div>
					<div className={style.content_btn}>
						<img src={trash} alt='del' />
						<span className={style.content_btn_trash}>Удалить</span>
					</div>
				</div>
				<div className={style.content_btn_1}>
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
		</div>
	)
}

export default EditSale
