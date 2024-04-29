import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { navData } from '../../common/mooks'
import styles from './Sidebar.module.scss'


const Sidebar = () => {
  const [ active, setActive ] = useState(0)
  const { t } = useTranslation()

  const toggle = (i) => {
    setActive(i)
  }
  return (
    <nav className='nav'>
      <div className={styles.nav}>
        {
          navData.map((nav, i) => (
            <Link onClick={() => toggle(i)} key={i} className={active === i ? styles.active : ''} to={`${nav.path}`}>{t(`navigation.${nav.title}`)}</Link>
          ))
        }
        <a href="#footer">contacts</a>
      </div>
    </nav>
  )
}

export default Sidebar