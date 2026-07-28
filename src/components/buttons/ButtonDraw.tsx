"client";

import css from "./ButtonDraw.module.css";
import Image from "next/image";
import dieImage from "../../images/die.png";

export default function ButtonDraw() {
  return (
    <button className={css.buttonDraw}>
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
