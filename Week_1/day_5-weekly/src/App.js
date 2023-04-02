import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/Navbar";
import MoviePage from "./components/MoviePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div id="content">
        <MoviePage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
