import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalApi } from "./Services/GlobalApi.jsx";
import "./styles/Index.scss";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { GameCarousel } from "./components/GameCarousel.jsx";
import { GameDetailsPage } from "./pages/GameDetailsPage.jsx";
import { GenreSelect } from "./components/GenreSelect.jsx";
import { PlatformSelect } from "./components/PlatformSelect.jsx";
import { SystemSelect } from "./components/SystemSelect.jsx";
import { GameDetails } from "./components/GameDetails.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/game/:id" element={<GameDetails />} />
          <Route
            path="/"
            element={
              <>
                <GameCarousel />
                <GlobalApi />
              </>
            }
          />
        </Routes>
        <div className={"FilterContainer"}>
          <GenreSelect />
          <PlatformSelect />
          <SystemSelect />
        </div>
        <Footer />
      </Router>
    </>
  );
}
export default App;
