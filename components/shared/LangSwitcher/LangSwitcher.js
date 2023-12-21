import styles from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <button onClick={toggle} className={styles.langButton}>
      {t("Language")}
    </button>
  );
};
export default LangSwitcher;
