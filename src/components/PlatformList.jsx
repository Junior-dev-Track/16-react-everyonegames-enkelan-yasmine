import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { v4 as uuid } from "uuid";

const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

function PlatformList({ gameId }) {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`,
        );
        setGame(response.data);
      } catch (error) {
        console.error("Error fetching game: ", error);
      }
    };
    if (gameId) {
      fetchGame();
    }
  }, [gameId]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        color: "white",
      }}
    >
      {game?.parent_platforms?.map((platform) => (
        <div key={uuid()} style={{ marginRight: "5px" }}>
          {platform.platform.id === 1 && <FaWindows size={20} />}
          {platform.platform.id === 2 && <FaPlaystation size={20} />}
          {platform.platform.id === 3 && <FaXbox size={20} />}
          {platform.platform.id === 5 && <FaApple size={20} />}
          {platform.platform.id === 6 && <FaLinux size={20} />}
        </div>
      ))}
    </div>
  );
}
export { PlatformList };
