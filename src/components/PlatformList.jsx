import React, { useState, useEffect } from "react";
import axios from "axios";
import PC from "../asset/images/PC.png";
import Playstation from "../asset/images/Playstation.svg";
import Xbox from "../asset/images/Xbox.svg";

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

  const getPlatformLogo = (platformName) => {
    switch (platformName.toLowerCase()) {
      case "pc":
        return PC;
      case "playstation":
        return Playstation;
      case "xbox":
        return Xbox;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      {platforms.slice(0, 3).map((platform) => (
        <div key={platform.id}>
          <img
            src={getPlatformLogo(platform.name)}
            alt={platform.name}
            style={{ width: "25px", height: "25px" }}
          />
        </div>
      ))}
    </div>
  );
}

export { PlatformList };
