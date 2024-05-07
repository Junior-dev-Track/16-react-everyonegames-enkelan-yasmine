// src/components/GameCarousel.jsx

import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchData } from "../Services/GlobalApi.jsx";

function GameCarousel() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await fetchData();
      setGames(data.slice(0, 5)); // Store first 5 games for carousel
    };
    fetchGames();
  }, []);

  return (
    <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight>
      {games.map((game) => (
        <div key={game.id}>
          <img src={game.background_image} alt={game.name} />
          <p className="legend">{game.name}</p>
        </div>
      ))}
    </Carousel>
  );
}

export { GameCarousel };
