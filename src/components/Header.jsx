import React from 'react';
import LogoGames from "../asset/images/Pandagame.svg";
import { BiBasket } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { InputWithHover } from "./InputWithHover.jsx";
import { GameProvider } from "./GameContext.jsx";
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <header className='header'>
            <nav>
                <Link to={'/'} className={'logo'}>
                    <img src={LogoGames} alt="Logo du site" className="LogoGames"/>
                </Link>
                <GameProvider>
                    <InputWithHover/>
                </GameProvider>
                <div className="HeaderRight">
                    <FaRegUserCircle className={'IconProfil'} style={{color: 'white'}} size={'35px'}/>
                    <BiBasket className={'IconBasket'} style={{color: 'white'}} size={'35px'}/>
                </div>
            </nav>
        </header>
    );
};


export {Header};