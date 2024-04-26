import LogoGames from "../asset/images/Pandagame.svg";
// import React, { useState } from 'react';
import { BiBasket } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <header className='header'>
            <img src={LogoGames} alt="Logo du site" className="LogoGames"/>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder=" " aria-label="Search"/>
                    <button className="BtnSearch" type="submit">
                        <IoSearch />
                    </button>
                </form>
            </nav>
            <div className="HeaderRight">
                <FaRegUserCircle className={'IconProfil'} style={{ color: 'white' }} size={'35px'} />
                <BiBasket className={'IconBasket'} style={{ color: 'white' }} size={'35px'}/>
            </div>
        </header>
    )};

export {Header};