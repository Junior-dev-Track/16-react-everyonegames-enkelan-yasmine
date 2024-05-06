import React, { useState } from 'react';
import { GameMovies } from './GameMovies.jsx';

function TrendingGame({ games }) {
    const [showMore, setShowMore] = useState(false);
    const [hoveredGameId, setHoveredGameId] = useState(null);

    return (
        <div>
            <div className="gameSectionList">
                <h2>Trending Games</h2>
                <div className="game-list">
                    {games && games.slice(0, showMore ? 9 : 3).map((game) => (
                        <article key={game.id} className="game">
                            <img
                                src={game.background_image}
                                alt={game.name}
                                onMouseEnter={() => setHoveredGameId(game.id)}
                                onMouseLeave={() => setHoveredGameId(null)}
                            />
                            <h3>{game.name}</h3>
                            {hoveredGameId === game.id && <GameMovies gameId={game.id} />}
                        </article>
                    ))}
                </div>
                <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'See Less' : 'See More'}
                </button>
            </div>
        </div>
    );
}

export { TrendingGame };