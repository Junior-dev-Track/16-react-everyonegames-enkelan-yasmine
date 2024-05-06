import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlatformList } from "./PlatformList.jsx";
import { GameMovies } from "./GameMovies.jsx";

const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

function TrendingGame() {
  const [games, setGames] = useState([]);
  const [hoveredGameId, setHoveredGameId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}`,
        );
        setGames(response.data.results);
      } catch (error) {
        console.error("Error fetching games: ", error);
      }
    };
    fetchGames();
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredGameId(id);
  };

  const handleMouseLeave = () => {
    setHoveredGameId(null);
  };

  return (
    <div>
      <div className="gameSectionList">
        <h2>Trending Games</h2>
        <div className="game-list">
          {games &&
            games.slice(0, showMore ? 9 : 3).map((game) => (
              <article key={game.id} className="game">
                <div
                  className="game-image-container"
                  onMouseEnter={() => handleMouseEnter(game.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={game.background_image} alt={game.name} />
                  {hoveredGameId === game.id && <GameMovies gameId={game.id} />}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3>{game.name}</h3>
                  <PlatformList />
                </div>
              </article>
            ))}
        </div>
        <div className="button-container">
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export { TrendingGame };
