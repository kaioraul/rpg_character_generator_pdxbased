import { Tangerine } from "next/font/google";
interface TangerineFontProps {
  children: React.ReactNode;
}

const tangerine = Tangerine({ weight: ["400", "700"], subsets: ["latin"] });

const TangerineFont = (props: TangerineFontProps) => {
  const { children } = props;
  return <p className={tangerine.className}>{children}</p>;
};

export default TangerineFont;
