import React, { useState, useEffect } from "react";
import axios from "axios";

function GameMovies({ gameMovies }) {
  const handleError = (e) => {
    console.error("Video playback error: ", e);
  };

  return gameMovies ? (
    <video className="game-trailer" autoPlay muted loop onError={handleError}>
      <source src={gameMovies} type="video/mp4" />
    </video>
  ) : null;
}
export { GameMovies };
