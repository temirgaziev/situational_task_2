import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { navData } from '../../../common/mooks'

import styles from './BurgerMenu.module.scss'

const BurgerMenu = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const {t} = useTranslation()

  return (
    <div className={styles.burgerMenu}>
      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.Menu}>
        <img src="/icons/burger.png" alt="" />
      </div>
      <div className={styles.toggleMenu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.MenuMain} onClick={() => setIsMenuOpen(false)}>
            
        <ul className={isMenuOpen ? styles.active : styles.notActive}>
            X
          {navData.map((nav, i) => (
              <li  key={i} onClick={e => e.stopPropagation()}>
                <Link to={`${nav.path}`}>{t(`navigation.${nav.title}`)}</Link>
            </li>
          ))}
        </ul>
          </div>
      </div>
    </div>
  );
}

export default BurgerMenu