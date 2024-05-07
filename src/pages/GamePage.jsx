import React from 'react';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom'
import GameDetails from '../components/GameDetails';

const GamePage = () => {
    let { gameId } = useParams();
    return (
        <>
        <div className="gameGrid">
            <Aside />
            <GameDetails gameId={gameId} />
        </div>
        <Footer />      
        </>
    );
};

export default GamePage;