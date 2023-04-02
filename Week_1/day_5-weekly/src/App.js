import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/Navbar";
import FilmCarousel from "./components/Carousel";
import GenreSelector from "./components/GenreSelector";

const harryPotter = "harry%20potter";
const marvel = "marvel";
const starWars = "star%20wars";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <GenreSelector />
      <FilmCarousel myEndpoint={harryPotter} />
      <FilmCarousel myEndpoint={marvel} />
      <FilmCarousel myEndpoint={starWars} />
    </div>
  );
}

export default App;
