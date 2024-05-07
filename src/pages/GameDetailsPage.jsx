import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/_GameDetailsPage.scss';
import {PlatformList} from "../components/PlatformList.jsx";


function GameDetailsPage() {
    const { id } = useParams();
    const [gameDetails, setGameDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
                console.log("API Response:", response.data);
                setGameDetails(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching game details:", error);
                setError('Failed to fetch game details');
                setIsLoading(false);
            }
        };
        fetchGameDetails();
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className={'DetailsGame'}>
            <div className="card">
                <h2>{gameDetails.name}</h2>
                <img className="GameImage" src={gameDetails.background_image} alt={gameDetails.name} />
                <h4>Platform:</h4>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <PlatformList gameId={gameDetails.id} />
                </div>
            </div>
            <h4>Release Date:</h4>
            <p>{gameDetails.released}</p>
            <h4>Développeur:</h4>
            <p>{gameDetails.developer}</p>
            <h4>Genre:</h4>
            <p>{gameDetails.genres.map(g => g.name).join(', ')}</p>
            <h4>Description:</h4>
            <p>{gameDetails.description}</p>
            <h4>Rating :</h4>
            <p>{gameDetails.rating} </p>

        </section>
    );
}

export {GameDetailsPage};
