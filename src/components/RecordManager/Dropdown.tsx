"client";

interface DropdownProps {
  records: {
    id: string;
    name: string;
  }[];
}

export default function Dropdown({ records }: DropdownProps) {
  return (
    <select>
      {records.map((record) => (
        <option key={record.id} value={record.name}>
          {record.name}
        </option>
      ))}
    </select>
  );
}
