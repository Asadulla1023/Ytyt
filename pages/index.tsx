import React from "react";
import Head from "next/head";
import "animate.css";
import Image from "next/image";
import styles from "../styles/home.module.css";
import Link from "next/link";
import { Platform } from "../components/pages/Platform";
import Navbar from "../components/pages/Navbar";
import { COURSES_DATA, TECHNOLOGIES_DATA } from "../constant";
import Cost from "../components/pages/Cost";
import Contact from "../components/pages/Contact";

export default function Home() {

  const data = new Date();

  const year = data.getFullYear();

  return (
    <>
      <Head>
        <title>Понятные уроки программирования | YtYt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <div className={styles.homepage}>
        <div className={styles.container}>
          <Navbar />
          <div className={styles.some}>
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <h1 className={styles.headerTitle}>
                  Школа <span className={styles.sistem}>{"{"}</span>
                  <em className={styles.prorgramin}>программирования</em>
                  <span className={styles.sistem}>{"}"}</span>
                  <br />
                  для тех, кому нужны <br /> реальные навыки, <br /> а не просто
                  сертификат
                </h1>
                <Link href="/auth/signup" className={styles.headerSign}>
                  Начать бесплатно{" "}
                  <Image
                    src="/topRightArr.svg"
                    alt="45 degree arrow"
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
              <div className={styles.headerRight}>
                <Image
                  src="/Code.png"
                  alt="coding pc programing"
                  width={393}
                  height={410}
                />
              </div>
            </div>
          </div>
          <div className={styles.circle}>
            <div className={styles.littleCirc}>
              <div className={styles.img}>
                <Image
                  className="animate__bounce"
                  src="bottomArr.svg"
                  alt="Bottom Arrow"
                  width={13}
                  height={13}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.process} id="learn">
          <div className={styles.container}>
            <h1>Какие технологии вы изучите:</h1>
            <div className={styles.technologies}>
              <div className={styles.cont}>
                <div className={styles.techLeft}>
                  <Image
                    src="/coder.svg"
                    alt="coder writing code"
                    width={407}
                    height={354}
                  />
                </div>
                <div className={styles.techRight}>
                  <ul className={styles.techul}>
                    {TECHNOLOGIES_DATA.map((e: any, index) => {
                      return (
                        <li key={index}
                          className={styles.technos}
                          style={{ background: e.bg }}
                        >
                          {e.name}
                        </li>
                      );
                    })}
                  </ul>
                  <h3 className={styles.whatprogrammists}>
                    Именно эти навыки работодатели хотят видеть у начинающих
                    программистов в {year} году
                  </h3>
                </div>
              </div>
            </div>
            <h1>Лучше, чем просто курсы по программированию</h1>
            <div className={styles.courses}>
              {COURSES_DATA.map((e: any, index) => {
                return (
                  <div
                  key={index}
                    className={styles.courseCard}
                    style={{ background: e.bg }}
                  >
                    <Image src={e.img} alt="course" width={62} height={63} />
                    <h4>{e.title}</h4>
                    <p>{e.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Platform />
        <Cost />
        <Contact />

      </div>
    </>
  );
}