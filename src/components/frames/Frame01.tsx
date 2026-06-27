import css from "./Frame01.module.css";

export const Frame01 = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className={css.frame01}>{children}</div>;
};

export default Frame01;
