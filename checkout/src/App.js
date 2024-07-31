import '../src/style/Landingpage.css';
import Landingpage from './components/Landingpage';
import Footer from './components/Footer';
import CardKamar from './components/CardKamar';

function App() {
  return (
    <div className="App">
      <div className="Landingpage">
        <Landingpage />
      </div>
      <div className="CardKamar">
        <CardKamar />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
