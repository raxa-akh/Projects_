import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../sideBar/SideBar'
import cl from './style/layout.module.css'

const Layout = () => {
	return (
		<div className={cl.layout}>
			<SideBar />
			<div className={cl.outlet}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
