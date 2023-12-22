import styles from "./About.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <h2 className={styles.title}>{t("Main-About--Title")}</h2>
        <div className={styles.infoWrapper}>
          <Image
            className={styles.logo}
            width={305}
            height={287}
            src="/logoAbout.png"
          ></Image>
          <div className={styles.info}>
            <span className={styles.infoText}>{t("Main-About--InfoText")}</span>
            <Link href="/about-company" legacyBehavior>
              <a className={styles.infoLink}>{t("Main-About--InfoLink")}</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
