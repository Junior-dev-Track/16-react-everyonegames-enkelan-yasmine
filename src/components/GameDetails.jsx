import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RatingBar from "./RatingBar.jsx";

function GameDetails() {
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${API_KEY}`,
        );
        console.log("Game data:", response.data); // Add this line
        setGame(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch game", error);
        setIsLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{game.playtime}</p>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <p>{game.released}</p>
      <RatingBar ratings={game.ratings} />
      <img src={game.background_image} alt={game.name} />
    </div>
  );
}

export { GameDetails };
