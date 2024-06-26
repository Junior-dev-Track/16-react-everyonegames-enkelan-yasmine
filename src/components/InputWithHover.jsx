import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function InputWithHover() {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchResultsRef = useRef(null);
  const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;

  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setIsActive(false);
        setGames([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, searchResultsRef]);

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);

  const toggleSearch = () => {
    setIsActive(!isActive);
  };

  const [cache, setCache] = useState({});

  const source = axios.CancelToken.source();

  const handleSearch = async () => {
    if (!searchTerm) return;
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?search=${searchTerm}&key=${API_KEY}`,
        { cancelToken: source.token },
      );
      const sortedGames = response.data.results.sort((a, b) => {
        if (a.name.toLowerCase() === searchTerm.toLowerCase()) return -1;
        if (b.name.toLowerCase() === searchTerm.toLowerCase()) return 1;
        return 0;
      });
      setGames(sortedGames);
      setIsLoading(false);
    } catch (error) {
      if (axios.isCancel(error)) return;
      setError("Failed to fetch games");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        handleSearch();
      }
    }, 500); // delay in ms

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleClick = () => {
    setSearchTerm("");
    setIsActive(false);
    setGames([]);
  };

  return (
    <div className={"SearchBackground"}>
      <div
        ref={searchRef}
        className={`SearchContainer ${isActive ? "active" : ""}`}
      >
        <div className={"SearchIcon"}>
          <FaSearch
            className={"ScaleIcon"}
            size={"15px"}
            color={"#201F1F"}
            onClick={toggleSearch}
          />
        </div>
        <div className={"SearchInput"}>
          <input
            type="text"
            placeholder={"Enter search"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          ></input>
          <span className={"SearchClear"} onClick={handleClick}></span>
        </div>
      </div>
      {games.length > 0 && (
        <div className="SearchResults">
          {games.map((game) => (
            <article className={"GameListResult"} key={game.id}>
              <Link
                to={`/game/${game.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3>{game.name}</h3>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export { InputWithHover };
