import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Header from '../../components/header/Header';

import styles from './Archeology.module.scss'

const Archeology = () => {
    
	const [info, setInfo] = useState()
  const {t} = useTranslation()

    return (
      <>
        <Header setInfo={setInfo} info={info} />
        <div className="content">
          <div className={styles.archeology}>
            <div className={styles.video}>
            <iframe width="300" height="200" src="https://www.youtube.com/embed/9rXoILcAPGA" title="Интервью директора археологического музея" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div>
              <h1>{t("archeological.title")}</h1>
              <p>{t("archeological.desc")}</p>
              <div className={styles.archeology_Img}>
                <img src="/images/archeology/archeology.png" alt="" />
                <img src="/images/archeology/archeology2.png" alt="" />
                <img src="/images/archeology/archeology3.png" alt="" />
                <img src="/images/archeology/archeology4.png" alt="" />
                <img src="/images/archeology/archeology5.png" alt="" />
              </div>
            </div>
            <div className={styles.archeology_Map}>
                <img src="/images/archeology/archeologyMap.png" alt="" />
                <p>{t("archeological.desc2")}</p>
            </div>
            <div className={styles.archeology_Bronze}>
              <p>{t("archeological.desc3")}</p>
              <div className={styles.archeology_Bronze_Img}>
                <img src="/images/archeology/archeologyBronze.png" alt="" />
                <img src="/images/archeology/archeologyBronze2.png" alt="" />
                <img src="/images/archeology/archeologyBronze3.png" alt="" />
                <img src="/images/archeology/archeologyBronze4.png" alt="" />
              </div>
            </div>
            <div className={styles.archeology_Bottom}>
              <p>{t("archeological.desc4")}</p>
              <div className={styles.archeology_Bottom_Img}>
                <img src="/images/archeology/archeologyBottom.png" alt="" />
                <img src="/images/archeology/archeologyBottom2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Archeology