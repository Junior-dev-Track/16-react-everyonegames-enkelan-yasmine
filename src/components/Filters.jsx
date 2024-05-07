import { GenreSelect } from "./GenreSelect.jsx";
import {Link} from "react-router-dom";

const Filters = () => {
  return (
    <section>
      <div className={"GridFilter"}>
        <GenreSelect />
          <Link to="/games">Voir tous les jeux</Link>
      </div>
    </section>
  );
};

export { Filters };
