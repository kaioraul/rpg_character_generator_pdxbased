"client";

import ButtonAdd from "../buttons/ButtonAdd";
import Draw from "../buttons/ButtonDraw";
import Dropdown from "../buttons/Dropdown";

/* import css from "./RecordManager.module.css"; */

interface RecordManagerProps {
  value: string | number | undefined;
}

export default function RecordManager({ value }: RecordManagerProps) {
  return (
    <>
      {value}
      <Dropdown records={[]} />
      <ButtonAdd />
      <Draw />
    </>
  );
}
