import styles from "@/app/scss/components/ui/Container.module.scss";

const Container = ({ ...props }) => {
  return <div className={styles.container} {...props}></div>;
};

export default Container;
