import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const GameDetails = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(
            `https://api.rawg.io/api/games/${gameId}?key=${import.meta.env.VITE_API_KEY}&page_size=40`
        )
        .then((res) => setData(res.data));
    }, [gameId]);

    return (
        <div className='gameDetails'>
            <img src="" alt="" />
            <h1>{data.name}</h1>
            <p>{data.description_raw}</p>
            
        </div>
    );
};

GameDetails.PropTypes= {
    gameId: PropTypes.string.isRequired,
}

export default GameDetails;