import React, { useState } from 'react'
import cl from './style/sideBar.module.css'
import { Link } from 'react-router-dom'
import home from '../../assets/home.svg'
import barChat from '../../assets/bar-chart-2.svg'
import layers from '../../assets/3-layers.svg'
import checkSquares from '../../assets/check-square.svg'
import flag from '../../assets/flag.svg'
import fileText from '../../assets/file-text.svg'
import bookOpen from '../../assets/book-open.svg'
import chevronDown from '../../assets/chevron-down.svg'
import settings from '../../assets/settings.svg'
import Button from '../ui/button/Button'
import avatar from '../../assets/Avatar.svg'
import logOut from '../../assets/log-out.svg'
import Input from '../ui/input/Input'
import search from '../../assets/search.svg'
import DiosLogo from '../../assets/Dios_logo.svg'
import { CSSTransition } from 'react-transition-group';

const dropDowns = {
	transition: false,
	plan: false,
	reports: false,
	data: false
}

const Navbar = () => {
	const [dropDown, setDropDown] = useState({dropDowns})

	function changeDropDown(dropName){
		setDropDown((prevState) =>{
			const newState = {...dropDowns, [dropName]: !prevState[dropName]}
			return newState;
		})
	}

	return (
		<nav className={cl.block__nav}>
			<div className={cl.nav}>
				<div className={cl.head}>
					<img style={{marginRight: '6px'}} src={DiosLogo} alt="DISO_LOGO"/>
					<h2>
						ДИОК.<span>ФИНАНСЫ</span>
					</h2>
				</div>
				<div className={cl.search_block}>
					<div className={cl.search_block_input}>
						<div>
							<img src={search} alt='search' />
						</div>
						<div className={''}>
							<Input placeholder='Поиск' />
						</div>
					</div>
				</div>
				<div className={cl.nav_panel}>
					<div className={cl.sidebar_item}>
						<Link className={cl.sidebar_title} to='/indicators'>
							<img src={home} alt='home' /> Показатели
						</Link>
					</div>
					<div className={cl.sidebar_item}>
						<Link className={cl.sidebar_title} to='/operations'>
							<img src={barChat} alt='barChat' />
							Операции
						</Link>
					</div>
					<div className={cl.sidebar_item} onClick={() => changeDropDown('transition')}>
						<Link className={cl.sidebar_title}>
							<img src={layers} alt='layers' />
							Сделки
						</Link>
						{dropDown.transition ? <img style={{transform: 'rotate(180deg)'}} src={chevronDown} alt='chevronDown' /> 
						: <img src={chevronDown} alt='chevronDown' />}
					</div>
					{dropDown.transition && (
						<>
							<div className={cl.sidebar_item}>
								<Link className={cl.sidebar_title} to='/sales'>
									Продажи
								</Link>
							</div>
							<div className={cl.sidebar_item}>
								<Link className={cl.sidebar_title} to='/purchase'>
									Закупки
								</Link>
							</div>
							<div className={cl.sidebar_item}>
								<Link className={cl.sidebar_title} to='/bill'>
									Счета
								</Link>
							</div>
						</>
						
					)}
					<div className={cl.sidebar_item} onClick={() => changeDropDown('plan')}>
						<Link className={cl.sidebar_title}>
							<img src={checkSquares} alt='checkSqu' />
							План
						</Link>
						<div>
						{dropDown.plan ? <img style={{transform: 'rotate(180deg)'}} src={chevronDown} alt='chevronDown' /> 
						: <img src={chevronDown} alt='chevronDown' />}
						</div>
					</div>
					{dropDown.plan && (
						<>
							<div className={cl.sidebar_item}>
								<Link className={cl.sidebar_title} to='/payment-calendar'>
									Платежный календарь
								</Link>
							</div>
							<div className={cl.sidebar_item}>
								<Link className={cl.sidebar_title} to='/budget-income-expenses'>
									Бюджет доходов и расходов
								</Link>
							</div>
							<div className={cl.sidebar_item}>
								<Link className={cl.sidebar_title}>Бюджет движения денег</Link>
							</div>
						</>
					)}
					<div className={cl.sidebar_item}>
						<Link className={cl.sidebar_title} to='/project'>
							<img src={flag} alt='flag' />
							Проекты
						</Link>
					</div>
					<div className={cl.sidebar_item} onClick={() => changeDropDown('reports')}>
						<Link className={cl.sidebar_title}>
							<img src={fileText} alt='fileText' />
							Отчеты
						</Link>
						{dropDown.reports ? <img style={{transform: 'rotate(180deg)'}} src={chevronDown} alt='chevronDown' /> 
						: <img src={chevronDown} alt='chevronDown' />}
					</div>
					{dropDown.reports && (
						<>
							<div className={cl.sidebar_item}>
								<Link to='/reports' className={cl.sidebar_title}>
									Движение денег(ДДС)
								</Link>
							</div>
							<div className={cl.sidebar_item}>
								<Link to='/reports-opu' className={cl.sidebar_title}>
									Прибыли и убытки(ОПУ)
								</Link>
							</div>
							<div className={cl.sidebar_item}>
								<Link className={cl.sidebar_title}>Балансовый отчет</Link>
							</div>
						</>
					)}
					<div className={cl.sidebar_item} onClick={() => changeDropDown('data')}>
						<Link className={cl.sidebar_title}>
							<img src={bookOpen} alt='bookrOpen' />
							Мои данные
						</Link>
						{dropDown.data ? <img style={{transform: 'rotate(180deg)'}} src={chevronDown} alt='chevronDown' /> 
						: <img src={chevronDown} alt='chevronDown' />}
					</div>
					{

					}
					{dropDown.data && (
						<>
							<div className={cl.sidebar_item}>
								<Link to='/entities' className={cl.sidebar_title}>
									Юрлица
								</Link>
							</div>
							<div className={cl.sidebar_item}>
								<Link to='/accounts' className={cl.sidebar_title}>
									Счета
								</Link>
							</div>
							<div className={cl.sidebar_item}>
								<Link className={cl.sidebar_title}>Товары и услуги</Link>
							</div>
							<div className={cl.sidebar_item}>
								<Link className={cl.sidebar_title} to={'/accounting-items'}>
									Контрагенты
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
			<div className={cl.footer}>
				<div className={cl.sidebar_item}>
					<Link className={cl.sidebar_title} to='/settings'>
						<img src={settings} alt='settings' />
						Настройки
					</Link>
				</div>
				<div className={cl.featured_card}>
					<div>
						<span className={cl.support_text}>На счетах</span>
						<span className={cl.support}>На счетах 491 300.00 ₽</span>
					</div>
					<div>
						<Button color="blue" backgroundColor="var(--gray-50, #f9fafb)">Разрыв с 28.08.23 по 09.09.23</Button>
					</div>
				</div>
				<hr />
				<div className={cl.accounts}>
					<div className={cl.avatar_group}>
						<div className={cl.avatar}>
							<img src={avatar} alt='avatar' />
						</div>
						<div className={cl.accounts_supprot_text}>
							<span className={cl.account_name}>Даниил Шабак</span>
							<span className={cl.account_email}>shab@dioc.ru</span>
						</div>
					</div>
					<div>
						<Link>
							<img src={logOut} alt='logOut' />
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
