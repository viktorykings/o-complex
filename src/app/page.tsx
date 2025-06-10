import styles from "./page.module.css";
import Review from "./components/reviews/Review";
import { InfiniteScrollList } from "./components/products/ProductsList";
import PhoneInput from "./components/phone-input/PhoneInput";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>тестовое задание</header>
      <main className={styles.main}>
        <Review />
        <br />
        <PhoneInput />
        <br />
        <InfiniteScrollList />
      </main>

    </div>
  );
}
