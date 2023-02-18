import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={styles.leftSide}>
            <Link className={styles.logoWrap} href="/course">
              <Image
                src="/logo.png"
                alt="title of page"
                width={67}
                height={26}
              />
            </Link>
            <div className={styles.routes}>
              <ul>
                <li>
                  <Link href="/course">Курсы</Link>
                </li>
                <li>
                  <Link href="/group">Группы</Link>
                </li>
                <li>
                  <Link href="/students">Студенты</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.forUser}>
            <div className={styles.headerMsg}>
            </div>
            <div className={styles.headerUser}>
              <Link href="/profile">
                <Image
                  src="/avatar.jpg"
                  alt="user image"
                  width={36}
                  height={36}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
