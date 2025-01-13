import React, { useState } from 'react'
import style from './orderForm.module.scss'
import Image from 'next/image'
import order from '../icons/order.svg'
import elipseImg from '../icons/elipse.svg'
import elipse2Img from '../icons/elipse2.svg'
import close from '../icons/close.svg'
import success from '../icons/success.svg'

const useUniqueId = () => {
	const [id, setId] = useState('')

	useState(() => {
		setId(`id_${Math.random().toString(36).substr(2, 9)}`)
	})

	return id
}

const OrderForm: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const nameId = useUniqueId()
	const surnameId = useUniqueId()
	const emailId = useUniqueId()

	const toggleForm = () => {
		setIsOpen(!isOpen)
	}

	const handleSubmit = () => {
		setIsSubmitted(true)
	}

	return (
		<div className={style.OrderForm_wrap}>
			{!isOpen && (
				<div className={style.order_btn} onClick={toggleForm}>
					<Image src={order} alt='order' />
				</div>
			)}
			{isOpen && (
				<div className={`${style.order_form_wrap} ${isOpen ? style.open : ''}`}>
					<div className={style.close_btn} onClick={toggleForm}>
						<Image src={close} alt='close' />
					</div>

					<div className={style.order_form}>
						<div className={style.order_head}>
							<h2>ФОРМА ЗАКАЗА ПЕСЕН И ПОЗДРАВЛЕНИЙ</h2>
						</div>
						<div className={style.order_content}>
							{!isSubmitted && (
								<>
									<input type='text' placeholder='Имя *' name='name' id={nameId} />
									<input type='email' placeholder='E-mail *' name='surname' id={surnameId} />
									<textarea
										placeholder='Заказ песни или поздравления *'
										name='email'
										id={emailId}
									/>
									<div className={style.send_btn}>
										<button onClick={handleSubmit}>Отправить ссылку</button>
									</div>
									<Image src={elipseImg} className={style.elipse} alt='Elipse' />
									<Image src={elipse2Img} className={style.elipse2} alt='Elipse2' />
								</>
							)}
							{isSubmitted && (
								<div className={style.success}>
									<Image src={success} alt='success' />
									<p>
										Ваш заказ песни или поздравления успешно отправлен.
										<br /> Мы рассмотрим ваш запрос в<br /> ближайшее время.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export { OrderForm }
