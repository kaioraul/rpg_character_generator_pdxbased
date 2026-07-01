import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.mainContainer}>
        <div className={css.mainContainerTop}>
          <div className={css.portraitLeft}>
            <div className={css.houseCoA}>House Coats of Arms</div>
            <div className={css.heirPortrait}></div>
          </div>
          <div className={css.characterPortrait}></div>
          <div className={css.portraitRight}>
            <div className={css.familyCoA}>Family Coats of Arms</div>
            <div className={css.spousePortrait}></div>
          </div>
        </div>
        <input readOnly type="text" id="name" name="name" value="Name" />
        <input readOnly type="text" id="title" name="title" value="Title" />
        <input readOnly type="text" id="house" name="house" value="House" />
        <div>Statistics</div>
      </div>
      <div className={css.secondContainer}>
        <div>OCEAN model</div>
        <div>Traits</div>
        <button>Save</button>
        <button>Export to PDF</button>
      </div>
    </main>
  );
}
