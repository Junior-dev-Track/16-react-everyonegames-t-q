import Aside from '../components/Aside';
import Games from '../components/Games';
import Footer from '../components/Footer';

const Home = () => {

  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearchChange = (searchTerm) => {
  //   setSearchTerm(searchTerm);

    return (
      <div className="homeGrid">
        
        <Aside />
        <Games />
        <Footer />
      </div>
    );
  };


export default Home;
