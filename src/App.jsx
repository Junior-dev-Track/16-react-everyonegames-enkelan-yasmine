import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalApi } from "./Services/GlobalApi.jsx";
import "./styles/Index.scss";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { GameCarousel } from "./components/GameCarousel.jsx";
import { GameDetails } from "./components/GameDetails.jsx";
import { Filters } from "./components/Filters.jsx";

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
                <Filters />
                <GlobalApi />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
