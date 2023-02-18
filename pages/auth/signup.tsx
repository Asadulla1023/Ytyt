import styles from "./auth.module.css";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function Signup() {
  const passRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const buttonAbleHandler = () => {
    if (passRef.current) {
      if (btnRef.current) {
        btnRef.current.disabled = false;
      }
    } else {
      if (btnRef.current) {
        btnRef.current.disabled = true;
      }
    }
  };

  return (
    <>
      <Head>
        <title>Регистрация | YtYt - понятные уроки программирования</title>
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <div className={styles.auth}>
        <Image src="/YtYt.png" alt="alt" width={154} height={60} />
        <div className={styles.container}>
          <div className={styles.login}>
            <form action="/course" autoComplete="off" className={styles.authForm}>
              <h1>Регистрация</h1>
              <input placeholder="Имя" type="text" required />
              <input
                placeholder="Фамилия"
                type="text"
                required
                minLength={1}
              />
              <input placeholder="Email" type="email" required />
              <input
                placeholder="Пароль"
                type="password"
                required
                onChange={buttonAbleHandler}
                minLength={8}
                ref={passRef}
              />
              <button ref={btnRef} disabled className={styles.button}>
                Зарегистрироваться
              </button>
              <Link href="/auth/login">Войти</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
