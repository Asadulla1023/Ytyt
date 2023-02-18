import Head from "next/head";
import React, { LegacyRef, useRef, useState, useEffect } from "react";
import Header from "../components/pages/Header";

import Image from "next/image";

import styles from "../styles/profile.module.css";

const profile = () => {
  const replitRef = useRef<LegacyRef<HTMLInputElement> | any>("")
  
  useEffect(()=> {
    document.addEventListener("contextmenu", e => {
      e.preventDefault()
    })
  })

  return (
    <>
      <Head>
        <title>Профиль | YtYt - понятные уроки программирования</title>
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <Header />
      <div className={styles.profile}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.box}>
              <div className={styles.boxRow}>
                <div className={styles.avatar}>
                  <Image
                    src="/avatar.jpg"
                    alt="user avatar image"
                    width={200}
                    height={200}
                  />
                </div>
                <div className={styles.content}>
                  <form className={styles.form}>
                    <input type="text" id="name" placeholder={"Asadulloh"}/>
                    <input
                      type="text"
                      placeholder="fayzullox512mi@gmail.com"
                      disabled
                    />
                    <input type="text" ref={replitRef} placeholder="Replit" />
                    <button> Сохранить изменения </button>
                    <a href="/auth/changepassword"> Сменить пароль </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
