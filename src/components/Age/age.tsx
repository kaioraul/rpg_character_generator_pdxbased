"use client";

import { useState } from "react";

import css from "./Age.module.css";
import ButtonDraw from "../buttons/ButtonDraw";

export default function Age() {
  const [age, setAge] = useState("0");
  const drawAge = () => Math.floor(Math.random() * 101);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val === "") {
      setAge("");
      return;
    }

    const num = Number(val);

    if (num >= 0 && num <= 124) {
      setAge(num.toString());
    }
  };

  return (
    <div className={css.age}>
      <div>
        <text>Age</text>
        <input
          className={css.ageInput}
          type="number"
          min="0"
          max="124"
          value={age}
          onChange={handleChange}
          placeholder="0-124"
        ></input>
      </div>
      <div>
        <ButtonDraw onClick={() => setAge(drawAge().toString())} />
      </div>
    </div>
  );
}
