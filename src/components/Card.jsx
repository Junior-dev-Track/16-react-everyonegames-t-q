/* eslint-disable react/prop-types */
const Card = ({ game }) => {
  // console.log(game);
  return (
    <li className="card">
      <img src={game.background_image} alt={game.name} />
      <div className="infos"></div>
    </li>
  );
};

export default Card;
