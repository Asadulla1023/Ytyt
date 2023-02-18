import React, { useState } from "react";
import styles from "../../../../styles/lesson1.module.css";
import dynamic from "next/dynamic";
const AceEditor = dynamic(
  () => import("../../../../components/pages/CodeEditor"),
  {
    ssr: false,
  }
);

const Lesson9 = () => {
  const [data, setData] = useState();
  return (
    <div className={styles.fragmentBody} id={"1"}>
      <h1>Инструкция console.log()</h1>
      <p>Изучим подробнее возможности этой полезной инструкции.</p>
      <h2>Перенос строки</h2>
      <p>
        Каждая инструкция{" "}
        <code className={styles.languageJavascript}>console.log()</code>{" "}
        начинает вывод с новой строки.
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(1 + 3)
console.log(3 / 3)
console.log(4 * 4)
`}
      />
      <h2>Вывод нескольких значений подряд</h2>
      <p>
        Хотите вывести несколько значений в одной строке? Тогда перечислите их
        через запятую.
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(1, 2, 3)
`}
      />
      <p>
        Все 3 значения вывелись в 1 строку и автоматически отделились друг от
        друга пробелами. Точно так же можно выводить несколько фрагментов
        текста.
      </p>

      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log('Учимся', 'программировать', 'на', 'Javascript')`}
      />
      <p>
        4 фрагмента текста отобразились в 1 строке и автоматически отделились
        друг от друга пробелами.
      </p>
      <h2>Вывод пустой строки на экран</h2>
      <p>
        Чтобы красиво отделить друг от друга блоки текста, можно вывести между
        ними пустую строку. Для этого нужно просто написать{" "}
        <code className={styles.languageJavascript}>console.log()</code>, то
        есть не помещать никакое значение между скобок.
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log('Привет!')
console.log('Хорошая погода, правда?')
console.log("")
console.log('Здравствуй!')
console.log('Да, неплохая.')
`}
      />
      <h2>Пустые строки в тексте программы</h2>
      <p>
        Чтобы вывести пустую строку, нужно в явном виде написать{" "}
        <code className={styles.languageJavascript}>console.log()</code>. Если
        вы просто оставите пустую строку в тексте программы, то она не будет
        выведена на экран.
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log('Привет!')
console.log('Хорошая погода, правда?')

console.log('Здравствуй!')
console.log('Да, неплохая.')
`}
      />
      <p>
        Пустые строки в коде используются для того, чтобы визуально отделять
        фрагменты кода друг от друга. На работу программы они не оказывают
        никакого влияния.
      </p>
    </div>
  );
};

export default Lesson9;
