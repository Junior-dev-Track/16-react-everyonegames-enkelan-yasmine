import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

function InputWithHover() {
    const [isActive, setIsActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

    const toggleSearch = () => {
        setIsActive(!isActive);
    };

    const handleSearch = async () => {
        if (!searchTerm) return;
        setIsLoading(true);
        try {
            const response = await axios.get(`https://api.rawg.io/api/games?search=${searchTerm}&key=${API_KEY}`);
            setGames(response.data.results);
            setIsLoading(false);
        } catch (error) {
            setError('Failed to fetch games');
            setIsLoading(false);
        }
    };

    const handleClick = () => {
        setSearchTerm('');
    };

    return (
        <div className={"SearchBackground"}>
            <div className={`SearchContainer ${isActive? 'active' : ''}`}>
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
            {games.length > 0 && (
                <div className="SearchResults">
                    {games.map(game => (
                        <article className={'GameListResult'} key={game.id}>
                            <h3>{game.name}</h3>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}

export { InputWithHover };
