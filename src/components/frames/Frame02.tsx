import css from "./Frame02.module.css";

export const Frame02 = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className={css.frame02}>{children}</div>;
};

export default Frame02;
