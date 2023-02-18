import styles from "./auth.module.css";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function changepassword() {
  return (
    <>
      <Head>
        <title>Войти | YtYt - понятные уроки программирования</title>
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <div className={styles.auth}>
        <Image src="/YtYt.png" alt="alt" width={154} height={60} />
        <div className={styles.container}>
          <div className={styles.changepassword}>
            <form
              action={"/profile"}
              autoComplete="on"
              className={styles.authForm}
            >
              <h1>Смена пароля</h1>
              <input
                placeholder="Старый пароль"
                autoComplete="on"
                type="password"
                required
              />
              <input
                placeholder="Новый пароль"
                autoComplete="on"
                type="password"
                required
              />
              <input
                placeholder="Новый пароль"
                autoComplete="on"
                type="password"
                required
              />
              <button className={styles.button}>Сменить пароль</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default changepassword;
