import Head from "next/head";
import {
  COURSE_LIST_DATA,
  COURSE_LIST_DATA_S,
  COURSE_LIST_DATA_T,
} from "../constant";
import Link from "next/link";
import styles from "../styles/course.module.css";
import Header from "../components/pages/Header";

const course = () => {
  return (
    <>
      <Head>
        <title>Главная | YtYt - понятные уроки программирования</title>
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <div className={styles.course}>
        <Header />
        <div className={styles.lessons}>
          <div className={styles.container}>
            <div className={styles.lessonWrapper}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default course;
