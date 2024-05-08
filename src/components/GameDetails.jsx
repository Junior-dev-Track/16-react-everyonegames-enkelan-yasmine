import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import RatingBar from "./RatingBar.jsx";

function GameDetails() {
  const [game, setGame] = useState({});
  const [screenshots, setScreenshots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  const toggleTextExpanded = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  const getMetascoreColor = (score) => {
    if (score >= 75) {
      return "green";
    } else if (score >= 50) {
      return "orange";
    } else {
      return "red";
    }
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${API_KEY}`,
        );
        setGame(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch game", error);
        setIsLoading(false);
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`,
        );
        setScreenshots(response.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchGame();
    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        color: "white",
      }}
    >
      <div style={{ flex: "0 0 50%", fontSize: "25px" }}>
        <h2 style={{ color: "grey" }}>{game.name}</h2>
        <p
          style={{
            maxWidth: "1200px",
            fontSize: "30px",
            color: "whitesmoke",
            margin: "0",
          }}
        >
          {isTextExpanded
            ? game.description_raw
            : `${game.description_raw.substring(0, 600)}...`}
        </p>
        <button
          onClick={toggleTextExpanded}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "grey",
            textDecoration: "none",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          {isTextExpanded ? "See Less" : "See More"}
        </button>
        <p style={{ color: "grey" }}>Released Date: {game.released}</p>
        <p style={{ color: "grey" }}>Play Time: {game.playtime} H</p>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <p style={{ color: "grey" }}>Metascore: </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginBottom: "20px",
              backgroundColor: getMetascoreColor(game.metacritic),
            }}
          >
            <p>{game.metacritic}</p>
          </div>
        </div>
        <RatingBar ratings={game.ratings} />
      </div>
      <div style={{ flex: "0 0 50%" }}>
        <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight>
          <div>
            <img src={game.background_image} alt={game.name} />
          </div>
          {screenshots?.map((screenshot, index) => (
            <div key={index}>
              <img
                src={screenshot.image}
                alt={`${game.name} screenshot ${index}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export { GameDetails };
