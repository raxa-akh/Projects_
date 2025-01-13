import style from './style/bDRempty.module.css'
import { useState } from 'react'
import NewBDR from '../../newBDR/NewBDR'
import Modal from '../../../../components/ui/modal/Modal'

const BDRempty = () => {
	const [newBDR, setnewBDR] = useState(false)
	const handlenewBDR = () => {
		setnewBDR(true)
	}
	return (
		<div className={style.empty}>
			<h1>Создайте бюджет доходов и расходов (БДР)</h1>
			<p>
				Планируйте доходы и расходы, чтобы отслеживать вероятные прибыли.
				<br />
				<span>Прочитайте статью</span>, чтобы узнать, как лучше использовать бюджет.
			</p>
			<button onClick={handlenewBDR}>
				<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M20.0002 1.33333V38.6667M1.3335 20H38.6668'
						stroke='#344054'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</button>
			{newBDR && (
				<Modal visible={newBDR} setVisible={setnewBDR}>
					<NewBDR />
				</Modal>
			)}
		</div>
	)
}

export default BDRempty
