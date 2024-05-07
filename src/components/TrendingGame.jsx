import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlatformList } from "./PlatformList.jsx";
import { GameMovies } from "./GameMovies.jsx";

const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

function TrendingGame({ games, gameMovies }) {
  const [hoveredGameId, setHoveredGameId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleMouseEnter = (id) => {
    setHoveredGameId(id);
  };

  const handleMouseLeave = () => {
    setHoveredGameId(null);
  };

  return (
    <>
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
                  <picture>
                    <source
                      srcSet={game.background_image}
                      media="(min-width: 800px)"
                    />
                    <img src={game.background_image} alt={game.name} />
                  </picture>
                  {hoveredGameId === game.id && (
                    <GameMovies gameId={game.id} gameMovies={gameMovies} />
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3>{game.name}</h3>
                  <PlatformList gameId={game.id} />
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
    </>
  );
}

export { TrendingGame };
