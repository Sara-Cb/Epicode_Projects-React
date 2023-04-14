import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { Container } from "react-bootstrap";
import MySidebar from "./components/MySidebar";
import MyNavbar from "./components/MyNavbar";
import Player from "./components/Player";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Container className="mainContainer d-flex" fluid>
        <Container className="sideCont" fluid>
          <MySidebar />
        </Container>
        <Container className="myElements">
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search-results" element={<SearchResults />}></Route>
            <Route path="/artist/:id" element={<Artist />}></Route>
            <Route path="/album/:id" element={<Album />}></Route>
          </Routes>
        </Container>
        <Player />
      </Container>
    </BrowserRouter>
  );
}

export default App;
