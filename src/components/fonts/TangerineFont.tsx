import { Tangerine } from "next/font/google";

const tangerine = Tangerine({ weight: ["400", "700"], subsets: ["latin"] });
interface TangerineFontProps {
  children: React.ReactNode;
}

const TangerineFont = (props: TangerineFontProps) => {
  const { children } = props;
  return <p className={tangerine.className}>{children}</p>;
};

export default TangerineFont;
