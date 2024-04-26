import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

export default function Games() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`
      )
      .then((res) => setData(res.data.results));
  }, []);

  return (
    <main className="games">
      <ul>
        {data.map((game) => (
          <Card key={game.name} game={game} />
        ))}
      </ul>
    </main>
  );
}
