import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";
import LangSwitcher from "../shared/LangSwitcher/LangSwitcher";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <LangSwitcher />
      <>{children}</>
      <Footer />
    </div>
  );
};
export default Layout;
