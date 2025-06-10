import styles from "./page.module.css";
import Review from "./components/Review";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>тестовое задание</header>
      <main className={styles.main}>
        <Review />


      </main>

    </div>
  );
}
