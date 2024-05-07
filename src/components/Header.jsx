import React from "react";
import LogoGames from "../asset/images/Pandagame.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { InputWithHover } from "./InputWithHover.jsx";
import { GameProvider } from "./GameContext.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to={"/"}>
            <img src={LogoGames} alt="Logo du site" className="LogoGames" />
          </Link>
        </div>
        <GameProvider>
          <div className="search-bar">
            <InputWithHover />
          </div>
        </GameProvider>
        <div className="HeaderRight">
          <FaRegUserCircle
            className={"IconProfil"}
            style={{ color: "white" }}
            size={"35px"}
          />
        </div>
      </nav>
    </header>
  );
};

export { Header };
