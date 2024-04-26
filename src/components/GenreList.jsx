import React, { useState } from 'react';

function GenreList({ games }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <h2>Trending Games</h2>
            <div className="game-list">
                {games && games.slice(0, showMore ? 9 : 3).map((game) => (
                    <div key={game.id} className="game">
                        <h3>{game.name}</h3>
                        <img src={game.background_image} alt={game.name} />
                    </div>
                ))}
            </div>
            <button onClick={() => setShowMore(!showMore)}>
                {showMore ? 'See Less' : 'See More'}
            </button>
        </div>
    );
}

export {GenreList};