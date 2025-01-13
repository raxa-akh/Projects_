import React, { useState } from 'react'
import HeadProject from './headProject/HeadProject'
import style from './style/pageBDR.module.css'
import BDRempty from './headProject/BDRempty/BDRempty'
import ListBDR from './listBDR/ListBDR'
import FilterBDR from './listBDR/filterBDR/FilterBDR'
import FilterBlockProject from '../../components/filterBlock/filterBlockProject/FilterBlockProject'

const PageBDR = () => {
	const [selectedValue, setSelectedValue] = useState('')
	const [open, setOpen] = useState(false)
	return (
		<div className={style.container}>
			<div className={style.container_block}>
				<div className={style.conteiner_header}>
					<HeadProject />
				</div>
				<div>
					<hr />
				</div>

				<ListBDR />

				<div>
					<FilterBDR setVisible={setOpen} />
					{open && <FilterBlockProject />}
				</div>
			</div>
		</div>
	)
}

export default PageBDR
