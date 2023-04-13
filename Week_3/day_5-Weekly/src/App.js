import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <Container fluid>
      <Sidebar />
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/artist/:id" element={<Artist />}></Route>
          <Route path="/album/:id" element={<Album />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
