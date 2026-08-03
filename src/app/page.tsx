"use client";

import css from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

import RecordManager from "../components/RecordManager/RecordManager";
import Dropdown from "../components/buttons/Dropdown";
import ButtonDraw from "@/components/buttons/ButtonDraw";
import ButtonAdd from "@/components/buttons/ButtonAdd";
import Parchment from "@/components/parchment/Parchment";

import diplomacyImage from "../images/diplomacy.png";
import martialImage from "../images/martial.png";
import stewardshipImage from "../images/stewardship.png";
import intrigueImage from "../images/intrigue.png";
import learningImage from "../images/learning.png";
import prowessImage from "../images/prowess.png";

export default function Home() {
  const [age, setAge] = useState(0);

  const drawAge = () => Math.floor(Math.random() * 101);

  return (
    <main className={css.main}>
      <div className={css.mainContainer}>
        <div className={css.mainContainerTop}>
          <div className={css.portraitLeft}>
            <div className={css.houseCoA}>House Coats of Arms</div>
            <div className={css.heirPortrait}></div>
          </div>
          <div className={css.character}>
            <div className={css.characterPortrait}></div>
            <input readOnly type="text" id="name" name="name" value="Name" />
            <input readOnly type="text" id="title" name="title" value="Title" />
            <input readOnly type="text" id="house" name="house" value="House" />
          </div>
          <div className={css.portraitRight}>
            <div className={css.familyCoA}>Family Coats of Arms</div>
            <div className={css.spousePortrait}></div>
          </div>
        </div>
        <div className={css.mainContainerBottom}>
          <Parchment ParchmentVariant="01">
            <RecordManager text="Age" value={age}>
              <ButtonDraw onClick={() => setAge(drawAge())} />
            </RecordManager>
          </Parchment>
          <Parchment ParchmentVariant="01">
            <RecordManager text="Culture">
              <Dropdown records={[]} />
              <ButtonAdd />
              <ButtonDraw />
            </RecordManager>
          </Parchment>
          <Parchment ParchmentVariant="01">
            <div>Traits</div>
          </Parchment>
          <Parchment ParchmentVariant="01">
            <div>OCEAN model</div>
          </Parchment>
          <Parchment ParchmentVariant="01">
            <div className={css.mainContainerBottomButtons}>
              <ButtonDraw />
              <button>Save</button>
              <button>Export to PDF</button>
            </div>
          </Parchment>
        </div>
      </div>
      <div className={css.secondContainer}>
        <div className={css.skills}>
          <div className={css.diplomacy}>
            <Image
              src={diplomacyImage}
              alt="Diplomacy"
              width={25}
              height={25}
            />
            Diplomacy
          </div>
          <div className={css.martial}>
            <Image src={martialImage} alt="Martial" width={25} height={25} />
            Martial
          </div>
          <div className={css.stewardship}>
            <Image
              src={stewardshipImage}
              alt="Stewardship"
              width={25}
              height={25}
            />
            Stewardship
          </div>
          <div className={css.intrigue}>
            <Image src={intrigueImage} alt="Intrigue" width={25} height={25} />
            Intrigue
          </div>
          <div className={css.learning}>
            <Image src={learningImage} alt="Learning" width={25} height={25} />
            Learning
          </div>
          <div className={css.prowess}>
            <Image src={prowessImage} alt="Prowess" width={25} height={25} />
            Prowess
          </div>
        </div>
      </div>
    </main>
  );
}
