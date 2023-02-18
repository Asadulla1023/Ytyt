import Image from "next/image";

import styles from "../../styles/platform.module.css";
import Link from "next/link";
export const Platform = () => {
  return (
    <div className={styles.platform} id="platform">
      <div className={styles.container}>
        <h1>Удобная онлайн-платформа</h1>
        <p>
          Изучайте теорию, запускайте интерактивные примеры, пишите код и
          общайтесь с наставником. Вместо видеоуроков - текст, наглядные
          иллюстрации и много живых примеров кода, которые можно запустить прямо
          в браузере.
        </p>
        <Image src="/macbook.svg" alt="Macbook" className={styles.macbook} width={762} height={442} />
        <video width="320" height="240" className={styles.video} src="/video.mp4" controls/>
        <div className={styles.platSteps}>
          <div className={styles.stepCard}>
            <h1 className={styles.stepTitle}>01</h1>
            <h3 className={styles.stepSubtitle}>
              Весь материал разбит на небольшие уроки
            </h3>
            <p className={styles.stepDesc}>
              Теория и практика подаются маленькими порциями. Так вам будет
              легче усваивать новые знания.
            </p>
          </div>
          <div className={styles.stepCard}>
            <h1 className={styles.stepTitle}>02</h1>
            <h3 className={styles.stepSubtitle}>Обучение через практику</h3>
            <p className={styles.stepDesc}>
              Всё, что вы узнали, вы тут же начинаете применять на практике. Вы
              сразу видите результаты своего труда.
            </p>
          </div>
          <div className={styles.stepCard}>
            <h1 className={styles.stepTitle}>03</h1>
            <h3 className={styles.stepSubtitle}>Нет ограничений по времени</h3>
            <p className={styles.stepDesc}>
              Можно совмещать учёбу с работой и другими делами. Не нужно
              выпрашивать академический отпуск, если пришлось сделать перерыв.
            </p>
          </div>
        </div>
        <div className={styles.learnForFree}>
          <Link href="/auth/signup">
            Начать обучение{" "}
            <Image
              src="/topRightArr.svg"
              alt="45 degree array"
              width={15}
              height={15}
            />
          </Link>
          <p>Первые 14 уроков бесплатно</p>
        </div>
      </div>
      <div className={styles.platformBtm}>
        <div className={styles.container}>
          <div className={styles.btmRow1}>
            <div className={styles.rowItem1}>
              <Image
                src="learn.svg"
                alt="Learn from us motherfucker"
                width={270}
                height={231}
              />
            </div>
            <div className={styles.rowItem2}>
              <h4>Помощь и поддержка</h4>
              <p>
                Наставник всегда рядом - он поможет справиться с трудностями и
                подскажет, почему код работает не так, как хочется.
              </p>
              <p>
                А код-ревьюер научит вас писать код так, как его пишут
                профессионалы: лаконично, аккуратно и понятно. Иногда вы будете
                его любить, а иногда - ненавидеть за требовательность :)
              </p>
            </div>
          </div>
          <div className={styles.btmRow2}>
          <div className={styles.rowItem5} style={{display: "none"}}>
              <Image
                src="https://ytyt.ru/home/img/how_to_grid_2.svg"
                alt="Learn from us motherfucker"
                width={270}
                height={231}
              />
            </div>
            <div className={styles.rowItem3}>
              <h4>Работаем на результат</h4>
              <p>
                Мы не ограничиваем время общения со студентами, как это делают
                другие курсы. Если у вас возникнут сложности с пониманием
                материала или написанием кода, то наставник и код-ревьюер
                помогут вам разобраться до конца, и неважно, сколько времени это
                у них займёт. Наша цель - дать вам полный комплект навыков,
                необходимых для трудоустройства.
              </p>
            </div>
            <div className={styles.rowItem1}>
              <Image
                src="https://ytyt.ru/home/img/how_to_grid_2.svg"
                alt="Learn from us motherfucker"
                width={270}
                height={231}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
