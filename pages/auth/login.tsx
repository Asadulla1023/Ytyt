import styles from "./auth.module.css";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function login() {
  return (
    <>
      <Head>
        <title>Войти | YtYt - понятные уроки программирования</title>
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <div className={styles.auth}>
        <Image src="/YtYt.png" alt="alt" width={154} height={60} />
        <div className={styles.container}>
          <div className={styles.login}>
            <form
              action={"/course"}
              autoComplete="on"
              className={styles.authForm}
            >
              <h1>Войти</h1>
              <input
                placeholder="Email"
                autoComplete="on"
                type="email"
                required
              />
              <input
                placeholder="Пароль"
                autoComplete="on"
                type="password"
                required
              />
              <button className={styles.button}>Войти</button>
              <Link href="/auth/signup">Зарегистрироваться</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
