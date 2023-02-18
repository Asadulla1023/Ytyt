import React, { useState } from "react";
import styles from "../../../../styles/lesson1.module.css";
import dynamic from "next/dynamic";
const AceEditor = dynamic(
  () => import("../../../../components/pages/CodeEditor"),
  {
    ssr: false,
  }
);

const Lesson8 = () => {
  const [data, setData] = useState();
  return (
    <div className={styles.fragmentBody} id={"1"}>
      <h1>Как выполняется программа?</h1>
      <h2>Компиляция</h2>
      <p>
        Сначала красивый текст вашей программы преобразуется в набор машинных
        инструкций, понятных компьютеру. Этот этап называется компиляцией.
      </p>
      <p>
        Если программу не получается скомпилировать из-за того, что в коде есть
        опечатка, то появляется сообщение{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <span style={{ whiteSpace: "nowrap" }}>
            <code className={styles.languageJavascript}>SyntaxError</code>
          </span>
        </span>{" "}
        (синтаксическая ошибка). Например,{" "}
        <code className={styles.languageJavascript}>SyntaxError</code> может
        возникнуть, если вы забудете закрыть скобку:
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`
console.log(123)
console.log(456
`}
      />
      <p>
        Если на этапе компиляции возникает ошибка, то программа даже не начинает
        выполняться. То есть в примере выше на экране не появится число{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>123</code>,
        </span>{" "}
        хотя в первой строке кода никаких ошибок нет.
      </p>
      <h2>Интерпретация</h2>
      <p>
        Если код программы был успешно скомпилирован, то в работу включается{" "}
        <strong>интерпретатор</strong>, который выполняет программу строка за
        строкой.
      </p>
      <p>
        Если во время выполнения очередной строки кода возникает ошибка, то
        работа программы прекращается. Например:
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(1 + 3)
console.log(1 - 3)
console.log(3 * 3)
console.log(4 / 0)
console.log('Эта инструкция уже не будет выполнена')
`}
      />
      <p>
        Первые 3 инструкции были успешно выполнены, а вот на 4-й строке возникла
        ошибка, потому что делить на{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>0</code>
        </span>{" "}
        нельзя. В этот момент программа аварийно завершила свою работу, поэтому
        5-я инструкция{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>console.log()</code>
        </span>{" "}
        не была выполнена.
      </p>
      <h2>Итоговый процесс выполнения программы</h2>
      <ol style={{marginLeft: 30}}>
        <li>
          Сначала код вашей программы компилируется, то есть превращается в
          набор машинных инструкций. Если в коде допущены опечатки, то возникает
          ошибка <code className={styles.languageJavascript}>SyntaxError</code>,
          и программа даже не начинает выполняться;
        </li>
        <li>
          Если компиляция прошла успешно, то запускается интерпретатор, который
          построчно выполняет вашу программу. Если на какой-то строке произошла
          ошибка, то выполнение программы аварийно завершается;
        </li>
        <li>
          Если ошибок нет, то код выполняется до тех пор, пока есть что
          выполнять. Как только все инструкции в программе были выполнены,
          интерпретатор отключается.
        </li>
      </ol>
    </div>
  );
};

export default Lesson8;
