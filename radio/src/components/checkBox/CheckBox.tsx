'use client'

import React, { ChangeEvent } from 'react'
import style from './checkbox.module.scss'

interface CheckBoxProps {
	checked: boolean
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange }) => {
	return (
		<div className={style.checkbox}>
			<label>
				<input type='checkbox' checked={checked} onChange={onChange} />
				<span className={style.checkmark}></span>
			</label>
		</div>
	)
}

export default CheckBox
