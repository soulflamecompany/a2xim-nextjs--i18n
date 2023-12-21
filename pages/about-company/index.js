import styles from "./About.module.scss";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>A2XIM | О компании</title>
        <meta name="title" content="A2XIM "></meta>
      </Head>
      <div className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>О компании</h1>

          <article className={styles.infoWrapper}>
            <div className={styles.infoImage}>
              <Image src="/logoAbout.png" width={305} height={287}></Image>
            </div>
            <div className={styles.info}>
              <span>
                Группа компаний A2Xim создана группой профессионалов с опытом
                реализации международных проектов и организации проектного
                финансирования для них.
              </span>

              <span>
                Специализация нашей компании – торговля оборудованием, запасными
                частями и комплектующими для промышленных компаний, трейдинг и
                организация торгового финансирования.
              </span>
            </div>
          </article>
          <div className={styles.experience}>
            <ul>
              <h3 className={styles.infoSubtitle}>Опыт команды:</h3>
              <li>
                поставки энергетического оборудования на сумму свыше 2 млрд евро
              </li>
              <li>
                поставки различной машиностроительной продукции на сумму свыше
                400 млн. евро
              </li>
              <li>
                экспортное и импортное финансирование на сумму свыше 1,2 млрд.
                евро
              </li>
              <li>
                не знаю что еще про трейдинг, надо что-то возможно написать с
                цифрами, с потолка)
              </li>
              <li>
                опыт вывода продуктов на новые рынки и работы в 40 странах мира
              </li>
              <li>облигационные займы и финансовые инструменты на сумму ХХХ</li>
              <li>проектное финансирование</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
