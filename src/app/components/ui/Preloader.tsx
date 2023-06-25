import styles from "@/app/scss/components/ui/Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.preloader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
