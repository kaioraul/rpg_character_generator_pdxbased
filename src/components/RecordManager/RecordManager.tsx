import css from "./RecordManager.module.css";

import SearchableDropdown from "../buttons/SearchableDropdown";
import ButtonAdd from "../buttons/ButtonAdd";
import ButtonDraw from "../buttons/ButtonDraw";

const frameworks = [
  { id: "react", name: "React" },
  { id: "vue", name: "Vue.js" },
  { id: "angular", name: "Angular" },
  { id: "svelte", name: "Svelte" },
  { id: "next", name: "Next.js" },
  { id: "nuxt", name: "Nuxt.js" },
  { id: "remix", name: "Remix" },
  { id: "gatsby", name: "Gatsby" },
];

interface RecordManagerProps {
  text?: string;
}

export default function RecordManager({ text }: RecordManagerProps) {
  return (
    <div className={css.recordManager}>
      <div className={css.recordManager}>
        {text}
        <SearchableDropdown items={frameworks} />
      </div>
      <div className={css.recordManagerButtons}>
        <ButtonAdd />
        <ButtonDraw />
      </div>
    </div>
  );
}
