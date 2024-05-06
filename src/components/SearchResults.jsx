import React from 'react';

const SearchResults = ({ games }) => {
    return (
        <div className="movie-container">
            {games.map((game) => (
                <div key={game.id} className="movie-card">
                    <img src={game.background_image} alt={game.name} className="movie-poster" />
                    <div className="movie-details">
                        <h3>{game.name}</h3>
                        <p>{game.released}</p>
                        <p>{game.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export {SearchResults};