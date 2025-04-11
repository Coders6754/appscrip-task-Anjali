import styles from "../styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderBox}>
      <div className={styles.loaderCircle}></div>
      <p>Loading products...</p>
    </div>
  );
}
