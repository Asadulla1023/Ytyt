import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";

export interface Burger {
  setIsBurgerOpen: Function;
}

const Nav = ({ setIsBurgerOpen }: Burger) => {
  const modalCloseHandler = () => {
    setIsBurgerOpen(false);
    document.body.style.overflow = "";
  };
  return (
    <div className={styles.nav}>
      <div className={styles.burger}>
        <div className={styles.modalcloser}>
          <Image
            src="/close.svg"
            alt="close modal img"
            width={14}
            height={14}
            onClick={modalCloseHandler}
          />
        </div>
        <div className={styles.routes}>
          <ul>
            <li>
              <Link href="#learn" onClick={modalCloseHandler}>
                Чему вы научитесь
              </Link>
            </li>
            <li>
              <Link href="#platform" onClick={modalCloseHandler}>
                Онлайн-платформа
              </Link>
            </li>
            <li>
              <Link href="#cost" onClick={modalCloseHandler}>
                Стоимость
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={modalCloseHandler}>
                Контакты
              </Link>
            </li>
            <li>
              <Link href="/auth/signup">Регистрация</Link>
            </li>
          </ul>
        </div>
        <Link className={styles.navLog} href="/auth/login"><Image src="/rightArr.svg" className={styles.rightArr} alt="right arrow img" width={17} height={15}/> Войти</Link>
      </div> 
      <div className={styles.burgerBg} onClick={modalCloseHandler} />
    </div>
  );
};

export default Nav;
