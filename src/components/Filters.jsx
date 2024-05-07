import {PlatformSelect} from "./PlatformSelect.jsx";
import {SystemSelect} from "./SystemSelect.jsx";
import {GenreSelect} from "./GenreSelect.jsx";


const Filters = () => {
    return (
        <section>
            <div className={'GridFilter'}>
            <PlatformSelect />
            <SystemSelect />
            <GenreSelect />
            </div>
        </section>
    );
};

export default Filters;