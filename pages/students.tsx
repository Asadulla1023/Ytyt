import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/pages/Header";
import { CSHARP_DATA, JAVASCRIPT_DATA, PYTHON_DATA } from "../constant/index";
import styles from "../styles/students.module.css";

const students = () => {
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
      <div className={styles.studentsPage}>
        <div className={styles.container}>
          <h2 style={{marginTop: 20, marginBottom: 20}}>Javascript Гуруппы</h2>
          <table className={styles.table2}>
            
            <thead className={styles.thead}>
              <tr className={styles.tableTr2}>
                <th className={styles.tableTh2}>Число</th>
                <th className={styles.tableTh2}>Имя</th>
                <th className={styles.tableTh2}>Группа</th>
                <th className={styles.tableTh2}>Язык</th>
                <th className={styles.tableTh2}>Модуль</th>
                <th className={styles.tableTh2}>Оценка</th>
              </tr>
            </thead>
            <tbody>
              {JAVASCRIPT_DATA.map((e, index) => {
                return (
                  <tr className={styles.tableTr2}>
                    <td className={styles.tableTd2}>
                      {index + 1}
                    </td>
                    <td className={styles.tableTd2}>{e.name}</td>
                    <td className={styles.tableTd2}>{e.group}</td>
                    <td className={styles.tableTd2}>{e.language}</td>
                    <td className={styles.tableTd2}>{e.module}</td>
                    <td className={styles.tableTd2}>{e.mark}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2 style={{marginTop: 20, marginBottom: 20}}>Python Гуруппы</h2>
          <table className={styles.table2}>
            <thead className={styles.thead}>
              <tr className={styles.tableTr2}>
                <th className={styles.tableTh2}>Число</th>
                <th className={styles.tableTh2}>Имя</th>
                <th className={styles.tableTh2}>Группа</th>
                <th className={styles.tableTh2}>Язык</th>
                <th className={styles.tableTh2}>Модуль</th>
                <th className={styles.tableTh2}>Оценка</th>
              </tr>
            </thead>
            <tbody>
              {PYTHON_DATA.map((e, index) => {
                return (
                  <tr className={styles.tableTr2}>
                    <td className={styles.tableTd2}>
                      {index + 1}
                    </td>
                    <td className={styles.tableTd2}>{e.name}</td>
                    <td className={styles.tableTd2}>{e.group}</td>
                    <td className={styles.tableTd2}>{e.language}</td>
                    <td className={styles.tableTd2}>{e.module}</td>
                    <td className={styles.tableTd2}>{e.mark}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2 style={{marginTop: 20, marginBottom: 20}}>C# Гуруппы</h2>
          <table className={styles.table2}>
            <thead className={styles.thead}>
              <tr className={styles.tableTr2}>
                <th className={styles.tableTh2}>Число</th>
                <th className={styles.tableTh2}>Имя</th>
                <th className={styles.tableTh2}>Группа</th>
                <th className={styles.tableTh2}>Язык</th>
                <th className={styles.tableTh2}>Модуль</th>
                <th className={styles.tableTh2}>Оценка</th>
              </tr>
            </thead>
            <tbody>
              {CSHARP_DATA.map((e, index) => {
                return (
                  <tr className={styles.tableTr2}>
                    <td className={styles.tableTd2}>
                      {index + 1}
                    </td>
                    <td className={styles.tableTd2}>{e.name}</td>
                    <td className={styles.tableTd2}>{e.group}</td>
                    <td className={styles.tableTd2}>{e.language}</td>
                    <td className={styles.tableTd2}>{e.module}</td>
                    <td className={styles.tableTd2}>{e.mark}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2 style={{marginTop: 20, marginBottom: 20}}>AI Гуруппы</h2>
          <table className={styles.table2}>
            <thead className={styles.thead}>
              <tr className={styles.tableTr2}>
                <th className={styles.tableTh2}>Число</th>
                <th className={styles.tableTh2}>Имя</th>
                <th className={styles.tableTh2}>Группа</th>
                <th className={styles.tableTh2}>Язык</th>
                <th className={styles.tableTh2}>Модуль</th>
                <th className={styles.tableTh2}>Оценка</th>
              </tr>
            </thead>
            <tbody>
              {CSHARP_DATA.map((e, index) => {
                return (
                  <tr className={styles.tableTr2}>
                    <td className={styles.tableTd2}>
                      {index + 1}
                    </td>
                    <td className={styles.tableTd2}>{e.name}</td>
                    <td className={styles.tableTd2}>{e.group}</td>
                    <td className={styles.tableTd2}>AI</td>
                    <td className={styles.tableTd2}>{e.module}</td>
                    <td className={styles.tableTd2}>{e.mark}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default students;
