import React, { useState } from "react";
import dynamic from "next/dynamic";
import CodeEditor from "../../../components/pages/CodeEditor";
import Head from "next/head";
import Header from "../../../components/pages/Header";
import styles from "../../../styles/f1.module.css";
import Link from "next/link";
import classNames from "classnames";
import Lesson7 from "./fragments/lesson7";
import Lesson8 from "./fragments/lesson8";
import Lesson9 from "./fragments/lesson9";
import Lesson10 from "./fragments/lesson10";
import Lesson11 from "./fragments/lesson11";
import Lesson12 from "./fragments/lesson12";
import Lesson13 from "./fragments/lesson13";
const AceEditor = dynamic(
  () => import("../../../components/pages/CodeEditor"),
  {
    ssr: false,
  }
);

const f2 = () => {
  const [data, setData] = useState();
  const [fragment, setFragment] = useState<number>(1);
  return (
    <>
      <Head>
        <title>Введение | YtYt - понятные уроки программирования</title>
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <Header/>
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
                      <span>
                        {fragment === 1
                          ? "14%"
                          : fragment === 2
                          ? "26%"
                          : fragment === 3
                          ? "41%"
                          : fragment === 4
                          ? "56%"
                          : fragment === 5
                          ? "71%"
                          : fragment === 6
                          ? "86%"
                          : fragment === 7
                          ? "100%"
                          : ""}
                      </span>
                    </div>
                    <div
                      className={styles.sidebarProgressInner}
                      style={{
                        width:
                          fragment === 1
                            ? "14%"
                            : fragment === 2
                            ? "26%"
                            : fragment === 3
                            ? "41%"
                            : fragment === 4
                            ? "56%"
                            : fragment === 5
                            ? "71%"
                            : fragment === 6
                            ? "86%"
                            : fragment === 7
                            ? "100%"
                            : "",
                      }}
                    />
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
                      href={""}
                    >
                      <div className={styles.lessonTitle}>
                        Что такое программа?
                      </div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 2 ? styles.active : ""
                      )}
                      href={""}
                      onClick={() => {
                        setFragment(2);
                      }}
                    >
                      <div className={styles.lessonTitle}>
                        Как выполняется программа?
                      </div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 3 ? styles.active : ""
                      )}
                      href={""}
                      onClick={() => {
                        setFragment(3);
                      }}
                    >
                      <div className={styles.lessonTitle}>
                        Инструкция console.log()
                      </div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 4 ? styles.active : ""
                      )}
                      href={""}
                      onClick={() => {
                        setFragment(4);
                      }}
                    >
                      <div className={styles.lessonTitle}>Числа</div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 5 ? styles.active : ""
                      )}
                      href={""}
                      onClick={() => {
                        setFragment(5);
                      }}
                    >
                      <div className={styles.lessonTitle}>Текст</div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 6 ? styles.active : ""
                      )}
                      href={""}
                      onClick={() => {
                        setFragment(6);
                      }}
                    >
                      <div className={styles.lessonTitle}>Конспект урока</div>
                    </Link>
                    <Link
                      className={classNames(
                        styles.sidebarLesson,
                        fragment === 7 ? styles.active : ""
                      )}
                      href={""}
                      onClick={() => {
                        setFragment(7);
                      }}
                    >
                      <div className={styles.lessonTitle}>
                        Самостоятельные задания
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
                      <span className="nav__title-count">Урок 2/7 </span>
                      &nbsp; Первая программа
                    </div>
                    <div className={styles.controller}>
                      <Link
                        href={fragment === 1 ? "/course/1/1" : "/course/1/2"}
                        onClick={() => {
                          if (fragment !== 1) {
                            setFragment(fragment - 1);
                          } else {
                            setFragment(fragment);
                          }
                        }}
                        className={styles.actionNext}
                      >
                        <span>Предыдущий урок</span>
                      </Link>
                      <Link
                        onClick={() => {
                          if (fragment < 7) {
                            setFragment(fragment + 1);
                          } else {
                            setFragment(fragment);
                          }
                        }}
                        href={fragment === 7 ? "/course/1/3" : "/course/1/2"}
                        className={styles.actionNext}
                      >
                        <span>Следующий урок</span>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <span>
                      {fragment === 1 ? (
                        <Lesson7 />
                      ) : fragment === 2 ? (
                        <Lesson8 />
                      ) : fragment === 3 ? (
                        <Lesson9 />
                      ) : fragment === 4 ? (
                        <Lesson10 />
                      ) : fragment === 5 ? (
                        <Lesson11 />
                      ) : fragment === 6 ? (
                        <Lesson12 />
                      ) : fragment === 7 ? (
                        <Lesson13 />
                      ) : null}
                    </span>
                  </div>
                  <div className={styles.actions}>
                    <button
                      className={classNames(
                        styles.medium,
                        fragment < 7 ? "" : styles.disabledBtn
                      )}
                      onClick={() => {
                        if (fragment < 7) {
                          setFragment(fragment + 1);
                        } else {
                          setFragment(fragment);
                        }
                      }}
                    >
                      Продолжить
                    </button>
                    <button className={classNames(styles.medium)}>
                      Задать вопрос
                    </button>
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

export default f2;
