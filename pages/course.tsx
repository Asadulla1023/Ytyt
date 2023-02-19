import Head from "next/head";
import styles from "../styles/course.module.css";
import Header from "../components/pages/Header";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { ADDS, EDUC } from "../constant";

const course = () => {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      // e.preventDefault();
    });
    document.onkeydown = function (e) {
      if (e.keyCode == 123) {
        return false;
      }
    };
  });
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
            <div className={styles.lessonWrapper}>
              <Carousel autoPlay={true} interval={5000} infiniteLoop verticalSwipe="standard">
                {EDUC.map((e) => {
                  return (
                    <div className={styles.educCard} key={e.id}>
                      <div className={styles.meaningOfHead}>
                        <div className={styles.logoOfEducation}>
                          <Image
                            src={"/AI.png"}
                            alt={"wqedw"}
                            width={150}
                            height={150}
                            style={{ marginTop: 30, marginLeft: 20 }}
                            className={styles.Ba}
                          />
                          <h2>{e.title}</h2>
                        </div>
                      </div>
                      <div className={styles.aboutSectOfHome}>
                        <p
                          className={styles.aboutSection}
                          style={{
                            marginTop: 20,
                            width: "80%",
                            marginBottom: 40,
                          }}
                        >
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Tenetur, cumque? Fuga repellendus reiciendis
                          quos suscipit nam officia nobis. Quos aut excepturi
                          necessitatibus non iusto facere alias doloremque,
                          deleniti pariatur accusamus debitis iste eligendi
                          molestias officiis repellat quibusdam provident culpa
                          laudantium corrupti minus. Animi commodi ex maiores
                          quos aliquid. Doloremque quidem deserunt molestias ea
                          consequuntur repellat at et reiciendis, aspernatur
                          iusto itaque distinctio esse porro corporis totam ab
                          repellendus placeat nemo voluptate ipsam suscipit nam
                          asperiores magnam. Nobis animi libero quidem maxime
                          possimus, nisi ea eius repellendus, cumque nemo eum
                          sequi nulla pariatur id illum optio. Pariatur ipsa
                          nobis optio sed? Lorem ipsum dolor, sit amet
                          consectetur adipisicing elit. Voluptatem harum ratione
                          vero tempore labore! Et velit quas soluta
                          exercitationem. Unde autem, explicabo, assumenda
                          veniam porro sapiente laudantium repellendus odit
                          atque dolore consequatur libero quam quo maxime a
                          sequi aut repudiandae quisquam modi cum! Accusantium
                          cum dolorum ad voluptate eum architecto neque
                          explicabo nulla labore, voluptas obcaecati ipsa sed
                          eveniet? Dolores, porro maxime tenetur ut asperiores
                          reprehenderit libero earum nam, blanditiis non
                          dignissimos. Temporibus illum, iste nam animi eligendi
                          minus? Laboriosam aliquid dolor totam temporibus modi,
                          delectus sit? Et consequatur, autem commodi aliquid
                          velit voluptas aut impedit eius. Error, voluptatem
                          ratione.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
              <Carousel showArrows={true} showThumbs={false} centerSlidePercentage={33.33} centerMode width="100%" autoPlay={true} interval={2000} infiniteLoop>
                {ADDS.map(({ proff, loc, id, about, educ }) => (
                    <div className={styles.Adscard} key={id}>
                        <div className={styles.cont}>
                            <div style={{marginTop: 20}} className={styles.top}>
                                <h3>{proff}</h3>
                            </div>
                            <div style={{marginTop: 40}} className={styles.aboutSection}>
                                <p>{about}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default course;
