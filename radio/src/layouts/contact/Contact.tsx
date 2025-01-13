'use client'

import { useId } from 'react'
import React, { useState } from 'react'
import style from './contact.module.scss'
import geolocation from '@/components/icons/geolocation.svg'
import numberIcon from '@/components/icons/number.svg'
import emailIcon from '@/components/icons/email.svg'
import elipse from '@/components/icons/elipse.svg'
import elipse2 from '@/components/icons/elipse2.svg'
import Image from 'next/image'

type InputTypes = {
	password1: string
	password2: string
	password3: string
}

const Contact: React.FC = () => {
	const [inputTypes, setInputTypes] = useState<InputTypes>({
		password1: 'password',
		password2: 'password',
		password3: 'password'
	})

	const toggleInputType = (inputName: keyof InputTypes) => {
		setInputTypes(prevTypes => ({
			...prevTypes,
			[inputName]: prevTypes[inputName] === 'password' ? 'text' : 'password'
		}))
	}

	return (
		<div className={style.contact_wrap}>
			<div className={style.contact_title}>
				<h1>КОНТАКТЫ</h1>
				<p>
					Наша команда доступна для связи с вами. Вы можете позвонить нам по номеру, написать на почту или
					посетить наш офис по адресу.
				</p>
				<div className={style.contacts}>
					<div>
						<Image src={geolocation.src} alt='geo'  width={22} height={28}/>
						<label>
							<p>Адрес</p> <span>г. Москва, ул. Сергея Макеева, д.4</span>
						</label>
					</div>
					<div>
						<Image src={numberIcon.src} alt='numberIcon' width={23}  height={23}/>
						<label>
							<p>Телефон</p> <span>+7 (495) 128-79-49</span>
						</label>
					</div>
					<div>
						<Image src={emailIcon.src} alt='emailIcon' width={24}  height={20}/>
						<label>
							<p>E-mail</p> <span>info@nenadolyalya.ru</span>
						</label>
					</div>
				</div>
			</div>
			<div className={style.contact_info}>
				<div className={style.info_avatar}>
					<p>
						Здесь вы можете оставить свое сообщение с предложением о рекламном сотрудничестве. Мы всегда
						рады новым идеям и возможностям для развития!
					</p>
				</div>
				<div className={style.info_inputs}>
					<input type='text' placeholder='Имя' name='name' id={useId()} />
					<input type='email' placeholder='E-mail' name='surname' id={useId()} />
					<textarea placeholder='Текст сообщения' name='email' id={useId()} />
				</div>

				<div className={style.send_btn}>
					<button>Отправить</button>
				</div>

				<Image src={elipse.src} className={style.elipse} alt='elipse' width={1}  height={1}/>
				<Image src={elipse2.src} className={style.elipse2} alt='elipse2' width={1}  height={1}/>
			</div>
		</div>
	)
}

export { Contact }
