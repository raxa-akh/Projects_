import style from './style/headProject.module.css'

const HeadProject = () => {
	return (
		<div className={style.container_head_status_bar}>
			<div className={style.container_head}>
				<div className={style.container_head_block}>
					<div className={style.container_head_block_text}>
						<div className={style.turn_back}>
							<svg
								width='7'
								height='11'
								viewBox='0 0 7 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M6.34199 1.50825L5.16699 0.333252L0.166992 5.33325L5.16699 10.3333L6.34199 9.15825L2.52533 5.33325L6.34199 1.50825Z'
									fill='#667085'
								/>
							</svg>
							Все продажи
						</div>

						<h1>
							Создание счета по продаже <span>Ремонт Кв-2</span>
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeadProject
