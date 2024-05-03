import LogoGames from "../asset/images/Pandagame.svg";
import React, { useState } from 'react';
import { BiBasket } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import {InputWithHover} from "./InputWithHover.jsx";

const Header = () => {

    return (
            <header className='header'>
                <img src={LogoGames} alt="Logo du site" className="LogoGames"/>
                <InputWithHover />
                <div className="HeaderRight">
                    <FaRegUserCircle className={'IconProfil'} style={{ color: 'white' }} size={'35px'} />
                    <BiBasket className={'IconBasket'} style={{ color: 'white' }} size={'35px'}/>
                </div>
            </header>
    )};

export {Header};