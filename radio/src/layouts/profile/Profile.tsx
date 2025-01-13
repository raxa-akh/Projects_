'use client'

import { useId } from 'react'
import React, { useState, ChangeEvent } from 'react'
import style from './profile.module.scss'
import CheckBox from '../../components/checkBox/CheckBox'
import avatarImg from '../../components/icons/avatar.svg'
import uploadImg from '../../components/icons/import.svg'
import deleteImg from '../../components/icons/delete.svg'
import eyeImg from '../../components/icons/close_eye.svg'
import eyeOffImg from '../../components/icons/open_eye.svg'
import elipseImg from '../../components/icons/elipse.svg'
import elipse2Img from '../../components/icons/elipse2.svg'
import Image from 'next/image'

type InputTypes = {
	password1: string
	password2: string
	password3: string
}

const Profile: React.FC = () => {
	const [inputTypes, setInputTypes] = useState<InputTypes>({
		password1: 'password',
		password2: 'password',
		password3: 'password'
	})

	const [isChecked, setIsChecked] = useState(false)

	const toggleInputType = (inputName: keyof InputTypes) => {
		setInputTypes(prevTypes => ({
			...prevTypes,
			[inputName]: prevTypes[inputName] === 'password' ? 'text' : 'password'
		}))
	}

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked)
	}

	return (
		<div className={style.profile_wrap}>
			<div className={style.profile_info}>
				<div className={style.info_avatar}>
					<div className={style.left}>
						<div className={style.avatar}>
							<Image src={avatarImg} alt='Avatar' />
						</div>
						<div className={style.profile_control}>
							<label>
								<Image src={uploadImg} alt='Upload' />
								Загрузить
							</label>
							<label>
								<Image src={deleteImg} alt='Delete' />
								Удалить
							</label>
						</div>
					</div>
					<div className={style.profile_save}>
						<button>Сохранить</button>
					</div>
				</div>
				<div className={style.info_inputs}>
					<h3>Личные данные</h3>
					<input type='text' placeholder='Имя' name='name' id={useId()} />
					<input type='text' placeholder='Фамилия' name='surname' id={useId()} />
					<input type='email' placeholder='Почта' name='email' id={useId()} />
				</div>
				<Image src={elipseImg} className={style.elipse} alt='Elipse' />
				<Image src={elipse2Img} className={style.elipse2} alt='Elipse2' />
			</div>
			<div className={style.change_password}>
				<div className={style.info_inputs2}>
					<h3>Смена пароля</h3>
					<div className={style.input_wrap}>
						<input
							type={inputTypes.password1}
							placeholder='Текущий пароль'
							name='password1'
							id={useId()}
						/>
						{inputTypes.password1 === 'password' ? (
							<Image
								src={eyeImg}
								onClick={() => toggleInputType('password1')}
								style={{ cursor: 'pointer' }}
								alt='Eye'
							/>
						) : (
							<Image
								src={eyeOffImg}
								onClick={() => toggleInputType('password1')}
								style={{ cursor: 'pointer' }}
								alt='EyeOff'
							/>
						)}
					</div>
					<div className={style.input_wrap}>
						<input type={inputTypes.password2} placeholder='Новый пароль' name='password2' id={useId()} />
						{inputTypes.password2 === 'password' ? (
							<Image
								src={eyeImg}
								onClick={() => toggleInputType('password2')}
								style={{ cursor: 'pointer' }}
								alt='Eye'
							/>
						) : (
							<Image
								src={eyeOffImg}
								onClick={() => toggleInputType('password2')}
								style={{ cursor: 'pointer' }}
								alt='EyeOff'
							/>
						)}
					</div>
					<div className={style.input_wrap}>
						<input
							type={inputTypes.password3}
							placeholder='Подтвердить новый пароль'
							name='password3'
							id={useId()}
						/>
						{inputTypes.password3 === 'password' ? (
							<Image
								src={eyeImg}
								onClick={() => toggleInputType('password3')}
								style={{ cursor: 'pointer' }}
								alt='Eye'
							/>
						) : (
							<Image
								src={eyeOffImg}
								onClick={() => toggleInputType('password3')}
								style={{ cursor: 'pointer' }}
								alt='EyeOff'
							/>
						)}
					</div>
				</div>
				<Image src={elipseImg} className={style.elipse} alt='Elipse' />
				<Image src={elipse2Img} className={style.elipse2} alt='Elipse2' />
			</div>
			<div className={style.confirm}>
				<div className={style.clue}>
					<CheckBox checked={isChecked} onChange={handleCheckboxChange} />
					<p>Получение специальных предложений и акций по электронной почте.</p>
				</div>
				<div className={style.logout_btn}>
					<button>Выйти из аккаунта</button>
				</div>
			</div>
		</div>
	)
}

export { Profile }
