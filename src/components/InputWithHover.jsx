import '../styles/InputWithHover.scss';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

function InputWithHover() {
    const [isActive, setIsActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const toggleSearch = () => {
        setIsActive(!isActive);
    };

    const handleSearch = async () => {
        if (!searchTerm) return;  // Evite les recherches vides
        setIsLoading(true);
        try {
            const response = await axios.get(`https://api.rawg.io/api/games?key=TUA_CHIAVE_API&search=${searchTerm}`);
            setGames(response.data.results);
            setIsLoading(false);
        } catch (error) {
            setError('Failed to fetch games');
            setIsLoading(false);
        }
    };

    const handleClick = () => {
        setSearchTerm(''); // Manipulation de l'état plutôt que du DOM
    };

    return (
        <div className={"SearchBackground"}>
            <div className={`SearchContainer ${isActive ? 'active' : ''}`}>
                <div className={'SearchIcon'}>
                    <FaSearch className={'ScaleIcon'} size={'15px'} color={'#201F1F'} onClick={toggleSearch} />
                </div>
                <div className={'SearchInput'}>
                    <input
                        type="text"
                        placeholder={'Enter search'}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    ></input>
                    <span className={'SearchClear'} onClick={handleClick}></span>
                </div>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                {games.map(game => (
                    <div key={game.id}>{game.name}</div>
                ))}
            </div>
        </div>
    );
}

export { InputWithHover };
