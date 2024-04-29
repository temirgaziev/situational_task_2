import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { parkingData } from '../common/parkingData'
import Header from './header/Header'

import '../i18next'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import styles from './Main.module.scss'
import { Navigation } from 'swiper'

const Main = () => {

  const { t } = useTranslation()
	const [info, setInfo] = useState()
	const [juxtapose, setJuxtapose] = useState(220)

	useEffect(() => {
		if (localStorage.getItem('i18nextLng') !== '') {
			setInfo(localStorage.getItem('i18nextLng'))
		}
	}, [info])


  const juxtaposeF = () => {
    if (window.innerWidth > 640) {
      setJuxtapose(500)
    } else {
      setJuxtapose(250)
    }
  }
  useEffect(() => {
    juxtaposeF()
  })

  return (
    <>
      <Header setInfo={setInfo} info={info} />
      <div className="content">
        <div className={styles.main}>
          <div className={styles.main_topImg}>
            <img src="/images/main/top.png" alt="2" />
            <img src="/images/main/top2.png" alt="2" />
          </div>

          <div className={styles.main_bottom}>
            <div className={styles.leftImg}>
              <img src="/images/main/top3.png" alt="2" />
            </div>

            <div className={styles.main_title}>
              <h1>{t("mainPage.title")}</h1>
              <div className={styles.bottom_right}>
                <div className={styles.right_img}>
                  <img src="/images/main/top4.png" alt="2" />
                </div>
                <div className={styles.main_description}>
                  <p>{t("mainPage.desc")}</p>
                  <div className={styles.video}>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/CN0Ummnnw6Q" title="Manas Ordo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* complex story */}
        <div className={styles.complex}>
          <div className={styles.complex_left}>
            {/* <h2>{t("mainPage.title")}</h2> */}
            <p>{t("mainPage.desc2")}</p>
          </div>
        </div>
        {/* arch */}
        <div className={styles.arch}>
          <div className={styles.arch_left}>
            <h2>{t("mainPage.arch.title")}</h2>
            <p>{t("mainPage.arch.desc")}</p>
          </div>
          <div className={styles.arch_right}>
            <img src="/images/main/arch.png" alt="" />
          </div>
        </div>
        {/* parking */}
        <div className={styles.parking}>
          <div className={styles.parking_left}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className={styles.Swiper}
              modules={Navigation}
            >
              {parkingData.map((item, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                  <img src={item} alt="archive" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.parking_right}>
            <h2>{t("mainPage.parking.title")}</h2>
            <p>{t("mainPage.parking.desc")}</p>
          </div>
        </div>
        {/* khan yurt */}
        <div className={styles.khanYurt}>
          <div className={styles.khanYurt_left}>
            <h2>{t("mainPage.khanYurt.title")}</h2>
            <p>{t("mainPage.khanYurt.desc")}</p>
          </div>
          <div className={styles.khanYurt_right}>
            <img src="/images/main/khanYurt.png" alt="" />
          </div>
        </div>
        {/* garden */}
        <div className={styles.garden}>
          <h2>{t("mainPage.garden.title")}</h2>
          <p>{t("mainPage.garden.desc")}</p>
          <img src="/images/main/garden.png" alt="" />
        </div>
        {/* alley */}
        <div className={styles.Alley}>
          <div className={styles.Alley_left}>
            <h2>{t("mainPage.alley.title")}</h2>
            <p>{t("mainPage.alley.desc")}</p>
            <p>{t("mainPage.alley.desc2")}</p>
          </div>
          <div className={styles.Alley_right}>
            <img src="/images/main/alley/alley.png" alt="" />
          </div>
        </div>
        {/* 40 warriors */}
        <div className={styles.Warriors}>
          <div className={styles.Warriors_left}>
            <img src="/images/main/velik1.png" alt="" />
            <img src="/images/main/velik2.png" alt="" />
            <img src="/images/main/velik3.png" alt="" />
          </div>
          <div className={styles.Warriors_right}>
            <h2>{t("mainPage.warriors.title")}</h2>
            <p>{t("mainPage.warriors.desc")}</p>
          </div>
        </div>
        {/* kumbez */}
        <div className={styles.Kumbez}>
          <h2>{t("mainPage.kumbez.title")}</h2>
          <p>{t("mainPage.kumbez.desc")}</p>
          <img src="/images/main/kumbez.png" alt="" />
          <p>{t("mainPage.kumbez.desc2")}</p>
          <iframe frameBorder="0" title="archeology" className="juxtapose" width="100%" height={juxtapose} src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=1f9eb3f8-8daf-11ed-b5bd-6595d9b17862"></iframe>
          {/* <img src="/images/main/kumbez2.png" alt="" /> */}
          <p>{t("mainPage.kumbez.desc3")}</p>
          <div className={styles.Kumbez_Img}>
            <img src="/images/main/kumbez3.png" alt="" />
            <img src="/images/main/kumbez4.png" alt="" />
            <img src="/images/main/kumbez5.png" alt="" />
          </div>
        </div>
        {/* sentinel mountain */}
        <div className={styles.sentinel}>
          <h2>{t("mainPage.sentinelMountain.title")}</h2>
          <div className={styles.sentinelWrapper}>
            <div className={styles.sentinelWrapper_right}>
              <p>{t("mainPage.sentinelMountain.desc")}</p>
              <img src="/images/main/dozor.png" alt="" />
            </div>
            <div className={styles.sentinelWrapper_left}>
              <p>{t("mainPage.sentinelMountain.desc2")}</p>
              <img src="/images/main/dozor2.png" alt="" />
            </div>
            <div className={styles.sentinelWrapper_right}>
              <p>{t("mainPage.sentinelMountain.desc3")}</p>
              <img src="/images/main/dozor3.png" alt="" />
            </div>
          </div>
        </div>
        {/* museum open air */}
        <div className={styles.OpenAir}>
          <h2>{t("mainPage.openAirMuseum.title")}</h2>
          <p>{t("mainPage.openAirMuseum.desc")}</p>
          <div className={styles.OpenAir_Img}>
            <img src="/images/main/openAir.png" alt="" />
            <img src="/images/main/openAir2.png" alt="" />
            <img src="/images/main/openAir3.png" alt="" />
          </div>
          <p>{t("mainPage.openAirMuseum.desc")}</p>
        </div>
        {/* museum Epos Epic */}
        <div className={styles.museumEpos}>
          <h2>{t("mainPage.museumOfTheEpic.title")}</h2>
          <img src="/images/main/museumEpos2.png" alt="" />
          <p>{t("mainPage.museumOfTheEpic.desc")}</p>
        </div>
        {/* tulookana */}
        <div className={styles.tulookana}>
          <h2>{t("mainPage.tulookana.title")}</h2>
          <div className={styles.tulookana_Wrapper}>
            <div className={styles.left}>
              <p>{t("mainPage.tulookana.desc")}</p>
              <img src="/images/main/tulookana.png" alt="" />
            </div>
            <div className={styles.right}>
              <p>{t("mainPage.tulookana.desc2")}</p>
              <img src="/images/main/tulookana2.png" alt="" />
            </div>
          </div>
        </div>
        {/* hippodrom */}
        {/* hippodrom */}
        {/* price */}
        <div className={styles.price}>
          <h2>{t("mainPage.price.title")}</h2>
          <div>
            <p>{t("mainPage.price.desc")}</p>
            <p>{t("mainPage.price.pricing")}</p>
            <p>{t("mainPage.price.pricing2")}</p>
            <p>{t("mainPage.price.pricing3")}</p>
            <p>{t("mainPage.price.pricing4")}</p>
            <p>{t("mainPage.price.pricing5")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main