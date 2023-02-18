import React, { useState } from "react";
import dynamic from "next/dynamic";
import CodeEditor from "../../../components/pages/CodeEditor";
import Head from "next/head";
import Header from "../../../components/pages/Header";
import styles from "../../../styles/f1.module.css";
import Link from "next/link";
import Lesson1 from "./fragments/lesson1";
import Lesson2 from "./fragments/lesson2";
import Lesson3 from "./fragments/lesson3";
import Lesson4 from "./fragments/lesson4";
import Lesson5 from "./fragments/lesson5";
import Lesson6 from "./fragments/lesson6";
import classNames from "classnames";
const AceEditor = dynamic(
  () => import("../../../components/pages/CodeEditor"),
  {
    ssr: false,
  }
);

const f1 = () => {
  const [data, setData] = useState();
  const [fragment, setFragment] = useState(1);
  return (
    <>
      <Head>
        <title>Введение | YtYt - понятные уроки программирования</title>
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <Header />
      <div className={styles.lesson}>
        <div className={styles.container}>
          <div className={styles.lessonWarpper}>
            <div className={styles.sidebar}>
              <div className={styles.sidebarBox}>
                <div className={styles.sidebarHeader}>
                  <Link href="/course/">
                    <span>Вернуться к списку уроков</span>
                  </Link>
                  <button style={{ display: "none" }}>
                    <span>Задать вопрос</span>
                  </button>
                </div>
                <div className={styles.sidebarProgress}>
                  <div className={styles.sidebarTitle}>Ваш прогресс</div>
                  <div className={styles.sidebarIndicator}>
                    <div className={styles.sidebarProgressNum}>
                      <span>{fragment === 1? "0%": fragment === 2? "20%": fragment===3? "40%":fragment === 4? "60%": fragment === 5 ?"80%": fragment === 6? "100%": ""}</span>
                    </div>
                    <div className={styles.sidebarProgressInner} style={{width: fragment === 1? "0%": fragment === 2? "20%": fragment===3? "40%":fragment === 4? "60%": fragment === 5 ?"80%": fragment === 6? "100%": ""}} />
                  </div>
                </div>
                <div className={styles.sidebarLessons}>
                  <div className={styles.sidebarLessonsContainer}>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 1 ? styles.active : ""
                      )}
                      onClick={() => {
                        setFragment(1);
                      }}
                      href={"#1"}
                    >
                      <div className={styles.lessonTitle}>Введение</div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 2 ? styles.active : ""
                      )}
                      href={"#2"}
                      onClick={() => {
                        setFragment(2);
                      }}
                    >
                      <div className={styles.lessonTitle}>План обучения</div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 3 ? styles.active : ""
                      )}
                      href={"/course/1/1"}
                      onClick={() => {
                        setFragment(3);
                      }}
                    >
                      <div className={styles.lessonTitle}>Вводный курс</div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 4 ? styles.active : ""
                      )}
                      href={"/course/1/1"}
                      onClick={() => {
                        setFragment(4);
                      }}
                    >
                      <div className={styles.lessonTitle}>Javascript</div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 5 ? styles.active : ""
                      )}
                      href={"/course/1/1"}
                      onClick={() => {
                        setFragment(5);
                      }}
                    >
                      <div className={styles.lessonTitle}>
                        Работа с платформой YtYt
                      </div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 6 ? styles.active : ""
                      )}
                      href={"/course/1/1"}
                      onClick={() => {
                        setFragment(6);
                      }}
                    >
                      <div className={styles.lessonTitle}>
                        Как правильно учиться
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.sidebarQuestion}>
                  <Link href={"#"}>
                    <span>Задать вопрос</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div className={styles.lessonBox}>
                <div className={styles.lessonFragment}>
                  <div className={styles.lessonNav}>
                    <div className={styles.navTitle}>
                      <span className="nav__title-count">Урок 1/7 </span>
                      &nbsp; Введение
                    </div>
                    <div className={styles.controller}>
                      <Link
                        href=""
                        onClick={() => {
                          if (fragment !== 1) {
                            setFragment(fragment - 1);
                          } else {
                            setFragment(fragment);
                          }
                        }}
                        className={
                           fragment !== 1 ? styles.actionNext : styles.disabled
                        }
                      >
                        <span>Предыдущий урок</span>
                      </Link>
                      <Link
                        onClick={() => {
                          if (fragment < 6) {
                            setFragment(fragment + 1);
                          } else {
                            setFragment(fragment);
                          }
                        }}
                        href={fragment === 6 ? "/course/1/2" : "/course/1/1"}
                        className={
                          styles.actionNext
                        }
                      >
                        <span>Следующий урок</span>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <span>
                      {fragment === 1 ? (
                        <Lesson1 />
                      ) : fragment === 2 ? (
                        <Lesson2 />
                      ) : fragment === 3 ? (
                        <Lesson3 />
                      ) : fragment === 4 ? (
                        <Lesson4 />
                      ) : fragment === 5 ? (
                        <Lesson5 />
                      ) : fragment === 6 ? (
                        <Lesson6 />
                      ) : null}
                    </span>
                  </div>
                  <div className={styles.actions}>
                    <button
                      className={classNames(styles.medium, fragment < 6 ? "": styles.disabledBtn)}
                      onClick={() => {
                        if (fragment < 6) {
                          setFragment(fragment + 1);
                        } else {
                          setFragment(fragment);
                        }
                      }}
                    >
                      Продолжить
                    </button>
                    <button className={classNames(styles.medium)}>Задать вопрос</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default f1;
