import style from './style/billFizik.module.css'
import { useId } from 'react'
import { dataforsale } from '../../../mock'

const BillFizik = () => {
	const uid = useId()

	return (
		<div className={style.container}>
			<div className={style.container_block}>
				<div className={style.block1}>
					<div className={style.block_header}>
						<h3>
							<svg
								width='21'
								height='17'
								viewBox='0 0 21 17'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18.5 2.33325H10.5L9.09 0.923252C8.71 0.543252 8.2 0.333252 7.67 0.333252H2.5C1.4 0.333252 0.51 1.23325 0.51 2.33325L0.5 14.3333C0.5 15.4333 1.4 16.3333 2.5 16.3333H18.5C19.6 16.3333 20.5 15.4333 20.5 14.3333V4.33325C20.5 3.23325 19.6 2.33325 18.5 2.33325ZM11.5 12.3333H5.5C4.95 12.3333 4.5 11.8833 4.5 11.3333C4.5 10.7833 4.95 10.3333 5.5 10.3333H11.5C12.05 10.3333 12.5 10.7833 12.5 11.3333C12.5 11.8833 12.05 12.3333 11.5 12.3333ZM15.5 8.33325H5.5C4.95 8.33325 4.5 7.88325 4.5 7.33325C4.5 6.78325 4.95 6.33325 5.5 6.33325H15.5C16.05 6.33325 16.5 6.78325 16.5 7.33325C16.5 7.88325 16.05 8.33325 15.5 8.33325Z'
									fill='#344054'
								/>
							</svg>
							Номер счета и сроки оплаты
						</h3>
					</div>
					<div className={style.block_inputs}>
						<div className={style.input_block}>
							<div className={style.input_title}>
								<div>
									<svg
										width='11'
										height='11'
										viewBox='0 0 11 11'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M4.55805 10.3333L4.72298 6.67006L1.6327 8.6579L0.686523 7.0086L3.96777 5.33325L0.686523 3.6579L1.6327 2.0086L4.72298 3.99645L4.55805 0.333252H6.44173L6.2768 3.99645L9.36708 2.0086L10.3133 3.6579L7.03201 5.33325L10.3133 7.0086L9.36708 8.6579L6.2768 6.67006L6.44173 10.3333H4.55805Z'
											fill='#F04438'
										/>
									</svg>
									Номер счета
								</div>
								<svg
									width='19'
									height='19'
									viewBox='0 0 19 19'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.50033 11.8332C10.881 11.8332 12.0003 10.7139 12.0003 9.33321C12.0003 7.9525 10.881 6.83321 9.50033 6.83321C8.11961 6.83321 7.00033 7.9525 7.00033 9.33321C7.00033 10.7139 8.11961 11.8332 9.50033 11.8332Z'
										stroke='#344054'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
									<path
										d='M15.1064 11.6059C15.0055 11.8344 14.9755 12.0879 15.02 12.3337C15.0646 12.5794 15.1817 12.8062 15.3564 12.9847L15.4018 13.0302C15.5427 13.1709 15.6545 13.338 15.7307 13.5219C15.807 13.7059 15.8462 13.903 15.8462 14.1022C15.8462 14.3013 15.807 14.4984 15.7307 14.6824C15.6545 14.8663 15.5427 15.0334 15.4018 15.1741C15.2611 15.315 15.094 15.4268 14.9101 15.503C14.7261 15.5792 14.529 15.6185 14.3299 15.6185C14.1308 15.6185 13.9336 15.5792 13.7497 15.503C13.5657 15.4268 13.3986 15.315 13.2579 15.1741L13.2124 15.1287C13.0339 14.954 12.8071 14.8369 12.5614 14.7923C12.3156 14.7477 12.0622 14.7778 11.8337 14.8787C11.6096 14.9747 11.4185 15.1342 11.2839 15.3374C11.1493 15.5407 11.0771 15.7788 11.0761 16.0226V16.1514C11.0761 16.5532 10.9165 16.9386 10.6323 17.2228C10.3482 17.5069 9.96278 17.6665 9.56093 17.6665C9.15909 17.6665 8.7737 17.5069 8.48956 17.2228C8.20541 16.9386 8.04578 16.5532 8.04578 16.1514V16.0832C8.03991 15.8325 7.95875 15.5893 7.81283 15.3853C7.66692 15.1812 7.463 15.0259 7.2276 14.9393C6.9991 14.8384 6.74563 14.8083 6.49988 14.8529C6.25413 14.8975 6.02736 15.0146 5.84881 15.1893L5.80336 15.2347C5.66264 15.3756 5.49554 15.4874 5.3116 15.5636C5.12766 15.6399 4.9305 15.6791 4.73139 15.6791C4.53227 15.6791 4.33511 15.6399 4.15117 15.5636C3.96724 15.4874 3.80013 15.3756 3.65942 15.2347C3.51854 15.094 3.40679 14.9269 3.33054 14.743C3.25429 14.559 3.21504 14.3619 3.21504 14.1628C3.21504 13.9636 3.25429 13.7665 3.33054 13.5825C3.40679 13.3986 3.51854 13.2315 3.65942 13.0908L3.70487 13.0453C3.87952 12.8668 3.99668 12.64 4.04124 12.3943C4.0858 12.1485 4.05572 11.895 3.95487 11.6665C3.85884 11.4425 3.69938 11.2514 3.49613 11.1168C3.29288 10.9822 3.05471 10.9099 2.81093 10.909H2.68214C2.2803 10.909 1.89492 10.7493 1.61077 10.4652C1.32662 10.181 1.16699 9.79566 1.16699 9.39382C1.16699 8.99197 1.32662 8.60659 1.61077 8.32244C1.89492 8.0383 2.2803 7.87867 2.68214 7.87867H2.75033C3.00108 7.8728 3.24427 7.79163 3.44828 7.64572C3.65229 7.4998 3.80769 7.29589 3.89427 7.06048C3.99511 6.83199 4.02519 6.57852 3.98063 6.33277C3.93607 6.08701 3.81891 5.86024 3.64427 5.6817L3.59881 5.63624C3.45794 5.49552 3.34618 5.32842 3.26993 5.14448C3.19368 4.96055 3.15444 4.76339 3.15444 4.56427C3.15444 4.36516 3.19368 4.168 3.26993 3.98406C3.34618 3.80012 3.45794 3.63302 3.59881 3.4923C3.73953 3.35143 3.90663 3.23967 4.09057 3.16342C4.2745 3.08717 4.47167 3.04793 4.67078 3.04793C4.86989 3.04793 5.06706 3.08717 5.25099 3.16342C5.43493 3.23967 5.60203 3.35143 5.74275 3.4923L5.7882 3.53776C5.96675 3.71241 6.19352 3.82956 6.43927 3.87412C6.68503 3.91868 6.9385 3.8886 7.16699 3.78776H7.2276C7.45167 3.69172 7.64276 3.53227 7.77737 3.32902C7.91197 3.12577 7.9842 2.8876 7.98517 2.64382V2.51503C7.98517 2.11319 8.14481 1.7278 8.42895 1.44366C8.7131 1.15951 9.09848 0.999878 9.50033 0.999878C9.90217 0.999878 10.2876 1.15951 10.5717 1.44366C10.8558 1.7278 11.0155 2.11319 11.0155 2.51503V2.58321C11.0164 2.82699 11.0887 3.06516 11.2233 3.26841C11.3579 3.47166 11.549 3.63112 11.7731 3.72715C12.0016 3.828 12.255 3.85808 12.5008 3.81352C12.7465 3.76896 12.9733 3.6518 13.1518 3.47715L13.1973 3.4317C13.338 3.29082 13.5051 3.17907 13.6891 3.10282C13.873 3.02657 14.0702 2.98732 14.2693 2.98732C14.4684 2.98732 14.6655 3.02657 14.8495 3.10282C15.0334 3.17907 15.2005 3.29082 15.3412 3.4317C15.4821 3.57241 15.5939 3.73952 15.6701 3.92345C15.7464 4.10739 15.7856 4.30455 15.7856 4.50367C15.7856 4.70278 15.7464 4.89994 15.6701 5.08388C15.5939 5.26782 15.4821 5.43492 15.3412 5.57564L15.2958 5.62109C15.1211 5.79964 15.004 6.02641 14.9594 6.27216C14.9149 6.51791 14.9449 6.77138 15.0458 6.99988V7.06048C15.1418 7.28455 15.3013 7.47565 15.5045 7.61025C15.7078 7.74485 15.9459 7.81709 16.1897 7.81806H16.3185C16.7204 7.81806 17.1057 7.97769 17.3899 8.26184C17.674 8.54598 17.8337 8.93137 17.8337 9.33321C17.8337 9.73505 17.674 10.1204 17.3899 10.4046C17.1057 10.6887 16.7204 10.8484 16.3185 10.8484H16.2503C16.0065 10.8493 15.7684 10.9216 15.5651 11.0562C15.3619 11.1908 15.2024 11.3819 15.1064 11.6059Z'
										stroke='#344054'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</div>
							<div className={style.input_text}>
								<input type='text' id={uid} placeholder='01.01.2023' />
							</div>
						</div>
						<div className={style.duo_input}>
							<div className={style.input_block}>
								<div className={style.input_title}>
									<div>
										<svg
											width='11'
											height='11'
											viewBox='0 0 11 11'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M4.55805 10.3333L4.72298 6.67006L1.6327 8.6579L0.686523 7.0086L3.96777 5.33325L0.686523 3.6579L1.6327 2.0086L4.72298 3.99645L4.55805 0.333252H6.44173L6.2768 3.99645L9.36708 2.0086L10.3133 3.6579L7.03201 5.33325L10.3133 7.0086L9.36708 8.6579L6.2768 6.67006L6.44173 10.3333H4.55805Z'
												fill='#F04438'
											/>
										</svg>
										Дата выставления
									</div>
								</div>
								<div className={style.input_text}>
									<svg
										width='21'
										height='23'
										viewBox='0 0 21 23'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M19.5 9.33325H1.5M14.5 1.33325V5.33325M6.5 1.33325V5.33325M6.3 21.3333H14.7C16.3802 21.3333 17.2202 21.3333 17.862 21.0063C18.4265 20.7187 18.8854 20.2597 19.173 19.6952C19.5 19.0535 19.5 18.2134 19.5 16.5333V8.13325C19.5 6.45309 19.5 5.61302 19.173 4.97128C18.8854 4.40679 18.4265 3.94785 17.862 3.66023C17.2202 3.33325 16.3802 3.33325 14.7 3.33325H6.3C4.61984 3.33325 3.77976 3.33325 3.13803 3.66023C2.57354 3.94785 2.1146 4.40679 1.82698 4.97128C1.5 5.61302 1.5 6.45309 1.5 8.13325V16.5333C1.5 18.2134 1.5 19.0535 1.82698 19.6952C2.1146 20.2597 2.57354 20.7187 3.13803 21.0063C3.77976 21.3333 4.61984 21.3333 6.3 21.3333Z'
											stroke='#667085'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<input type='text' id={uid} placeholder='07.11.2023' />
								</div>
							</div>
							<div className={style.input_block}>
								<div className={style.input_title}>
									<div>Оплатить до</div>
								</div>
								<div className={style.input_text}>
									<svg
										width='21'
										height='23'
										viewBox='0 0 21 23'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M19.5 9.33325H1.5M14.5 1.33325V5.33325M6.5 1.33325V5.33325M6.3 21.3333H14.7C16.3802 21.3333 17.2202 21.3333 17.862 21.0063C18.4265 20.7187 18.8854 20.2597 19.173 19.6952C19.5 19.0535 19.5 18.2134 19.5 16.5333V8.13325C19.5 6.45309 19.5 5.61302 19.173 4.97128C18.8854 4.40679 18.4265 3.94785 17.862 3.66023C17.2202 3.33325 16.3802 3.33325 14.7 3.33325H6.3C4.61984 3.33325 3.77976 3.33325 3.13803 3.66023C2.57354 3.94785 2.1146 4.40679 1.82698 4.97128C1.5 5.61302 1.5 6.45309 1.5 8.13325V16.5333C1.5 18.2134 1.5 19.0535 1.82698 19.6952C2.1146 20.2597 2.57354 20.7187 3.13803 21.0063C3.77976 21.3333 4.61984 21.3333 6.3 21.3333Z'
											stroke='#667085'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<input type='text' id={uid} placeholder='07.11.2023' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.block1}>
					<div className={style.block_header}>
						<h3>
							<svg
								width='25'
								height='25'
								viewBox='0 0 25 25'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clip-path='url(#clip0_1616_24122)'>
									<path
										d='M9.5 12.3333C11.43 12.3333 13 10.7633 13 8.83325C13 6.90325 11.43 5.33325 9.5 5.33325C7.57 5.33325 6 6.90325 6 8.83325C6 10.7633 7.57 12.3333 9.5 12.3333ZM9.5 7.33325C10.33 7.33325 11 8.00325 11 8.83325C11 9.66325 10.33 10.3333 9.5 10.3333C8.67 10.3333 8 9.66325 8 8.83325C8 8.00325 8.67 7.33325 9.5 7.33325ZM9.5 14.0833C7.16 14.0833 2.5 15.2533 2.5 17.5833V18.3333C2.5 18.8833 2.95 19.3333 3.5 19.3333H15.5C16.05 19.3333 16.5 18.8833 16.5 18.3333V17.5833C16.5 15.2533 11.84 14.0833 9.5 14.0833ZM4.84 17.3333C5.68 16.7533 7.71 16.0833 9.5 16.0833C11.29 16.0833 13.32 16.7533 14.16 17.3333H4.84ZM16.54 14.1433C17.7 14.9833 18.5 16.1033 18.5 17.5833V19.3333H21.5C22.05 19.3333 22.5 18.8833 22.5 18.3333V17.5833C22.5 15.5633 19 14.4133 16.54 14.1433ZM15.5 12.3333C17.43 12.3333 19 10.7633 19 8.83325C19 6.90325 17.43 5.33325 15.5 5.33325C14.96 5.33325 14.46 5.46325 14 5.68325C14.63 6.57325 15 7.66325 15 8.83325C15 10.0033 14.63 11.0933 14 11.9833C14.46 12.2033 14.96 12.3333 15.5 12.3333Z'
										fill='#344054'
									/>
								</g>
								<defs>
									<clipPath id='clip0_1616_24122'>
										<rect
											width='24'
											height='24'
											fill='white'
											transform='translate(0.5 0.333252)'
										/>
									</clipPath>
								</defs>
							</svg>
							От кого и кому
						</h3>
					</div>
					<div className={style.block_inputs}>
						<div className={style.input_block}>
							<div className={style.input_title}>
								<div>
									<svg
										width='11'
										height='11'
										viewBox='0 0 11 11'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M4.55805 10.3333L4.72298 6.67006L1.6327 8.6579L0.686523 7.0086L3.96777 5.33325L0.686523 3.6579L1.6327 2.0086L4.72298 3.99645L4.55805 0.333252H6.44173L6.2768 3.99645L9.36708 2.0086L10.3133 3.6579L7.03201 5.33325L10.3133 7.0086L9.36708 8.6579L6.2768 6.67006L6.44173 10.3333H4.55805Z'
											fill='#F04438'
										/>
									</svg>
									Ваша компания
								</div>
							</div>
							<div className={style.input_text}>
								<input type='text' id={uid} placeholder='Компания-1' />
							</div>
						</div>
						<div className={style.input_block}>
							<div className={style.input_title}>
								<div>
									<svg
										width='11'
										height='11'
										viewBox='0 0 11 11'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M4.55805 10.3333L4.72298 6.67006L1.6327 8.6579L0.686523 7.0086L3.96777 5.33325L0.686523 3.6579L1.6327 2.0086L4.72298 3.99645L4.55805 0.333252H6.44173L6.2768 3.99645L9.36708 2.0086L10.3133 3.6579L7.03201 5.33325L10.3133 7.0086L9.36708 8.6579L6.2768 6.67006L6.44173 10.3333H4.55805Z'
											fill='#F04438'
										/>
									</svg>
									Клиент
								</div>
							</div>
							<div className={style.input_text}>
								<input type='text' id={uid} placeholder='ООО Клиент' />
							</div>
						</div>
					</div>
				</div>
				<div className={style.block3}>
					<div className={style.block_header}>
						<h3>
							<svg
								width='21'
								height='23'
								viewBox='0 0 21 23'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1.77 6.29328L10.5 11.3433L19.23 6.29328M10.5 21.4133V11.3333M19.5 15.3333V7.33328C19.4996 6.98255 19.4071 6.63809 19.2315 6.33444C19.056 6.03079 18.8037 5.77864 18.5 5.60328L11.5 1.60328C11.196 1.42774 10.8511 1.33533 10.5 1.33533C10.1489 1.33533 9.80404 1.42774 9.5 1.60328L2.5 5.60328C2.19626 5.77864 1.94398 6.03079 1.76846 6.33444C1.59294 6.63809 1.50036 6.98255 1.5 7.33328V15.3333C1.50036 15.684 1.59294 16.0285 1.76846 16.3321C1.94398 16.6358 2.19626 16.8879 2.5 17.0633L9.5 21.0633C9.80404 21.2388 10.1489 21.3312 10.5 21.3312C10.8511 21.3312 11.196 21.2388 11.5 21.0633L18.5 17.0633C18.8037 16.8879 19.056 16.6358 19.2315 16.3321C19.4071 16.0285 19.4996 15.684 19.5 15.3333Z'
									stroke='#344054'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							Товары и услуги
						</h3>
						<div className={style.header_control}>
							<span>Заполнить позициями из сделки</span>
							<span>
								<svg
									width='13'
									height='13'
									viewBox='0 0 13 13'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6.49952 1.59546V11.0711M1.76172 6.33326H11.2373'
										stroke='#6172F3'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Добавить позицию
							</span>
						</div>
					</div>{' '}
					<table className={style.content_table}>
						<thead>
							<tr>
								<th className={style.col_2}>
									<div className={style.col}>Наименование товара/услуги</div>
								</th>
								<th className={style.col_3}>
									<div className={style.col_end}>Кол-во</div>
								</th>
								<th className={style.col_4}>
									<div className={style.col_end}>Цена за ед.</div>
								</th>
								<th className={style.col_5}>
									<div className={style.col_end}>Скидка</div>
								</th>
								<th className={style.col_6}>
									<div className={style.col_end}>НДС</div>
								</th>
								<th className={style.col_7}>
									<div className={style.col_end}>Сумма</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{dataforsale.map(el => (
								<tr key={el.id}>
									<td className={style.td_border}>
										<div className={style.context_row_title}>
											{el.name}{' '}
											<svg
												width='13'
												height='7'
												viewBox='0 0 13 7'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M1.5 0.999878L6.5 5.99988L11.5 0.999878'
													stroke='#98A2B3'
													stroke-width='1.66667'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
											</svg>
										</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row}>
											<input type='text' name='count' id='count' placeholder='1' />
										</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row}>
											<input type='text' name='count' id='count' placeholder='Ч' />
										</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row}>
											<input type='text' name='count' id='count' placeholder='0' />
										</div>
									</td>
									<td className={style.td_border}>
										<div className={style.context_row}>
											<input type='text' name='count' id='count' placeholder='0%' />
										</div>
									</td>
									<td>
										<div className={style.context_row_end}>{el.received}</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className={style.block_footer}>
						<div className={style.nds}>НДС: --</div>
						<div className={style.total}>
							<span>
								Итого: <span>0 ₽</span>
							</span>
							<span>
								Всего к оплате: <span>0 ₽</span>
							</span>
						</div>
					</div>
				</div>
				<div className={style.block4}>
					<div className={style.block_header}>
						<h3>
							<svg
								width='23'
								height='21'
								viewBox='0 0 23 21'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M21.5 19.6666V17.6666C21.5 15.8028 20.2252 14.2367 18.5 13.7926M15 1.95738C16.4659 2.55077 17.5 3.98794 17.5 5.66663C17.5 7.34531 16.4659 8.78248 15 9.37587M16.5 19.6666C16.5 17.8029 16.5 16.871 16.1955 16.1359C15.7895 15.1558 15.0108 14.3771 14.0307 13.9711C13.2956 13.6666 12.3638 13.6666 10.5 13.6666H7.5C5.63623 13.6666 4.70435 13.6666 3.96927 13.9711C2.98915 14.3771 2.21046 15.1558 1.80448 16.1359C1.5 16.871 1.5 17.8029 1.5 19.6666M13 5.66663C13 7.87576 11.2091 9.66663 9 9.66663C6.79086 9.66663 5 7.87576 5 5.66663C5 3.45749 6.79086 1.66663 9 1.66663C11.2091 1.66663 13 3.45749 13 5.66663Z'
									stroke='#344054'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							Ответственные лица
						</h3>
						<div className={style.header_control}>
							<p>
								<svg
									width='13'
									height='8'
									viewBox='0 0 13 8'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1.5 1.16663L6.5 6.16663L11.5 1.16663'
										stroke='#101828'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Формат счета от ООО
							</p>
						</div>
					</div>
					<div className={style.block_inputs}>
						<div className={style.duo_input2}>
							<div className={style.input_block}>
								<div className={style.input_title}>
									<div>ФИО генерального директора</div>
								</div>
								<div className={style.input_text}>
									<input type='text' id={uid} placeholder='Укажите ФИО' />
								</div>
							</div>
							<div className={style.input_block}>
								<div className={style.input_title}>
									<div>ФИО Бухгалтера</div>
								</div>
								<div className={style.input_text}>
									<input type='text' id={uid} placeholder='Укажите ФИО' />
								</div>
							</div>
						</div>
						<div className={style.duo_input2}>
							<div className={style.input_block}>
								<div className={style.input_title}>
									<div>Подпись</div>
								</div>
								<div className={style.input_text}>
									<svg
										width='13'
										height='23'
										viewBox='0 0 13 23'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12 4.92232V16.1665C12 19.2041 9.53757 21.6665 6.5 21.6665C3.46243 21.6665 1 19.2041 1 16.1665V5.33317C1 3.30813 2.64162 1.6665 4.66667 1.6665C6.69171 1.6665 8.33333 3.30813 8.33333 5.33317V16.1122C8.33333 17.1248 7.51252 17.9456 6.5 17.9456C5.48748 17.9456 4.66667 17.1248 4.66667 16.1122V6.31767'
											stroke='#344054'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<input type='text' id={uid} placeholder='Загрузить PNG, JPG' />
								</div>
							</div>
							<div className={style.input_block}>
								<div className={style.input_title}>
									<div>Подпись</div>
								</div>
								<div className={style.input_text}>
									<svg
										width='13'
										height='23'
										viewBox='0 0 13 23'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12 4.92232V16.1665C12 19.2041 9.53757 21.6665 6.5 21.6665C3.46243 21.6665 1 19.2041 1 16.1665V5.33317C1 3.30813 2.64162 1.6665 4.66667 1.6665C6.69171 1.6665 8.33333 3.30813 8.33333 5.33317V16.1122C8.33333 17.1248 7.51252 17.9456 6.5 17.9456C5.48748 17.9456 4.66667 17.1248 4.66667 16.1122V6.31767'
											stroke='#344054'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<input type='text' id={uid} placeholder='Загрузить PNG, JPG' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.block5}>
					<div className={style.block_header}>
						<h3>
							<svg
								width='21'
								height='21'
								viewBox='0 0 21 21'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M3.5 19.6665H17.5C18.6046 19.6665 19.5 18.7711 19.5 17.6665V3.6665C19.5 2.56193 18.6046 1.6665 17.5 1.6665H3.5C2.39543 1.6665 1.5 2.56193 1.5 3.6665V17.6665C1.5 18.7711 2.39543 19.6665 3.5 19.6665ZM3.5 19.6665L14.5 8.6665L19.5 13.6665M8.5 7.1665C8.5 7.99493 7.82843 8.6665 7 8.6665C6.17157 8.6665 5.5 7.99493 5.5 7.1665C5.5 6.33808 6.17157 5.6665 7 5.6665C7.82843 5.6665 8.5 6.33808 8.5 7.1665Z'
									stroke='#344054'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							Логотип и печать компании
						</h3>
					</div>
					<div className={style.block_inputs}>
						<div className={style.duo_input2}>
							<div className={style.input_block}>
								<div className={style.input_title}>
									<div>Логотип компании</div>
								</div>
								<div className={style.input_text}>
									<svg
										width='13'
										height='23'
										viewBox='0 0 13 23'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12 4.92232V16.1665C12 19.2041 9.53757 21.6665 6.5 21.6665C3.46243 21.6665 1 19.2041 1 16.1665V5.33317C1 3.30813 2.64162 1.6665 4.66667 1.6665C6.69171 1.6665 8.33333 3.30813 8.33333 5.33317V16.1122C8.33333 17.1248 7.51252 17.9456 6.5 17.9456C5.48748 17.9456 4.66667 17.1248 4.66667 16.1122V6.31767'
											stroke='#344054'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<input type='text' id={uid} placeholder='Загрузить PNG, JPG' />
								</div>
							</div>
							<div className={style.input_block}>
								<div className={style.input_title}>
									<div>Печать компании</div>
								</div>
								<div className={style.input_text}>
									<svg
										width='13'
										height='23'
										viewBox='0 0 13 23'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12 4.92232V16.1665C12 19.2041 9.53757 21.6665 6.5 21.6665C3.46243 21.6665 1 19.2041 1 16.1665V5.33317C1 3.30813 2.64162 1.6665 4.66667 1.6665C6.69171 1.6665 8.33333 3.30813 8.33333 5.33317V16.1122C8.33333 17.1248 7.51252 17.9456 6.5 17.9456C5.48748 17.9456 4.66667 17.1248 4.66667 16.1122V6.31767'
											stroke='#344054'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<input type='text' id={uid} placeholder='Загрузить PNG, JPG' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.container_block2}>
				<div className={style.block_header}>
					<h3>
						<svg
							width='15'
							height='17'
							viewBox='0 0 15 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0.5 1.33325C0.5 1.88325 0.95 2.33325 1.5 2.33325H13.5C14.05 2.33325 14.5 1.88325 14.5 1.33325C14.5 0.783252 14.05 0.333252 13.5 0.333252H1.5C0.95 0.333252 0.5 0.783252 0.5 1.33325ZM2.91 10.3333H4.5V15.3333C4.5 15.8833 4.95 16.3333 5.5 16.3333H9.5C10.05 16.3333 10.5 15.8833 10.5 15.3333V10.3333H12.09C12.98 10.3333 13.43 9.25325 12.8 8.62325L8.21 4.03325C7.82 3.64325 7.19 3.64325 6.8 4.03325L2.21 8.62325C1.58 9.25325 2.02 10.3333 2.91 10.3333Z'
								fill='#344054'
							/>
						</svg>
						Действия со счетом
					</h3>
				</div>
				<div className={style.btns}>
					<button className={style.btn1}>Сохранить и посмотреть</button>
					<button className={style.btn2}>Сохранить счет</button>
				</div>
			</div>
		</div>
	)
}

export default BillFizik
