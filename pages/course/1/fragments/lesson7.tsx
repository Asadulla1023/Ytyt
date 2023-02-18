import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../../styles/lesson1.module.css";
import dynamic from "next/dynamic";
const AceEditor = dynamic(
  () => import("../../../../components/pages/CodeEditor"),
  {
    ssr: false,
  }
);

const Lesson7 = () => {
  const [data, setData] = useState();
  return (
    <div className={styles.fragmentBody} id={"1"}>
      <h1>Что такое программа?</h1>
      <p>Программа - это набор инструкций для компьютера. Например:</p>
      <ol style={{ marginLeft: 30 }}>
        <li>Получи сумму, которую нужно перевести;</li>
        <li>Проверь, достаточно ли средств на счёте;</li>
        <li>Если достаточно, то осуществи перевод;</li>
        <li>Если недостаточно, то выведи сообщение об ошибке.</li>
      </ol>
      <Image
        className={styles.fragmentImage}
        src="/prog.png"
        alt="image how we teach you"
        style={{ marginTop: 20 }}
        width={"640"}
        height={281}
      />
      <p>
        При запуске программы инструкции будут выполнены по очереди. В
        результате либо произойдёт перевод средств, либо появится уведомление об
        ошибке.
      </p>
      <p>
        Шаг за шагом вы изучите основы Python, и уже через несколько уроков
        сможете написать подобную программу. Без реального перемещения средств
        между счетами, конечно же :)
      </p>
      <h2 style={{ fontWeight: 600 }}>Первая простая программа</h2>
      <p>
        Начнём с простой программы, состоящей всего из 1 строки. Она будет
        выводить на экран сообщение «Hello, World!».
      </p>
      <p>
        Для вывода сообщений используется инструкция{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>console.log()</code>.
        </span>{" "}
        Запустите код ниже, чтобы увидеть, как она работает.
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={"console.log('Hello, World!')"}
      />
      <br />
      <p>
        В скобках пишется то, что должно появиться на экране. Если это текст, то
        он заключается в кавычки. Можно использовать одиночные{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          (<code className={styles.languageJavascript}>'Hello, World!'</code>
        </span>
        ) или двойные{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          (<code className={styles.languageJavascript}>"Hello, World!"</code>
        </span>
        ), как вам больше нравится. Главное, чтобы и открывающая, и закрывающая
        кавычка были одного типа.
      </p>
      <h2>Вывод чисел на экран</h2>
      <p>
        С помощью{" "}
        <code className={styles.languageJavascript}>console.log()</code> можно
        выводить на экран не только текст, но и другие данные. Например, числа:
      </p>
      <AceEditor data={data} dataState={setData} value={"console.log(123)"} />
      <br />
      <p>Кавычки при этом не ставятся.</p>
      <p>Также можно вывести на экран результат математического выражения:</p>
      <AceEditor data={data} dataState={setData} value={"console.log(2 + 2)"} />
      <br />
      <p>
        Кавычки здесь также не ставятся, потому что выводится не текст, а число,
        полученное после сложения{" "}
        <code className={styles.languageJavascript}>2</code> и{" "}
        <code className={styles.languageJavascript}>2</code>. Запустите пример
        ниже, чтобы понять разницу.
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(2 + 2)
console.log("2 + 2")      
`}
      />
      <br />
      <p>
        Javascript поддерживает не только сложение, но и остальные
        математические операции.
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(2 + 2)
console.log(2 - 2)
console.log(2 / 2)
console.log(2 * 2)

`}
      />
      <br />
      <p>
        Обратите внимание: результатом деления в Javascript всегда является
        дробное число, даже если выражение состояло только из целых чисел.
      </p>
      <h2>Литералы</h2>
      <p>
        Значения, которые вы пишете вручную в коде программы, называются{" "}
        <strong>литералами</strong>. Например, в инструкции{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>console.log(123)</code>
        </span>{" "}
        число 123 - это числовой литерал. А в инструкции{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>
            console.log('Привет')
          </code>
        </span>{" "}
        текст{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>'Привет'</code>
        </span>{" "}
        - это текстовый литерал, или, как принято говорить в программировании,{" "}
        <strong>строковый</strong> литерал.
      </p>
      <h2>Самостоятельное задание №1</h2>
      <AceEditor
        data={data}
        dataState={setData}
        value={"// Удалите этот комментарий и напишите вместо него ваш код"}
      />
      <h2>Самостоятельное задание №2</h2>
      <p>
        Рассчитайте с помощью кода и выведите на экран произведение 5 чисел:{" "}
        <span style={{whiteSpace: "nowrap"}}>
          <code className={styles.languageJavascript}>7</code>,
        </span>{" "}
        <span style={{whiteSpace: "nowrap"}}>
          <code className={styles.languageJavascript}>9</code>,
        </span>{" "}
        <span style={{whiteSpace: "nowrap"}}>
          <code className={styles.languageJavascript}>10</code>,
        </span>{" "}
        <span style={{whiteSpace: "nowrap"}}>
          <code className={styles.languageJavascript}>2</code>
        </span>{" "}
        и{" "}
        <span style={{whiteSpace: "nowrap"}}>
          <code className={styles.languageJavascript}>8</code>.
        </span>
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={"// Ваш код:"}
      />
    </div>
  );
};

export default Lesson7;
