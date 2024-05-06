import LogoGames from "../asset/images/Pandagame.svg";
import { BiBasket } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import {InputWithHover} from "./InputWithHover.jsx";
import {GameProvider} from "./GameContext.jsx";


const Header = () => {

    return (
        <header className='header'>
            <img src={LogoGames} alt="Logo du site" className="LogoGames" />
            <GameProvider>
                <InputWithHover/>
                <div className="HeaderRight">
                    <FaRegUserCircle className={'IconProfil'} style={{color: 'white'}} size={'35px'}/>
                    <BiBasket className={'IconBasket'} style={{color: 'white'}} size={'35px'}/>
                </div>
            </GameProvider>
        </header>
    );
};


export {Header};