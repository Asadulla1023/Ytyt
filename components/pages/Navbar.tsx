import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../../styles/navbar.module.css";

import Nav from "./Nav";


function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const burgerOpenHandler = () => {
    setIsBurgerOpen(!isBurgerOpen);
    document.body.style.overflow = "hidden"
  };


  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarCont}>
          <div className={styles.navbarLeft}>
            <Image src="/title.svg" alt="Title image" width={55} height={20} />
            <div className={styles.routes}>
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
              </ul>
            </div>
          </div>
          <div className={styles.navbarRight}>
            <Link href="auth/signup" className={styles.navbarSign}>
              Регистрация
            </Link>
            <Link href="auth/login" className={styles.navbarLog}>
              <Image
                src="/rightArr.svg"
                alt="Arrow Log in"
                width={9}
                height={8}
              />{" "}
              Войти
            </Link>
          </div>
          <Image
            src="/burger.svg"
            alt="burger"
            width={20}
            height={20}
            className={styles.burgerOpener}
            onClick={burgerOpenHandler}
          />
          {isBurgerOpen && <Nav setIsBurgerOpen={setIsBurgerOpen}/>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
