import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.scss'

const Footer = () => {
  const { t } = useTranslation()
  
  return (
    <footer className="footer" id="footer">
      <div className={styles.footer}>
        <div className={styles.footer_logo}>
          <img src="/logo.png" alt="" />
        </div>
        <div>
          <p>{t("footer.partner")}</p>
          <div className={styles.partnerImg}>
            <img src="/images/logo_hands.png" alt="" />
            <img src="/images/logo_bird.png" alt="" />
            <img src="/images/logo_SIDP.png" alt="" />
          </div>
        </div>
        <div>
          <p>{t("footer.address")}</p>
          <ul>
            <li>
              <a href="tel:+996772655901">0772-655-901</a>
            </li>
            <li>
              <a href="tel:+996552655901 ">0552-655-901</a>
            </li>
            <li>
              <a href="tel:+996700550560 ">0700-550-560</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_media}>
          <p>{t("footer.socMedia")}</p>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fb.watch/hqEA2vbFzB/?mibextid=RUbZ1f"
              >
                <img src="/icons/facebook.png" alt="" />
              </a>
            </li>
            <li>
              <a href="mailto:manasordo@gmail.com">manasordo@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.commerce}>
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          <img
            alt="Лицензия Creative Commons"
            src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
          />
        </a>
        <br />
        Это произведение доступно по{" "}
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          лицензии Creative Commons «Attribution-NonCommercial-NoDerivatives»
          («Атрибуция-Некоммерчески-БезПроизводных») 4.0 Всемирная
        </a>
      </div>
    </footer>
  );
}

export default Footer