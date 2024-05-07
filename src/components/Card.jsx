/* eslint-disable react/prop-types */
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import './Card.css';

const Card = ({ game }) => {
  return (
    <li className="card">
      <Link to={`/game/${game.id}`} state={{ game : { game }}} >
      <img className="gameImage" src={game.background_image} alt={game.name} />
        <h2>{game.name}</h2>
      <div className="infos">
        <div>
          <h3>Ratings: {game.ratings_count}</h3>
          <h3 className="rating">Overall rating: {game.rating}/5</h3>
        </div>
        <ul>
          {game.parent_platforms.slice(0, 7).map(
            (platformObj) =>
              (platformObj.platform.id === 1 ||
                platformObj.platform.id === 2 ||
                platformObj.platform.id === 3 ||
                platformObj.platform.id === 7) && (
                <li key={crypto.randomUUID()}>
                  {platformObj.platform.id === 1 && <MdComputer />}
                  {platformObj.platform.id === 2 && <FaPlaystation />}
                  {platformObj.platform.id === 3 && <FaXbox />}
                </li>
              )
          )}
        </ul>
      </div>
      </Link>
    </li>
  );
};

  // console.log(game);
  // return (
  //   <li key={game.id} className="card">
  //     <img src={game.background_image} alt={game.name} />
  //     <div className="game-details">
  //       <h2>{game.name}</h2>
  //       <p>Plateformes :</p>
  //       <ul>
  //         {game.parent_platforms.map((platform) => (
  //           <li key={platform.platform.id}>{platform.platform.name}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </li>
  // )}
    

export default Card;

 {/* <li className="card">
      <img src={game.background_image} alt={game.name} />
      <div className="infos"></div>
    </li> */}
