import Image from "next/image";

import { useState } from "react";
import Link from "next/link";

import styles from "../../styles/contact.module.css";

const Contact = () => {
  const [over, setOver] = useState(false);
  const [leave, setLeave] = useState(false);

  const now = new Date();

  const year = now.getFullYear();

  const Overed = () => {
    setOver(true);
  };
  const Overed2 = () => {
    setLeave(true);
  };
  const Leaved = () => {
    setOver(false);
  };

  const Leaved2 = () => {
    setLeave(false);
  };
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerColF}>
            <Link href="/" className={styles.hrefFoot}>
              <Image src="/title.svg" alt="nothing" width={88} height={32} />
              <p>
                Школа <br />
                программирования
              </p>
            </Link>
            <div className={styles.socialFoot}>
              <Image
                onMouseOver={Overed}
                onMouseLeave={Leaved}
                src={!over ? "/youtube.svg" : "/youtube_color.svg"}
                alt="wefwef"
                width={35}
                height={35}
              />
              <Image
                onMouseOver={Overed2}
                onMouseLeave={Leaved2}
                src={!leave ? "/wiki.svg" : "/wiki_color.svg"}
                alt="wefwef"
                width={35}
                height={35}
              />
            </div>
          </div>
          <div className={styles.footerColS}>
            <ul>
              <li>
                <Link href="#learn">Чему вы научитесь</Link>
              </li>
              <li>
                <Link href="#platform">Онлайн-платформа</Link>
              </li>
              <li>
                <Link href="#cost">Стоимость</Link>
              </li>
              <li>
                <Link href="#contact">Контакты</Link>
              </li>
              <li>
                <Link href="/auth/signup">Регистрация</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerColT}>
            <div className={styles.footerContact}>
              <Link href="tel: +7 (499) 404 16 01">+7 (499) 404 16 01</Link>
              <Link href="mailto: info@ytyt.ru">info@ytyt.ru</Link>
            </div>
            <p className={styles.footerInfo}>
              ИП Умаров Т. А. <br />
              ИНН 745216229809 <br />
              ОГРНИП 315745200001358
            </p>
          </div>
        </div>
        <div className={styles.footerBtm}>
          <h3>© {year} ytyt — Все права защищены</h3>
          <Link href="https://ytyt.ru/landing/files/terms_of_service.pdf">Пользовательское соглашение</Link>
          <Link href="https://ytyt.ru/landing/files/confidentiality_policy.pdf">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
