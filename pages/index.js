import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import GeoMap from "../components/GeoMap/GeoMap";
import RequestForm from "../components/RequestForm/RequestForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>A2XIM | Главная</title>
        <meta name="title" content="A2XIM"></meta>
      </Head>
      <div className={styles.container}>
        <Hero />
        <About />
        <GeoMap />
        <RequestForm />
      </div>
    </>
  );
}
