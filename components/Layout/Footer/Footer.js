import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.content}>
        <span>
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/logo.png"
                width={89}
                height={84}
                alt="logo"
                className={styles.logo}
              ></Image>
            </a>
          </Link>
        </span>
        <article className={styles.contactsWrapper}>
          <h3 className={styles.title}>
            <Link href="/contacts" legacyBehavior>
              <a>КОНТАКТЫ</a>
            </Link>
          </h3>
          <div className={styles.contacts}>
            <span className={styles.info}>
              эл. почта: <a href="mailto:a2xim@gmail.com">a2xim@gmail.com</a>
            </span>
            <span className={styles.info}>
              телефон: <a href="tel:+77777777777">+7 (777) 777 77 77</a>
            </span>
          </div>
        </article>
      </section>
    </footer>
  );
};
export default Footer;
