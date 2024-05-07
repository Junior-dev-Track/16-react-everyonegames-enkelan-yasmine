import { useState, useEffect } from 'react';
import axios from 'axios';
import { Filters } from "../components/Filters.jsx";

function AllGames() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
                setGames(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
                setError('Une erreur est survenue lors de la récupération des données.');
                setLoading(false);
            }
        };

        fetchGames();
    }, []); // Supprimez fetchGames() de la liste des dépendances car il est appelé à l'intérieur de useEffect

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Filters />
            {games.map((game) => (
                <article key={game.id} className="game">
                    <div className="game-image-container">
                        <img src={game.background_image} alt={game.name} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3>{game.name}</h3>
                    </div>
                </article>
            ))}
        </div>
    );
}
export {AllGames};
