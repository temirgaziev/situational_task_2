import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Archive.module.scss'

import Header from '../../components/header/Header'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ArchiveData } from '../../common/archiveData';
import { bookData, libraryData } from '../../common/libraryData';



const Archive = () => {
    
	const [info, setInfo] = useState()
	const [slide, setSlide] = useState(1)
  const { t } = useTranslation()

  const getWindowSize = () => {
    if (window.innerWidth > 640) {
      setSlide(2);
    } else {
      setSlide(1)
    }
  }

  useEffect(() => {
    getWindowSize()
  })

  return (
    <>
      <Header setInfo={setInfo} info={info} />
      <div className="content">
        <div className={styles.archive}>
          <div>
            <h1>{t("archive.title")}</h1>
            <p>{t("archive.desc")}</p>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={slide}
            className={styles.Swiper}
          >
            {ArchiveData.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <img src={item} alt="archive" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.archive_library}>
          <h2>{t("archive.library.title")}</h2>
          <div className={styles.library_Img}>
            {libraryData.map((item, i) => (
              <img key={i} src={item} alt="archive" />
            ))}
          </div>
            <h2>{t('archive.library.book')}</h2>
          <div className={styles.book_Img}>
            {bookData.map((item, i) => (
              <img key={i} src={item} alt="archive" />
            ))}
          </div>
        </div>
        <div className={styles.univer}>
          <h2>{t("archive.univer.title")}</h2>
          <div className={styles.univer_Wrapper}>
            <div>
              <p>{t("archive.univer.desc")}</p>
              <div className={styles.anchor}>
                <a
                  href="http://d.zaix.ru/xcmH.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  посмотреть
                </a>
              </div>
            </div>
            <div>
              <img src="/images/liba/diss.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src="/images/liba/unik1.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Archive