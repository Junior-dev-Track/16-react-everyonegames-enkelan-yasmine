import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);

    return (
        <GameContext.Provider value={{ games, setGames }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGames = () => useContext(GameContext);
