import { useState } from "react";

import { BurgerIcon } from "@/assets/burger";
import { Container } from "./styles";
import { MenuIcon } from "@/assets/menu";
import Image from "next/image";
import menuImg from "@/assets/menu.svg";
import { BurgerAndSoda } from "@/assets/burger-and-soda";
import { PizzaIcon } from "@/assets/pizza";
import { SodaIcon } from "@/assets/soda";
import { IceCreamIcon } from "@/assets/ice-cream";

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
        <Image src={menuImg} alt="Open and close menu" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="#" className="active">
              <BurgerIcon />
              <span>Hamburgers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <PizzaIcon />
              <span>Pizza</span>
            </a>
          </li>
          <li>
            <a href="#">
              <SodaIcon />
              <span>Soda</span>
            </a>
          </li>
          <li>
            <a href="#">
              <IceCreamIcon />
              <span>IceCream</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
