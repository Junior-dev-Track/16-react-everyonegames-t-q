/* eslint-disable react/prop-types */
const Card = ({ game }) => {
  console.log(game);
  return (
    <li key={game.id} className="card">
      <img src={game.background_image} alt={game.name} />
      <div className="game-details">
        <h2>{game.name}</h2>
        <p>Plateformes :</p>
        <ul>
          {game.parent_platforms.map((platform) => (
            <li key={platform.platform.id}>{platform.platform.name}</li>
          ))}
        </ul>
      </div>
    </li>

    // <li className="card">
    //   <img src={game.background_image} alt={game.name} />
    //   <div className="infos"></div>
    // </li>
  );
};

export default Card;
