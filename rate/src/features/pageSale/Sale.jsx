import React, { useState } from 'react'
import FilterBlockSale from '../../components/filterBlock/filterBlockSale/FilterBlockSale'
import HeadSale from './headSale/HeadSale'
import style from './style/sale.module.css'
import TableSale from './tableSale/TableSale'
import FilterSale from './filterSale/FilterSale'

const Sale = () => {
	const [selectedValue, setSelectedValue] = useState('')
	const handleSelectedValueChange = value => {
		setSelectedValue(value)
	}
	const [open, setOpen] = useState(false)
	return (
		<div className={style.container}>
			<div className={style.container_block}>
				<div className={style.conteiner_header}>
					<HeadSale selectedValue={selectedValue} />
				</div>
				<div>
					<hr />
				</div>
				<div className={style.conteiner_table}>
					<TableSale selectedValue={selectedValue} />
				</div>
			</div>
			<div>
				<FilterSale setVisible={setOpen} />
				{open && <FilterBlockSale onSelectedValueChange={handleSelectedValueChange} />}
			</div>
		</div>
	)
}

export default Sale
