import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function GenreSelect() {
    const [platforms, setPlatforms] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const platformsResponse = await axios.get('https://api.rawg.io/api/platforms');
                const genresResponse = await axios.get('https://api.rawg.io/api/genres');
                setPlatforms(platformsResponse.data.results); // Assumer que les données sont paginées
                setGenres(genresResponse.data.results);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
                setError('Une erreur est survenue lors de la récupération des données.');
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedPlatform && selectedGenre) {
            setLoading(true);
            axios.get(`https://api.rawg.io/api/games?key=YOUR_API_KEY&platforms=${selectedPlatform}&genres=${selectedGenre}`)
                .then(response => {
                    setGames(response.data.results);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des jeux:', error);
                    setError('Impossible de récupérer les jeux.');
                    setLoading(false);
                });
        }
    }, [selectedPlatform, selectedGenre]);

    return (
        <div>
            {error && <p>{error}</p>}
            <Form>
                <Form.Select value={selectedPlatform} onChange={e => setSelectedPlatform(e.target.value)}>
                    <option value="">Select a Platform</option>
                    {platforms.map(platform => <option key={platform.id} value={platform.id}>{platform.name}</option>)}
                </Form.Select>
                <Form.Select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
                    <option value="">Select a Genre</option>
                    {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </Form.Select>
            </Form>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {games.map(game => <li key={game.id}>{game.name}</li>)}
                </ul>
            )}
        </div>
    );
}

export {GenreSelect};