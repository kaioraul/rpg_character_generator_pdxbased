"client";

import css from "./RecordManager.module.css";

interface RecordManagerProps {
  children: React.ReactNode;
  value?: string | number;
  text?: string;
}

export default function RecordManager({
  children,
  value,
  text,
}: RecordManagerProps) {
  return (
    <div className={css.recordManager}>
      <text>{text}</text>
      {value}
      <div className={css.recordManagerButtons}>{children}</div>
    </div>
  );
}
