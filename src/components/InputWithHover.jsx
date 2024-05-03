import '../styles/InputWithHover.scss'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";


function handleClick() {
    document.getElementById('mySearch').value = ''; // Manipulation du DOM
}
function InputWithHover() {
    const [isActive, setIsActive] = useState(false);

    const toggleSearch = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={"SearchBackground"}>
            <div className={`SearchContainer ${isActive? 'active' : ''}`}>
                <div className={'SearchIcon'}>
                    <FaSearch size={'15px'} color={'#201F1F'} onClick={toggleSearch} />
                </div>
                <div className={'SearchInput'}>
                    <input type="text" placeholder={'Enter search'} id={'mySearch'}></input>
                    <span className={'SearchClear'} onClick={handleClick}></span>
                </div>
            </div>
        </div>
    );
}


export { InputWithHover };
