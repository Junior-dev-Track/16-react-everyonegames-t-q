import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
const Games = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=f43abf80813f4a159ef4e1fc728e12f0&page=${page}&page_size=40`);
        const newData = response.data.results.filter(game => !data.some(existingGame => existingGame.id === game.id));
        setData(prevData => [...prevData, ...newData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight || loading
    )
      return;
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <main className="games">
      <SearchBar data={data} setFilteredData={setFilteredData} />
      <ul>
        {filteredData.map((game, index) => (
          <Card key={`${game.id}-${index}`} game={game} />
        ))}
      </ul>
      {loading && <div>Loading...</div>}
    </main>
  );
};

// const Games = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`https://api.rawg.io/api/games?key=f43abf80813f4a159ef4e1fc728e12f0&page=${page}&page_size=40`);
//         const newData = response.data.results.filter(game => !data.some(existingGame => existingGame.id === game.id));
//         setData(prevData => [...prevData, ...newData]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]);

//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop !==
//       document.documentElement.offsetHeight || loading
//     )
//       return;
//     setPage(prevPage => prevPage + 1);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [loading]);

//   return (
//     <main className="games">
//       <SearchBar data={data} setFilteredData={setFilteredData} />
//       <ul>
//         {filteredData.map((game) => (
//           <Card key={game.id} game={game} />
//         ))}
//       </ul>
//       {loading && <div>Loading...</div>}
//     </main>
//   );
// };


export default Games;

// export default function Games() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY
//         }&page=${page}`
//       )
//       .then((res) => setData(res.data.results));
//   }, []);

//   return (
//     <main className="games">
//       <SearchBar data={data} setFilteredData={setFilteredData} />
//       <ul>
//         {filteredData.map((game) => (
//           <Card key={game.name} game={game} />
//         ))}
//       </ul>
//     </main>
//   );
// }
