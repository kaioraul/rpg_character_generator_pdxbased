import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.leftContainer}>Left container</div>
      <div className={css.centerContainer}>Center container</div>
      <div className={css.rightContainer}>Right container</div>
    </main>
  );
}
