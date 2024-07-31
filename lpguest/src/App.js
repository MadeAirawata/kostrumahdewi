import '../src/style/Landingpage.css';
import Landingpage from './components/Landingpage';
import Herosection from './components/Herosection';
import CarouselDewi from './components/CarouselDewi';
import Fitur from './components/Fitur';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="Landingpage">
        <Landingpage />
      </div>
      <div className="Herosection">
        <Herosection />
      </div>
      <div className="CarouselDewi">
        <CarouselDewi />
      </div>
      <div className="Fitur">
        <Fitur />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
