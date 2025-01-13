import React, { useState } from 'react'
import FilterBlockProject from '../../components/filterBlock/filterBlockProject/FilterBlockProject'
import HeadProject from './headProject/HeadProject'
import style from './style/project.module.css'
import TableProject from './tableProject/TableProject'
import FilterSale from './filterSale/FilterSale'

const Purchase = () => {
	const [selectedValue, setSelectedValue] = useState('')
	const handleSelectedValueChange = value => {
		setSelectedValue(value)
	}
	const [btnProject, setBtnProject] = useState(true)
	const [btnPurchase, setBtnPurchase] = useState(false)
	const [open, setOpen] = useState(false)
	return (
		<div className={style.container}>
			<div className={style.container_block}>
				<div className={style.conteiner_header}>
					<HeadProject
						selectedValue={selectedValue}
						btnProject={btnProject}
						setBtnProject={setBtnProject}
						btnPurchase={btnPurchase}
						setBtnPurchase={setBtnPurchase}
					/>
				</div>
				<div>
					<hr />
				</div>
				<div className={style.conteiner_table}>
					<TableProject
						selectedValue={selectedValue}
						btnProject={btnProject}
						setBtnProject={setBtnProject}
						btnPurchase={btnPurchase}
						setBtnPurchase={setBtnPurchase}
					/>
				</div>
			</div>
			<div>
				<FilterSale setVisible={setOpen} />
				{open && <FilterBlockProject onSelectedValueChange={handleSelectedValueChange} />}
			</div>
		</div>
	)
}

export default Purchase
