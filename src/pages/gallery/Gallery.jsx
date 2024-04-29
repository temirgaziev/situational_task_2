import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { galleryData } from '../../common/galleryData'
import Header from '../../components/header/Header'

import styles from './Gallery.module.scss'

const Gallery = () => {


  const { t } = useTranslation()
	const [info, setInfo] = useState()
    return (
      <>
        <Header setInfo={setInfo} info={info} />
        <div className="content">
          <h1>{t('navigation.gallery')}</h1>
          <div className={styles.Gallery_grid}>
            {
              galleryData.map ((item, i) => (
                <img src={item} key={i} alt="" />
              ))
            }
          </div>
        </div>
      </>
    );
}

export default Gallery