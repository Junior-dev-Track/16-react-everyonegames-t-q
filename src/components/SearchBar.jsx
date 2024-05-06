import { useEffect, useState} from 'react';

const SearchBar = ({ data, setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState('');
 

  useEffect(() => {
    const filteredGames = data.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredGames);
  }, [searchTerm, data, setFilteredData]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    // Déplacer le curseur après l'icône lors du focus sur le champ de recherche
    if (inputRef.current) {
      inputRef.current.setSelectionRange(2, searchTerm.length);
    }
  };
  
    return (
      <>
        <input
          type="search"
          placeholder="&#128269; Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </>
    );
}

export default SearchBar;




//   const Header = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');
  
//     const handleChange = (event) => {
//       setSearchTerm(event.target.value);
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       onSearch(searchTerm);
//     };
  
//     return (
      
//         <nav>
//           {/* Vos autres éléments de navigation */}
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleChange}
//               placeholder="Search..."
//             />
//             <button type="submit">Search</button>
//           </form>
//         </nav>

//     );
// }
