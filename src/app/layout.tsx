import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";
import css from "./layout.module.css";
import Parchment from "@/components/parchment/Parchment";
import Frame01 from "@/components/frames/FiligreeCorners01";

export const metadata = {
  title: "Tabletop Crusader Character",
  keywords:
    "Crusader King, Crusader King 2, Character Generator, Tabletop RPG, Tabletop Roleplaying Game, RPG, Roleplaying Game",
  authors: [{ name: "Miłosz Zając", url: "https://github.com/kaioraul" }],
  description:
    "Character Generator for Tabletop Roleplaying Games based on Crusader King 2 game by Paradox Interactive. Created using create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={css.html}>
      <body className={css.body}>
        <Frame01>
          <Parchment>
            <MainHeader />
            {children}
            <MainFooter />
          </Parchment>
        </Frame01>
      </body>
    </html>
  );
}
