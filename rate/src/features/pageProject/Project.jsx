import React, { useState } from 'react'
import FilterBlockProject from '../../components/filterBlock/filterBlockProject/FilterBlockProject'
import HeadProject from './headProject/HeadProject'
import style from './style/project.module.css'
import TableProject from './tableProject/TableProject'
import FilterProject from './filterProjext/FilterProject'

const Project = () => {
	const [selectedValue, setSelectedValue] = useState('')
	const handleSelectedValueChange = value => {
		setSelectedValue(value)
	}
	const [open, setOpen] = useState(false)
	return (
		<div className={style.container}>
			<div className={style.container_block}>
				<div className={style.conteiner_header}>
					<HeadProject selectedValue={selectedValue} />
				</div>
				<div>
					<hr />
				</div>
				<div className={style.conteiner_table}>
					<TableProject selectedValue={selectedValue} />
				</div>
			</div>
			<div>
				<FilterProject setVisible={setOpen} />
				{open && <FilterBlockProject onSelectedValueChange={handleSelectedValueChange} />}
			</div>
		</div>
	)
}

export default Project
