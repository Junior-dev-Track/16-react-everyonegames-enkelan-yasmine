import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

function GameMovies({ gameId }) {
    const [trailerUrl, setTrailerUrl] = useState(null);

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const response = await axios.get(`https://api.rawg.io/api/games/${gameId}/movies?key=${API_KEY}`);
                if (response.data.results && response.data.results.length > 0) {
                    setTrailerUrl(response.data.results[1].data.max); // Assuming the first result is the trailer
                }
            } catch (error) {
                console.error('Error fetching trailer: ', error);
            }
        };
        if (gameId) {
            fetchTrailer();
        } else {
            setTrailerUrl(null);
        }
    }, [gameId]);

    return trailerUrl ? <video src={trailerUrl} autoPlay loop /> : null;
}

export { GameMovies };