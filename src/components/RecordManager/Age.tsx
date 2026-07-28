"client";

import Draw from "../buttons/ButtonDraw";

/* import css from "./Age.module.css"; */

interface AgeProps {
  value: number;
}

export default function Age({ value }: AgeProps) {
  return (
    <>
      {value}
      <Draw />
    </>
  );
}
