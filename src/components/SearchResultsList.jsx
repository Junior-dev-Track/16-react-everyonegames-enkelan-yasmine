import React from 'react';
import { useGames } from './GameContext.jsx';

export const SearchResultsList = () => {
    const { games } = useGames();

    return (
        <section className={'result_list'}>
            {games.map(game => (
                <ul key={game.id}>
                    <li>{game.name}</li>
                </ul>
            ))}
        </section>
    );
}
