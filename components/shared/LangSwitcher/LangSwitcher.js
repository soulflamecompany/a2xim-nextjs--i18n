// LangSwitcher.js
import styles from "./LangSwitcher.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LangSwitcher = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const toggle = async () => {
    const newLocale = router.locale === "ru" ? "en" : "ru";
    await router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <button onClick={toggle} className={styles.langButton}>
      {t("Language")}
    </button>
  );
};

export default LangSwitcher;
