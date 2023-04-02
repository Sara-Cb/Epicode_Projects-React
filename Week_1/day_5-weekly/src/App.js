import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/Navbar";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div>
        <MoviePage />
      </div>
    </div>
  );
}

export default App;
