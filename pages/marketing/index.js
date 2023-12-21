import styles from "./Marketing.module.scss";
import Image from "next/image";
import Head from "next/head";

const Marketing = () => {
  return (
    <>
      <Head>
        <title>A2XIM | Маркетинг</title>
        <meta name="title" content="A2XIM "></meta>
      </Head>
      <div className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>Маркетинг</h1>

          <article className={styles.infoWrapper}>
            <div className={styles.infoImage}>
              <Image
                src="/marketingImage1.png"
                width={478}
                height={383}
              ></Image>
            </div>
            <div className={styles.info}>
              <span>
                Наша команда имеет уникальный опыт вывода новых продуктов на
                новые географические рынки: Казахстан, Россия, Индия, ОАЭ, Иран,
                Куба, Сербия, Турция, Куба, Эквадор, Венесуэла, Аргентина и т.д.
              </span>

              <span>
                Мы готовы оказать содействие в построении продаж на целевых
                рынках с использованием нашего ресурса и партнерских сетей Имеем
                опыт разработки региональных, функциональных и коммуникационных
                стратегий.
              </span>

              <span>
                Наша команда готова предоставить консультации, а также
                предоставить GR-поддержку по рынкам присутствия.
              </span>

              <span>
                Мы рады помочь с поиском партнеров и производств для выхода на
                новые рынки.
              </span>

              <span>
                Наша модель сотрудничества - организация экспорта или импорта
                продукции «под ключ» на всех этапах жизненного цикла, включая:
                поиск партнера, разработку стратегии, организацию сделок в
                различных юрисдикциях, торговое финансирование.
              </span>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Marketing;
