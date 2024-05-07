import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlatformList } from "./PlatformList.jsx";
import { GameMovies } from "./GameMovies.jsx";
import gameTrailers from "./gameTrailers.js";

function TrendingGame({ games }) {
  const [hoveredGameId, setHoveredGameId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleMouseEnter = (id) => {
    setHoveredGameId(id);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHoveredGameId(null);
    setIsHovered(false);
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
                  {isHovered && hoveredGameId === game.id ? (
                    <GameMovies
                      gameId={game.id}
                      gameMovies={gameTrailers[game.id]}
                    />
                  ) : (
                    <img src={game.background_image} alt={game.name} />
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
