import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <p>
        Welcome to my website <br />I am a frontend web developer with a passion
        for games, especialy boardgames and tabletop RPG games.
      </p>
      <p>List of my projects</p>
      <ul>
        <li>
          <Link href="/tabletopCrusaderCharacter">
            Tabletop Crusader Character
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
