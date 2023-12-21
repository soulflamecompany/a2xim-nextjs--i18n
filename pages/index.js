import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import GeoMap from "../components/GeoMap/GeoMap";
import RequestForm from "../components/RequestForm/RequestForm";

import "../i18n/i18n";

export default function Home() {
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
