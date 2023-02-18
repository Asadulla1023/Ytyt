import React, { useState } from "react";

import dynamic from "next/dynamic";
import styles from "../../../../styles/lesson1.module.css";
const AceEditor = dynamic(
  () => import("../../../../components/pages/CodeEditor"),
  {
    ssr: false,
  }
);
const Lesson2 = () => {
  const [data, setData] = useState();
  return (
    <div className={styles.fragmentBody} id={"2"}>
      <h1>План обучения</h1>
      <p>Полная программа обучения разбита на 7 блоков:</p>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tableTh}>
            <th>Блок</th>
            <th>Что вы изучите</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableTr}>
            <td className={styles.tableTd}>Введение в программирование</td>
            <td className={styles.tableTd}>
              - Основные типы данных:{" "}
              <code className={styles.languageJavascript}>int</code>,
              <code className={styles.languageJavascript}> float</code>,
              <code className={styles.languageJavascript}> str</code>,
              <code className={styles.languageJavascript}> bool</code>; -
              Арифметические и логические операции;
              <br />- Управляющие конструкции:{" "}
              <code className={styles.languageJavascript}>if/elif/else</code>,
              <code className={styles.languageJavascript}> while</code>,
              <code className={styles.languageJavascript}> try/except</code>{" "}
              <br />- Написание чистого кода и работа с IDE Visual Code;
              Форматирование текста с помощью{" "}
              <code className={styles.languageJavascript}>%</code>,
              <code className={styles.languageJavascript}> format()</code> и{" "}
              <code className={styles.languageJavascript}> f-строк</code>;{" "}
              <br />
              <br />
              - Cоставление алгоритмов. <br />
              <br />
              <p>
                В процессе обучения вы напишете 3 проекта: калькулятор ипотеки,
                игра «Камень-ножницы-бумага» и генератор математических
                примеров. Все эти проекты вы сможете сдать на проверку ревьюеру
                и получить по ним подробную обратную связь. Да, даже в
                бесплатном вводном курсе у нас можно пообщаться с ревьюером :
                {")"}
              </p>
            </td>
          </tr>
          <tr className={styles.tableTr}>
            <td className={styles.tableTd}>
              Основы программирования на Javascript
            </td>
            <td className={styles.tableTd}>
              - Функции, параметры и аргументы, области видимости и пространства
              имён;
              <br />- Основные строковые методы;
              <br />- Фундаментальные принципы работы с коллекциями;
              <br />- Кортежи, списки, словари, множества;
              <br />- Итераторы, генераторы и генераторные выражения. <br />{" "}
              <br />
              Все эти концепции будут «зацементированы» большим количеством
              упражнений и 5 промежуточными проектами, которые нужно будет сдать
              на проверку. А ещё в конце блока вы напишете большой итоговый
              проект, выбрав одну из нескольких предложенных идей.
            </td>
          </tr>
          <tr className={styles.tableTr}>
            <td className={styles.tableTd}>Javascript, продвинутый уровень</td>
            <td className={styles.tableTd}>
              - Объектная модель, классы, атрибуты, наследование, миксины;
              <br />- Обёртки и декораторы;
              <br />- Внутреннее устройство Javascript, компиляция,
              интерпретация;
              <br />- Работа с командной оболочкой операционной системы;
              <br />- Файлы и потоки данных, кодировка текста;
              <br />- Аннотации типов;
              <br />- Тестирование, логирование;
              <br />- Работа с JSON и HTML;
              <br />- Регулярные выражения;
              <br />- Git и Github.
              <br />
              <br />
              Как и всегда, много практики и несколько проектов для код-ревью.
              Также в конце вы напишете менеджер задач с графическим
              интерфейсом, построенный по принципу Model-View-Presenter, с
              использованием Kivy и других внешних библиотек.
            </td>
          </tr>
          <tr className={styles.tableTr}>
            <td className={styles.tableTd}>Фреймворк React</td>
            <td className={styles.tableTd}>
              - Общее устройство React;
              <br />- App.js;
              <br />- Приложения;
              <br />- Авторизация и аутентификация;
              <br />- React - bootsrap;
              <br />- Кеширование;
              <br />- React Next Framework <br />
              <br />
              Итоговый проект этого блока - бэкенд для CRM-системы, в которой
              можно вести историю взаимодействия с клиентами.
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Стоимость и сроки</h2>
      <table className={styles.table2}>
        <thead className={styles.thead}>
          <tr className={styles.tableTr2}>
            <th className={styles.tableTh2}>Название</th>
            <th className={styles.tableTh2}>Расчётное время обучения (мес.)</th>
            <th className={styles.tableTh2}>Стоимость (руб.)</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableTr2}>
            <td className={styles.tableTd2}>Введение в программирование </td>
            <td className={styles.tableTd2}>0.5</td>
            <td className={styles.tableTd2}>Бесплатно</td>
          </tr>
          <tr className={styles.tableTr2}>
            <td className={styles.tableTd2}>
              Основы программирования на Javascript{" "}
            </td>
            <td className={styles.tableTd2}>1.5</td>
            <td className={styles.tableTd2}>6 900</td>
          </tr>
          <tr className={styles.tableTr2}>
            <td className={styles.tableTd2}>
              Javascript, продвинутый уровень{" "}
            </td>
            <td className={styles.tableTd2}>2.5</td>
            <td className={styles.tableTd2}>9 900</td>
          </tr>
          <tr className={styles.tableTr2}>
            <td className={styles.tableTd2}>Фреймворк React</td>
            <td className={styles.tableTd2}>2.5</td>
            <td className={styles.tableTd2}>9 900</td>
          </tr>
          <tr className={styles.tableTr2}>
            <td className={styles.tableTd4}>Итого</td>
            <td className={styles.tableTd2}>8</td>
            <td className={styles.tableTd3}>26700</td>
          </tr>
        </tbody>
      </table>
      <p>
        Если ваша цель - устроиться на работу Javascript-разработчиком или
        выполнять заказы на фрилансе, то рекомендуется пройти все блоки, чтобы
        получить необходимые знания и опыт.
      </p>
      <p>
        Но если вам нужны лишь базовые знания, чтобы автоматизировать рутинные
        задачи или просто писать код для удовольствия, то можно ограничиться
        первыми 2-3 блоками.
      </p>
      <p>
        Это не аналог Stepik и не курс, на котором нужно просто повторять за
        преподавателем. Здесь вам предстоит писать код своими руками, решать
        сотни задач и регулярно проходить живое код-ревью от опытных
        разработчиков. В результате вы не просто выучите язык Javascript, но и
        действительно <strong>научитесь программировать</strong>
      </p>
      <h2>Почему такая низкая стоимость?</h2>
      <p>
        До 70% себестоимости в других курсах составляют вебинары и прочая
        разговорная активность. На этих вебинарах преподаватель что-то
        показывает, а студенты должны за ним повторять.
      </p>
      <p>
        Вместо того, чтобы заставлять студентов просто повторять за
        преподавателем, мы добавили в курс более тысячи интерактивных примеров,
        которые можно запускать прямо на сайте. Вот один из них:
      </p>
      <AceEditor
        value={
`const getRndInteger = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min) ) + min);
}

getRndInteger(10, 20)`
}
        data={data}
        dataState={setData}
      />
      <p style={{ marginTop: 20 }}>
        Благодаря этой автоматизации вы можете учиться в удобном темпе,
        разбирать каждый пример столько, сколько потребуется, и при этом
        экономить 50 - 70 тысяч рублей, потому что аналогичный курс с вебинарами
        в среднем стоит 100 - 120 тысяч.
      </p>
      <h2>А практика будет?</h2>
      <p>
        Конечно, и очень много! Практика - это сердце YtYt. Мы создали
        уникальную четырёхступенчатую систему, в которой каждая порция теории
        плотно закрепляется практическими упражнениями. Сложность этих
        упражнений плавно нарастает от «хех, легко» до «боже мой, как это
        сделать?».
      </p>
      <p>
        Некоторые практические задания будут вручную проверяться опытными
        программистами - код-ревьюерами. С помощью ревьюеров вы научитесь писать
        красивый, понятный и эффективный код.
      </p>
      <p>
        Даже во вводном курсе содержится около 60 самостоятельных заданий и 3
        практических проекта, которые будут проверяться ревьюерами. А в общей
        сумме за год обучения вы напишете около 25 000 строк кода. Это примерно
        1 книга из серии «Гарри Поттер» или «Властелин колец», только целиком
        состоящая из кода.
      </p>
      <h2>Как-то всё слишком хорошо…</h2>
      <p>
        Мы постарались, чтобы так и было :) Пройдите бесплатный вводный курс,
        сдайте 3 проекта на проверку ревьюерам, и вы убедитесь, что YtYt - это
        то самое место, где можно научиться хорошо программировать.
      </p>
    </div>
  );
};

export default Lesson2;
