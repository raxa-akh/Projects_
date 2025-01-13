'use client'

import React from 'react'
import styles from './Recommendations.module.css'
import RecItem from './RecItem.tsx'

export default function Recommendations() {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.recItem}>
					<div className={styles.recItem_head}>
						<span className={styles.recItem_head_titlez}>Лучшие треки</span>
						<span className={styles.recItem_head_more}>Показать все</span>
					</div>
					<div className={styles.recItem_body}>
						<RecItem />
						<RecItem />
						<RecItem />
						<RecItem />
						<RecItem />
					</div>
				</div>
				<div className={styles.recItem}>
					<div className={styles.recItem_head}>
						<span className={styles.recItem_head_titlez}>Лучшие треки</span>
						<span className={styles.recItem_head_more}>Показать все</span>
					</div>
					<div className={styles.recItem_body}>
						<RecItem />
						<RecItem />
						<RecItem />
						<RecItem />
						<RecItem />
					</div>
				</div>
				<div className={styles.recItem}>
					<div className={styles.recItem_head}>
						<span className={styles.recItem_head_titlez}>Лучшие треки</span>
						<span className={styles.recItem_head_more}>Показать все</span>
					</div>
					<div className={styles.recItem_body}>
						<RecItem />
						<RecItem />
						<RecItem />
						<RecItem />
						<RecItem />
					</div>
				</div>
			</div>
		</div>
	)
}
