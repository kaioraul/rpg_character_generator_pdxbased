import Link from "next/link";
import NavLink from "./NavLink";
import css from "./MainHeader.module.css";
import logo from "../../app/icon.png";
import Image from "next/image";
import TangerineFont from "../fonts/TangerineFont";

const MainHeader = () => {
  return (
    <header className={css.header}>
      <Link className={css.logo} href="/">
        <Image
          src={logo}
          alt="A king with a crown in full plate armour"
          priority
        />
        <TangerineFont>Tabletop Crusader Character</TangerineFont>
      </Link>
      <nav className={css.nav}>
        <NavLink href="/saved">Saved Characters</NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
