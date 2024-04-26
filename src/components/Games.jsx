import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

export default function Games() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=f43abf80813f4a159ef4e1fc728e12f0`)
      .then((res) => setData(res.data.results));
  }, []);

  return (
    <div className="games">
      <ul>
        {data
          .filter((game) => game.name[0])
          .map((game) => (
            <Card key={game.name} game={game} />
          ))}
      </ul>
    </div>
  );
}
