import styles from "./GeoMap.module.scss";

const GeoMap = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <h2 className={styles.title}>География производства</h2>
        <div className={styles.map}></div>
      </section>
    </div>
  );
};
export default GeoMap;
