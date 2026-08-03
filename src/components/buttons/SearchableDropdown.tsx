"use client";

import css from "./SearchableDropdown.module.css";

import { useState, useRef, useEffect, ChangeEvent } from "react";

export interface SearchItem {
  id: string;
  name: string;
}

interface SearchableDropdownProps {
  items: SearchItem[];
  onSelect?: (item: { id: string; name: string }) => void;
}

export default function SearchableDropdown({
  items,
  onSelect,
}: SearchableDropdownProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<SearchItem | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: SearchItem) => {
    setSelectedItem(item);
    setSearchTerm(item.name);
    setIsOpen(false);

    if (onSelect) {
      onSelect(item);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedItem(null);
    setIsOpen(true);

    if (onSelect) {
      onSelect({ id: "", name: "" });
    }
  };

  return (
    <div className={css.container} ref={dropdownRef}>
      <input
        type="text"
        placeholder="Type to search"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        className={css.input}
      />

      {isOpen && (
        <ul className={css.dropdown}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const isSelected = selectedItem?.id === item.id;

              return (
                <li
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`${css.item} ${isSelected ? css.selected : ""}`}
                >
                  {item.name}
                </li>
              );
            })
          ) : (
            <li className={css.noResults}>No results</li>
          )}
        </ul>
      )}
    </div>
  );
}
