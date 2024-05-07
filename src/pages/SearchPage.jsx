import { Link } from 'react-router-dom';


const SearchPage = ({ games }) => {
    return (
        <div>
            <h1>Résultats de la recherche</h1>
            {games.map(game => (
                <div key={game.id}>
                    <Link to={`/game/${game.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                        <h2>{game.name}</h2>
                    </Link>
                    <p>Date de sortie: {game.released}</p>
                    <p>Genere: {game.genre}</p>
                </div>
            ))}
        </div>
    );
};


export {SearchPage};
