import React, { useState } from 'react'
import HeadProject from './headProject/HeadProject'
import style from './style/project.module.css'
import BillFizik from './billFizik/BillFizik'
import BillIp from './billIp/BillIp'

const Bill = () => {
	return (
		<div className={style.container}>
			<div className={style.container_block}>
				<div className={style.conteiner_header}>
					<HeadProject />
				</div>
				<div>
					<hr />
				</div>
				<div className={style.conteiner_table}>
					<BillIp />
				</div>
			</div>
		</div>
	)
}

export default Bill
