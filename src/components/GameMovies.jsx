import React, { useState, useEffect } from "react";
import axios from "axios";

function GameMovies({ gameMovies }) {
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    if (gameMovies && gameMovies.length > 0) {
      const gameMovie = gameMovies[0];
      if (gameMovie && gameMovie.data && gameMovie.data.url) {
        setTrailerUrl(gameMovie.data.url);
      }
    } else {
      setTrailerUrl(null);
    }
  }, [gameMovies]);

  return trailerUrl ? (
    <video className="game-trailer" autoPlay loop>
      <source src={trailerUrl} />
      Your browser does not support the video tag.
    </video>
  ) : null;
}
export { GameMovies };
