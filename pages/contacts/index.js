import styles from "./Contacts.module.scss";
import Image from "next/image";
import Head from "next/head";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>A2XIM | Контакты</title>
        <meta name="title" content="A2XIM "></meta>
      </Head>
      <div className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>Контакты</h1>

          <article className={styles.infoWrapper}>
            <div className={styles.infoImage}>
              <Image src="/contactsImage1.png" width={478} height={383}></Image>
            </div>
            <div className={styles.info}>
              <span>Офисы:</span>

              <span>Астана (можно твой казахстанский тел. ?)</span>

              <span>Гургаон (мой индийский тел., записан не на меня 😊 )</span>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Contacts;
