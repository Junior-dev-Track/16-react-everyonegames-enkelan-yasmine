import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GenreList } from "../components/GenreList.jsx";

const API_KEY = import.meta.env.VITE_APP_RAWG_API_KEY;
console.log(API_KEY);
function GlobalApi() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
                setData(response.data.results);
                console.log(response)
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        console.log(import.meta.env.VITE_APP_RAWG_API_KEY) // "123
        fetchData();
    }, []);

    return (
        <div>
            <GenreList games={data} />
        </div>
    );
}

export {GlobalApi};