import styles from "./auth.module.css";

import { useRef } from "react";
import { setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function Signup() {
  const userRef = useRef<any>()
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

  const inputChanging = () => {
    if (userRef.current) {
      setCookie("userName", userRef.current.value, {path: "/"})
      localStorage.setItem("userName", userRef.current.value)
    }
  }

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
              <input placeholder="Имя" ref={userRef} onChange={inputChanging} autoComplete="off" type="text" required />
              <input
                placeholder="Фамилия"
                type="text"
                autoComplete="off"
                required
                minLength={1}
              />
              <input placeholder="Email" autoComplete="off" type="email" required />
              <input
                placeholder="Пароль"
                type="password"
                required
                autoComplete="off"
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
