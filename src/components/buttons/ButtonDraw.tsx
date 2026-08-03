import css from "./ButtonDraw.module.css";
import Image from "next/image";
import dieImage from "../../images/die.png";

interface ButtonDrawProps {
  onClick?: () => void;
}

export default function ButtonDraw({ onClick }: ButtonDrawProps) {
  return (
    <button className={css.buttonDraw} onClick={onClick}>
      <Image
        className={css.buttonDrawIcon}
        alt="Die icon"
        src={dieImage}
        width={17}
        height={17}
      ></Image>
    </button>
  );
}
