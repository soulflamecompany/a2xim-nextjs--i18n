import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.container}>
      <section className={styles.content}>
        <span>
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/logo.png"
                width={93}
                height={84}
                alt="logo"
                className={styles.logo}
              ></Image>
            </a>
          </Link>
        </span>
        <nav className={styles.navigation}>
          <ul>
            <li className={styles.navLink}>
              <Link href="/international-business" legacyBehavior>
                <a>МЕЖДУНАРОДНЫЙ БИЗНЕС</a>
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link href="/trade-finance" legacyBehavior>
                <a>ТОРГОВОЕ ФИНАНСИРОВАНИЕ</a>
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link href="/marketing" legacyBehavior>
                <a>МАРКЕТИНГ</a>
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link href="/contacts" legacyBehavior>
                <a>КОНТАКТЫ</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
export default Header;
