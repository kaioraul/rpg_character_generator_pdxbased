import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.leftContainer}>
        <div>House Coats of Arms</div>
        <div>Portrait</div>
        <div>Family Coats of Arms</div>
        <input readOnly type="text" value="Name" />
        <input readOnly type="text" value="Title" />
        <input readOnly type="text" value="House" />
        <div>Statistics</div>
        <div>Traits</div>
      </div>
      <div className={css.centerContainer}>Center container</div>
      <div className={css.rightContainer}>Right container</div>
    </main>
  );
}
