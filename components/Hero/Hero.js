import { useTranslation } from "react-i18next";
import styles from "./Hero.module.scss";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>A2XI</h1>
        <h2 className={styles.subtitle}>{t("Main-Hero--Subtitle")}</h2>
      </section>
    </main>
  );
};
export default Hero;
