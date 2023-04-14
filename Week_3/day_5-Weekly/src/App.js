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
            <Route path="/artist/:id" element={<Artist />}></Route>
            <Route path="/album/:id" element={<Album />}></Route>
          </Routes>
          <Player />
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
