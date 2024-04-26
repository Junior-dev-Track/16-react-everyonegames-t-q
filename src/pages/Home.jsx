import Aside from '../components/Aside';
import Games from '../components/Games';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="homeGrid">
      <header>
        <Header />
      </header>
      <Aside />
      <Games />
      <Footer />
    </div>
  );
};

export default Home;
