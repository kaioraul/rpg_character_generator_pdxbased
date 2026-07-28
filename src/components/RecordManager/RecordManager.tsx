"client";

import ButtonAdd from "../buttons/ButtonAdd";
import Draw from "./Draw";
import Dropdown from "./Dropdown";

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
