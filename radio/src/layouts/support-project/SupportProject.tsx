'use client'

import { useId } from 'react'
import React, { useState, ChangeEvent } from 'react'
import style from './supportProject.module.scss'
import Image from 'next/image'
import CheckBox from '@/components/checkBox/CheckBox'
import ruble from '../../components/icons/ruble.svg'
import cards from '../../components/icons/cards.svg'
import thanks from '../../components/icons/thank-you.svg'
import elipse from '../../components/icons/elipse.svg'
import elipse2 from '../../components/icons/elipse2.svg'

type InputTypes = {
	password1: string
	password2: string
	password3: string
}

const SupportProject: React.FC = () => {
	const [inputTypes, setInputTypes] = useState<InputTypes>({
		password1: 'password',
		password2: 'password',
		password3: 'password'
	})

	const [selectedOption, setSelectedOption] = useState<'monthly' | 'oneTime'>('oneTime')
	const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
	const [customAmount, setCustomAmount] = useState<string>('')

	const [isChecked, setIsChecked] = useState(false)
	const [cardNumber, setCardNumber] = useState<string>('')
	const [expiryDate, setExpiryDate] = useState<string>('')

	const [currentView, setCurrentView] = useState<'donate' | 'payment' | 'thanks'>('donate')

	const emailId = useId()
	const nameId = useId()
	const cardNumberId = useId()
	const cardNameId = useId()
	const expiryDateId = useId()
	const cvvId = useId()

	const toggleInputType = (inputName: keyof InputTypes) => {
		setInputTypes(prevTypes => ({
			...prevTypes,
			[inputName]: prevTypes[inputName] === 'password' ? 'text' : 'password'
		}))
	}

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked)
	}

	const handleOptionChange = (option: 'monthly' | 'oneTime') => {
		setSelectedOption(option)
	}

	const handleAmountClick = (amount: number) => {
		setSelectedAmount(amount)
		setCustomAmount(amount.toString())
	}

	const handleCustomAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCustomAmount(event.target.value)
		setSelectedAmount(null)
	}

	const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		const formattedValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1   ')
		setCardNumber(formattedValue)
	}

	const handleExpiryDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		const formattedValue = value
			.replace(/\D/g, '')
			.replace(/(\d{2})(?=\d)/, '$1/')
			.substring(0, 5)
		setExpiryDate(formattedValue)
	}

	const renderDonateView = () => (
		<>
			<div className={style.contact_title}>
				<h1>ПОДДЕРЖАТЬ ПРОЕКТ</h1>
				<p>
					Если вам нравится наш проект и вы хотите поддержать нас, вы можете сделать
					<br /> пожертвование, чтобы помочь нам расти и развиваться. Мы ценим любую помощь!
				</p>
			</div>

			<div className={style.contact_info}>
				<div className={style.contact_info_content}>
					<div className={style.monthly}>
						<div
							className={selectedOption === 'monthly' ? style.element_active : style.element}
							onClick={() => handleOptionChange('monthly')}
						>
							Ежемесячно
						</div>
						<div
							className={selectedOption === 'oneTime' ? style.element_active : style.element}
							onClick={() => handleOptionChange('oneTime')}
						>
							Разово
						</div>
					</div>
				</div>
				<hr />
				<div className={style.contact_info_content}>
					<div className={style.amount}>
						<h2>Размер пожертвования</h2>
						<label>
							<p>
								Другая сумма,
								<svg
									width='7'
									height='9'
									viewBox='0 0 7 9'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1.07692 9V7.4205H0V6.858H1.07692V5.32237H0V4.75987H1.07692V0H4.45308C5.16313 0 5.76513 0.257812 6.25908 0.773438C6.75303 1.28906 7 1.91756 7 2.65894C7 3.40031 6.75303 4.02956 6.25908 4.54669C5.76513 5.06381 5.16295 5.32237 4.45254 5.32237H1.61538V6.858H3.76923V7.4205H1.61538V9H1.07692ZM1.61538 4.75987H4.45308C5.00769 4.75987 5.481 4.55494 5.873 4.14506C6.265 3.73519 6.46118 3.24037 6.46154 2.66062C6.4619 2.08087 6.26572 1.58625 5.873 1.17675C5.48028 0.76725 5.00697 0.5625 4.45308 0.5625H1.61538V4.75987Z'
										fill='#999999'
									/>
								</svg>
							</p>
							<input
								type='text'
								name='amount'
								placeholder='0'
								value={customAmount}
								onChange={handleCustomAmountChange}
							/>
						</label>
						<div className={style.amounts}>
							<div
								className={
									selectedAmount === 100 ? style.donat_amount_active : style.donat_amount
								}
								onClick={() => handleAmountClick(100)}
							>
								<p>100 </p> <Image src={ruble} alt='ruble' />
							</div>
							<div
								className={
									selectedAmount === 300 ? style.donat_amount_active : style.donat_amount
								}
								onClick={() => handleAmountClick(300)}
							>
								<p>300 </p> <Image src={ruble} alt='ruble' />
							</div>
							<div
								className={
									selectedAmount === 500 ? style.donat_amount_active : style.donat_amount
								}
								onClick={() => handleAmountClick(500)}
							>
								<p>500 </p> <Image src={ruble} alt='ruble' />
							</div>
							<div
								className={
									selectedAmount === 1000 ? style.donat_amount_active : style.donat_amount
								}
								onClick={() => handleAmountClick(1000)}
							>
								<p>1000 </p> <Image src={ruble} alt='ruble' />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className={style.contact_info_content}>
					<div className={style.info_inputs}>
						<h2>Ваши данные</h2>
						<input type='email' placeholder='E-mail' name='surname' id={emailId} />
						<input type='text' placeholder='Имя и Фамилия' name='name' id={nameId} />

						<div className={style.agreements}>
							<div>
								<CheckBox checked={isChecked} onChange={handleCheckboxChange} />
								<p>Соглашаюсь с офертой</p>
							</div>
							<div>
								<CheckBox checked={isChecked} onChange={handleCheckboxChange} />
								<p>Соглашаюсь на обработку моих персональных данных</p>
							</div>
						</div>

						<div className={style.send_btn}>
							<button onClick={() => setCurrentView('payment')}>Пожертвовать</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)

	const renderPaymentView = () => (
		<>
			<div className={style.contact_title}>
				<h1>ОПЛАТА</h1>
			</div>

			<div className={style.contact_info}>
				<div className={style.contact_info_content}>
					<div className={style.info_inputs}>
						<div className={style.input_wrap}>
							<p>Номер кредитной карты</p>
							<div className={style.input}>
								<input
									type='text'
									placeholder='0123   4567   8901   2345'
									name='number'
									id={cardNumberId}
									value={cardNumber}
									onChange={handleCardNumberChange}
									maxLength={25}
								/>
								<Image src={cards} alt='cards' />
							</div>
						</div>
						<div className={style.input_wrap}>
							<p>Имя владельца карты</p>
							<input type='text' placeholder='Имя и Фамилия' name='name' id={cardNameId} />
						</div>

						<div className={style.duo_input}>
							<div className={style.input_wrap}>
								<p>Срок действия</p>
								<input
									type='text'
									placeholder='MM/YY'
									name='date'
									id={expiryDateId}
									value={expiryDate}
									onChange={handleExpiryDateChange}
									maxLength={5}
								/>
							</div>

							<div className={style.input_wrap}>
								<p>CVV / CVC</p>
								<input
									type='text'
									maxLength={3}
									placeholder='3 цифры на обороте'
									name='cvv'
									id={cvvId}
								/>
							</div>
						</div>
						<div className={style.agreements}>
							<div>
								<CheckBox checked={isChecked} onChange={handleCheckboxChange} />
								<p>Сохранить для оплаты позже</p>
							</div>
						</div>

						<div className={style.send_btn}>
							<button onClick={() => setCurrentView('thanks')}>Платить</button>
						</div>
					</div>
				</div>

				<Image src={elipse} className={style.elipse} alt='elipse' />
				<Image src={elipse2} className={style.elipse2} alt='elipse2' />
			</div>
		</>
	)

	const renderThanksView = () => (
		<div className={style.contact_info}>
			<div className={style.contact_info_content}>
				<Image src={thanks} alt='thanks' className={style.thanks_img} />
				<div className={style.thanks}>
					<h1>Благодарим вас за вашу поддержку!</h1>
					<p>
						Мы искренне благодарим вас за вашу доброту и<br /> щедрость. Ваше пожертвование имеет огромное
						<br />
						значение для нашего проекта и поможет нам
						<br /> продолжать наше дело.
					</p>
				</div>
				<div className={style.send_btn}>
					<button onClick={() => setCurrentView('donate')}>Назад на предыдущую страницу</button>
				</div>
			</div>

			<Image src={elipse} className={style.elipse} alt='elipse' />
			<Image src={elipse2} className={style.elipse2} alt='elipse2' />
		</div>
	)

	return (
		<div className={style.contact_wrap}>
			{currentView === 'donate' && renderDonateView()}
			{currentView === 'payment' && renderPaymentView()}
			{currentView === 'thanks' && renderThanksView()}
		</div>
	)
}

export { SupportProject }
