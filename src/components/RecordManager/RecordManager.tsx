"client";

import css from "./RecordManager.module.css";
import ButtonAdd from "../buttons/ButtonAdd";
import Draw from "../buttons/ButtonDraw";
import Dropdown from "../buttons/Dropdown";

interface RecordManagerProps {
  children: React.ReactNode;
  value?: string | number;
  records?: [];
}

export default function RecordManager({
  children,
  value,
  records = [],
}: RecordManagerProps) {
  return (
    <div className={css.recordManager}>
      <text>{children}</text>
      {value}
      <div className={css.recordManagerButtons}>
        <Dropdown records={records} />
        <ButtonAdd />
        <Draw />
      </div>
    </div>
  );
}
