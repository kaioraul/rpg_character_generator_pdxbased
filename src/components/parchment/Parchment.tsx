import css from "./Parchment.module.css";

interface ParchmentProps {
  children: React.ReactNode;
  ParchmentVariant?: string;
}

const Parchment = ({ children, ParchmentVariant = "01" }: ParchmentProps) => {
  const variantKey = `parchment${ParchmentVariant}`;
  const className = css[variantKey];

  return <div className={className}>{children}</div>;
};

export default Parchment;
