import React, { useEffect } from "react";
import styles from "../styles/group.module.css";
import {
  PYTON_GROUP,
  JAVA_SCRIPT_GROUP,
  C_GROUP,
  AI_GROUP,
} from "../constant/index";
import Header from "../components/pages/Header";
import Head from "next/head";
const Group = () => {
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
        <title>Главная | YtYt - понятные уроки программирования</title>
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <Header />
      <div className={styles.lessons}>
        <div className={styles.container}>
          <div className={styles.lessonWrapper}>
            <div className={styles.first}>
              <div className={styles.lessonsTitle}>
                <h2 className={styles.title}>Python</h2>
                <div className={styles.lessonsStats}>
                  <span>3 группы</span>
                </div>
              </div>
              <div className={styles.list}>
                {PYTON_GROUP.map((e) => {
                  return (
                    <div key={e.id} className={styles.listRow}>
                      <a href={e.url} className={styles.lessonsCard}>
                        <div className={styles.cardNum}>{e.id}</div>
                        <div className={styles.cardDesc}>
                          <div className={styles.cardTitle}>{e.text}</div>
                        </div>
                        <div className={styles.cardStatus}>
                          <div className={styles.isCompleted}>
                            <span>{e.status[0]}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.first}>
              <div className={styles.lessonsTitle}>
                <h2 className={styles.title}>Java Script</h2>
                <div className={styles.lessonsStats}>
                  <span>4 группы</span>
                </div>
              </div>
              <div className={styles.list}>
                {JAVA_SCRIPT_GROUP.map((e) => {
                  return (
                    <div key={e.id} className={styles.listRow}>
                      <a href={e.url} className={styles.lessonsCard}>
                        <div className={styles.cardNum}>{e.id}</div>
                        <div className={styles.cardDesc}>
                          <div className={styles.cardTitle}>{e.text}</div>
                        </div>
                        <div className={styles.cardStatus}>
                          <div className={styles.isCompleted}>
                            <span>{e.status[0]}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.first}>
              <div className={styles.lessonsTitle}>
                <h2 className={styles.title}>C#</h2>
                <div className={styles.lessonsStats}>
                  <span>3 группы</span>
                </div>
              </div>
              <div className={styles.list}>
                {C_GROUP.map((e) => {
                  return (
                    <div key={e.id} className={styles.listRow}>
                      <a href={e.url} className={styles.lessonsCard}>
                        <div className={styles.cardNum}>{e.id}</div>
                        <div className={styles.cardDesc}>
                          <div className={styles.cardTitle}>{e.text}</div>
                        </div>
                        <div className={styles.cardStatus}>
                          <div className={styles.isCompleted}>
                            <span>{e.status[0]}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className={styles.lessonsTitle}>
                <h2 className={styles.title}>AI</h2>
                <div className={styles.lessonsStats}></div>
                <span>4 группы</span>
              </div>
            </div>
            <div className={styles.list}>
              {AI_GROUP.map((e) => {
                return (
                  <div key={e.id} className={styles.listRow}>
                    <a href={e.url} className={styles.lessonsCard}>
                      <div className={styles.cardNum}>{e.id}</div>
                      <div className={styles.cardDesc}>
                        <div className={styles.cardTitle}>{e.text}</div>
                      </div>
                      <div className={styles.cardStatus}>
                        <div className={styles.isCompleted}>
                          <span>{e.status[0]}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Group;
