import React, { useState } from "react";
import styles from "../../../../styles/lesson1.module.css";
import dynamic from "next/dynamic";
const AceEditor = dynamic(
  () => import("../../../../components/pages/CodeEditor"),
  {
    ssr: false,
  }
);

const Lesson10 = () => {
  const [data, setData] = useState();
  return (
    <div className={styles.fragmentBody} id={"1"}>
      <h1>Числа</h1>
      <p>В Javascript можно работать как с целыми, так и с дробными числами.</p>
      <p>Дробная часть числа всегда пишется через точку.</p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(133)
console.log(3.455)`}
      />
      <p>
        Если вы напишете в инструкции{" "}
        <code className={styles.languageJavascript}>console.log()</code> что-то
        вроде <code className={styles.languageJavascript}>13.5</code>, то это
        будет воспринято как 2 разных числовых литерала. В итоге на экран будет
        выведено 2 числа, разделённых пробелом.
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(12.45)
`}
      />
      <h2>Разделение числа на разряды</h2>
      <p>
        Числовые литералы пишутся без пробелов внутри. Если вы напишете что-то
        вроде{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>123 456</code>,
        </span>{" "}
        то такая программа даже не скомпилируется (возникнет ошибка{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>SyntaxError</code>
        </span>
        ).
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(12,34)
`}
      />
      <p>
        Но если вы всё-таки хотите визуально разделить длинный числовой литерал
        на разряды, то можно использовать знак подчёркивания{" "}
        <code className={styles.languageJavascript}>_</code>.
      </p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(123_456_789)`}
      />
      <p>
        Обратите внимание: в консоль число по-прежнему выводится в «цельном»
        виде, без подчёркиваний. Разделитель{" "}
        <code className={styles.languageJavascript}>_</code> помогает более
        наглядно представить длинное число в коде, но не влияет на то, как оно
        хранится в памяти и выводится на экран.
      </p>
      <h2>Арифметические выражения</h2>
      <p>Из чисел можно составлять арифметические выражения. Например:</p>
      <AceEditor
        data={data}
        dataState={setData}
        value={`console.log(2 + 3)
console.log(2 - 1)
console.log(2 * 2 * 5)
console.log((3 - 1) * (8 + 7))`}
      />
      <p>
        Любое арифметическое выражение состоит из операторов и операндов.
        Например, в выражении{" "}
        <code className={styles.languageJavascript}>2 + 3</code> знак{" "}
        <code className={styles.languageJavascript}>+</code> - это оператор, а
        числа <code className={styles.languageJavascript}>2</code> и{" "}
        <code className={styles.languageJavascript}>3</code> - это операнды.
      </p>
      <p>
        Любой оператор <strong>возвращает</strong> какое-то значение. Например,
        оператор <code className={styles.languageJavascript}>+</code> возвращает
        сумму своих операндов, а оператор{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>*</code>
        </span>{" "}
        возвращает их произведение. Возвращаемое значение подставляется вместо
        исходного выражения. То есть{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>print(2 + 2)</code>
        </span>{" "}
        фактически превращается в{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <code className={styles.languageJavascript}>print(4)</code>.
        </span>
      </p>
      <h2>Арифметические операторы</h2>
      <p>
        В Python есть 7 арифметических операторов. С 4 из них вы уже
        сталкивались:
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

export default Lesson10;
