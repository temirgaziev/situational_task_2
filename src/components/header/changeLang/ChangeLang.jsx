import React, { useEffect, useState } from 'react'
import styles from './ChangeLanguage.module.scss'
import { useTranslation } from 'react-i18next'
import '../../../i18next'

export default function ChangeLanguage({ setInfo, info }) {
    
	const [localRU, setLocalRU] = useState(true)
	const [localEN, setLocalEN] = useState(true)
	const [localKG, setLocalKG] = useState(true)
	const { i18n } = useTranslation()
	const changleLanguage = lang => {
		i18n.changeLanguage(lang)
	}

	const check = lank => {
		changleLanguage(lank)
		if (localStorage.getItem('i18nextLng')) {
			const data = localStorage.getItem('i18nextLng')
			if (data === 'ru') {
				setLocalEN(true)
				setLocalRU(false)
				setLocalKG(true)
				setInfo('ru')
			} else if (data === 'kg') {
				setLocalEN(true)
				setLocalRU(true)
				setLocalKG(false)
				setInfo('kg')
			}else {
				setLocalEN(false)
				setLocalRU(true)
				setLocalKG(true)
				setInfo('en')
			}
		}
	}
	useEffect((t) => {
		check(t)
		changleLanguage(t)
	}, [localRU, localEN, localKG])


	return (
		<div className={styles.language__wrapper}>
			<button
				className={localEN ? '' : styles.active}
				onClick={() => check('en')}
			>
				EN
			</button>
			<div>/</div>
			<button
				className={localRU ? '' : styles.active}
				onClick={() => check('ru')}
			>
				RU
			</button>
            <div>/</div>
			<button
				className={localKG ? '' : styles.active}
				onClick={() => check('kg')}
			>
				KG
			</button>
		</div>
	)
}