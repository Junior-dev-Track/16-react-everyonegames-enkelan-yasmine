import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalApi } from "./Services/GlobalApi.jsx";
import "./styles/Index.scss";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { GameCarousel } from "./components/GameCarousel.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <GameCarousel />
        <Routes>
          <Route path="/" element={<GlobalApi />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
