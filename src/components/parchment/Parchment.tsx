import css from "./Parchment.module.css";

const Parchment = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className={css.parchment}>{children}</div>;
};

export default Parchment;
