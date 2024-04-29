import React from 'react'
import { Link } from 'react-router-dom';
import BurgerMenu from './burgerMenu/BurgerMenu';
import ChangeLanguage from './changeLang/ChangeLang';

import styles from './Header.module.scss'
const Header = ({ setInfo, info }) => {
  return (
    <header className="header">
      <Link to='/'>
        <img className={styles.header_logo} src="/logo.png" alt="" />
      </Link>
      <ChangeLanguage setInfo={setInfo} info={info} />
      <BurgerMenu />
    </header>
  );
}

export default Header