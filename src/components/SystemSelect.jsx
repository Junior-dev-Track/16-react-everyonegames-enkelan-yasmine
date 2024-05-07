import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function SystemSelect() {
    const [games, setGames] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState('');

    useEffect(() => {
        axios.get('https://api.rawg.io/api/games')
            .then(response => {
                setGames(response.data.results);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, []);

    const handlePlatformChange = (event) => {
        setSelectedPlatform(event.target.value);
    };

    // Filtrer les jeux par plateforme
    const filteredGames = games.filter(game => game.platforms.includes(selectedPlatform));

    return (
        <div>
            <Form.Select aria-label="Default select example" onChange={handlePlatformChange}>
                <option value="">Toutes les Systems</option>
                {['PC', 'PlayStation 4', 'Xbox One'].map((platform, index) => (
                    <option key={index} value={platform.toLowerCase()}>
                        {platform}
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

export { SystemSelect };
