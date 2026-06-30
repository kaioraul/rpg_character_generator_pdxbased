import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.leftContainer}>
        <div className={css.leftContainerTop}>
          <div className={css.houseCoA}>House Coats of Arms</div>
          <div className={css.portrait}>Portrait</div>
          <div className={css.familyCoA}>Family Coats of Arms</div>
        </div>
        <input readOnly type="text" value="Name" />
        <input readOnly type="text" value="Title" />
        <input readOnly type="text" value="House" />
        <div>Statistics</div>
      </div>
      <div className={css.centerContainer}>
        <div>OCEAN model</div>
        <div>Traits</div>
      </div>
      <div className={css.rightContainer}>
        <button>Save</button>
        <button>Export to PDF</button>
      </div>
    </main>
  );
}
