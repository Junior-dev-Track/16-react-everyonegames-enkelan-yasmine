import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function GenreSelect() {
    const [games, setGames] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        axios.get('https://api.rawg.io/api/games')
            .then(response => {
                setGames(response.data.results);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, []);

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    // Filtrer les jeux par genre
    const filteredGames = games.filter(game =>
        game.genres.some(genre => genre.name.toLowerCase() === selectedGenre)
    );


    return (
        <div>
            <Form.Select aria-label="Default select example" onChange={handleGenreChange}>
                <option value="">Tous les genres</option>
                {['Action', 'Adventure', 'Puzzle'].map((genre, index) => (
                    <option key={index} value={genre.toLowerCase()}>
                        {genre}
                    </option>
                ))}
            </Form.Select>
            <ul>
                {filteredGames.map(game => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </div>
    );
}

export { GenreSelect };