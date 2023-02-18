import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/cost.module.css";

const Cost = () => {
  return (
    <div className={styles.cost} id="cost">
      <div className={styles.container}>
        <h1>Стоимость обучения</h1>
        <div className={styles.costHeader}>
          <div className={styles.costItem}>
            <Image
              src="https://ytyt.ru/home/img/price_icon_1.svg"
              alt="price icon 1"
              width={61}
              height={61}
            />
            <p>
              Весь курс разбит на несколько блоков. Оплата поэтапная: платите
              только за тот блок, который сейчас проходите.
            </p>
          </div>
          <div className={styles.costItem}>
            <Image
              src="https://ytyt.ru/home/img/price_icon_2.svg"
              alt="price icon 2"
              width={61}
              height={61}
            />
            <p>Любой из блоков можно оплатить в рассрочку.</p>
          </div>
          <div className={styles.costItem}>
            <Image
              src="https://ytyt.ru/home/img/price_icon_3.svg"
              alt="price icon 3"
              width={61}
              height={61}
            />
            <p>
              Если передумаете учиться, то возврат можно оформить в любой
              момент. Возвращаем деньги за 3 рабочих дня.
            </p>
          </div>
        </div>
        <div className={styles.costWrapper}>
          <Image
            src="https://ytyt.ru/home/img/megaphone.svg"
            alt="megaphone image"
            width={91}
            height={91}
          />
          <p>
            Все блоки проходятся строго по порядку. Пропустить какой-то блок или
            начать обучение с середины нельзя. Только так мы можем
            гарантировать, что вы получите все знания, предусмотренные учебной
            программой.
          </p>
          <Link href="/auth/signup">
            Начать обучение{" "}
            <Image
              src="/topRightArr.svg"
              alt="45 degree svg"
              width={15}
              height={15}
            />
          </Link>
        </div>
          <h2>Общий стоимость обучения - <strong><em> 53 400 ₽</em></strong></h2>
      </div>
    </div>
  );
};

export default Cost;
