import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingGame } from "../components/TrendingGame.jsx";
import { PlatformList } from "../components/PlatformList.jsx";

const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

function GlobalApi({ gameId }) {
  const [data, setData] = useState(null);
  const [gameMovies, setGameMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}`,
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchGameMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${gameId}/movies?key=${API_KEY}`,
        );
        setGameMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching game movies: ", error);
      }
    };
    if (gameId) {
      fetchGameMovies();
    }
  }, [gameId]);

  return (
    <div>
      <TrendingGame games={data} gameMovies={gameMovies} />
      {data?.map((game) => (
        <div key={game.id}></div>
      ))}
    </div>
  );
}

export { GlobalApi };
