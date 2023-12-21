import styles from "./Finance.module.scss";
import Image from "next/image";
import Head from "next/head";

const Finance = () => {
  return (
    <>
      <Head>
        <title>A2XIM | Торговое финансирование</title>
        <meta name="title" content="A2XIM "></meta>
      </Head>
      <div className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>Торговое финансирование</h1>

          <article className={styles.infoWrapper}>
            <div className={styles.infoImage}>
              <Image src="/financeImage1.png" width={478} height={383}></Image>
            </div>
            <div className={styles.info}>
              <ul>
                <h3 className={styles.infoSubtitle}>Ключевые отрасли:</h3>
                <li>Организация экспортного и импортного финансирования</li>
                <li>Лизинг</li>
                <li>
                  Консалтинг в области государственной поддержки экспорта и
                  импорта
                </li>
                <li>Льготное финансирование и субсидии</li>
              </ul>

              <ul>
                <h3 className={styles.infoSubtitle}>Реализованные проекты:</h3>
                <li>
                  Поставка специальной техники в лизинг в Узбекистан на сумму
                  свыше 500 млн. руб.
                </li>
                <li>
                  Экспортный кредит на поставку специальной техники в Латинскую
                  Америку на сумму свыше 50 млн. евро
                </li>
                <li>
                  Экспортный кредит на поставку энергетического оборудования в
                  Латинской Америке на сумму свыше 200 млн. евро
                </li>
                <li>Финансирование ЕРС-проекта на сумму свыше 1 млрд. евро</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Finance;
