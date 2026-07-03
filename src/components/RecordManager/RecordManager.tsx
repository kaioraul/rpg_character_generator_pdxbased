"client";

import AddValue from "./AddValue";
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
      <Dropdown />
      <AddValue />
      <Draw />
    </>
  );
}
