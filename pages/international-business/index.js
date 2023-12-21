import styles from "./Business.module.scss";
import Image from "next/image";
import Head from "next/head";

const Business = () => {
  return (
    <>
      <Head>
        <title>A2XIM | Международный бизнес</title>
        <meta name="title" content="A2XIM "></meta>
      </Head>
      <div className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>Международный бизнес</h1>
          <h2 className={styles.infoTitle}>Промышленная продукция</h2>
          <article className={styles.infoWrapper}>
            <div className={styles.infoImage}>
              <Image src="/businessImage1.png" width={478} height={383}></Image>
            </div>
            <div className={styles.info}>
              <ul>
                <h3 className={styles.infoSubtitle}>Ключевые отрасли:</h3>
                <li>
                  транспортное машиностроение (локомотивы, вагоны, специальная
                  техника и запасные части к ним)
                </li>
                <li>энергетика (основное и вспомогательное оборудование)</li>
                <li>сельхозтехника и запасные части к ней</li>
                <li>продукция химической отрасли</li>
              </ul>

              <ul>
                <h3 className={styles.infoSubtitle}>Реализованные проекты:</h3>
                <li>
                  поставка локомотивов для 8 промышленных предприятий в четырех
                  странах
                </li>
                <li>
                  поставка грузовых вагонов для транспортных компаний на Ближнем
                  Востоке и в Европе
                </li>
                <li>
                  поставка энергетического оборудования в страны Латинской
                  Америки
                </li>
                <li>поставка сельскохозяйственной техники в Россию</li>
                <li>
                  поставка химической продукции для строительной и
                  металлургической отрасли в Российскую Федерацию
                </li>
                <li>
                  поставка запасных частей для грузовых вагонов в страны Средней
                  Азии
                </li>
              </ul>
            </div>
          </article>

          <h2 className={styles.infoTitle}>Трейдинг</h2>
          <article className={styles.infoWrapper}>
            <div className={styles.infoImage}>
              <Image src="/businessImage2.png" width={478} height={367}></Image>
            </div>
            <div className={styles.info}>
              <ul>
                <h3 className={styles.infoSubtitle}>Ключевые отрасли:</h3>
                <li>металлы и сплавы (ферросплавы, цинк)</li>
                <li>лом черных и цветных металлов</li>
                <li>уголь</li>
                <li>хлопок</li>
              </ul>

              <ul>
                <h3 className={styles.infoSubtitle}>Реализованные проекты:</h3>
                <li>поставка угля для потребителей во Вьетнаме и Индии</li>
                <li>поставка калийных удобрений в Бангладеш</li>
                <li>поставка металлов из центральной Африки в Южную Азию</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Business;
