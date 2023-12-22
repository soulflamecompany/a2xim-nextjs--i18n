import styles from "./About.module.scss";
import Image from "next/image";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["ac", "common"])),
    },
  };
}

const About = () => {
  const { t } = useTranslation("ac");
  return (
    <>
      <Head>
        <title>A2XIM | О компании</title>
        <meta name="title" content="A2XIM "></meta>
      </Head>
      <div className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>{t("AC-Title")}</h1>

          <article className={styles.infoWrapper}>
            <div className={styles.infoImage}>
              <Image src="/logoAbout.png" width={305} height={287}></Image>
            </div>
            <div className={styles.info}>
              <span>{t("AC-Info1")}</span>

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
