import css from "./FiligreeCorners01.module.css";

const FiligreeCorners01 = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={css.filigreeCorner01Container}>
      <div className={css.filigreeCorner01LeftTop} />
      <div className={css.filigreeCorner01LeftBottom} />
      <div className={css.filigreeCorner01RightTop} />
      <div className={css.filigreeCorner01RightBottom} />
      {children}
    </div>
  );
};

export default FiligreeCorners01;
