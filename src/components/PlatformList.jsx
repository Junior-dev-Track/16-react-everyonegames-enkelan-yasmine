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

function PlatformList() {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`,
        );
        setPlatforms(response.data.results);
      } catch (error) {
        console.error("Error fetching platforms: ", error);
      }
    };
    fetchPlatforms();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        color: "white",
      }}
    >
      {platforms.slice(0, 3).map((platform) => (
        <div key={uuid()} style={{ marginRight: "5px" }}>
          {platform.id === 1 && <FaWindows size={20} />}
          {platform.id === 2 && <FaPlaystation size={20} />}
          {platform.id === 3 && <FaXbox size={20} />}
          {platform.id === 5 && <FaApple size={20} />}
          {platform.id === 6 && <FaLinux size={20} />}
        </div>
      ))}
    </div>
  );
}
export { PlatformList };
