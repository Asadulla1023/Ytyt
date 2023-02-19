import Head from "next/head";
import React, { LegacyRef, useRef, useState, useEffect } from "react";
import Header from "../components/pages/Header";
import { getCookie } from 'cookies-next';
import Image from "next/image";

import styles from "../styles/profile.module.css";
import Link from "next/link";

const profile = () => {
  const replitRef = useRef<LegacyRef<HTMLInputElement> | any>("");
  // @ts-ignore
  const name: InputHTMLAttributes<HTMLInputElement> = getCookie("userName")
  useEffect(()=> {
    document.addEventListener("contextmenu",  e => {
      e.preventDefault()
    })
    document.onkeydown = function (e) {
      if(e.keyCode == 123) {
          return false;
      }
    }
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
                  <form className={styles.form} action="/course">
                    <input type="text" id="name" placeholder={"Username"} />
                    <input
                      type="text"
                      placeholder="email@gmail.com"
                      disabled
                    />
                    <input type="text" ref={replitRef} placeholder="Replit" />
                    <button> Сохранить изменения </button>
                    <Link href="/auth/changepassword"> Сменить пароль </Link>
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
