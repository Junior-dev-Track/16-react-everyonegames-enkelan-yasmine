import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GameList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_APP_RAWG_API_KEY}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                data.results.map((game) => (
                    <div key={game.id}>
                        <h2>{game.name}</h2>
                        <img src={game.background_image} alt={game.name} />
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default GameList;
