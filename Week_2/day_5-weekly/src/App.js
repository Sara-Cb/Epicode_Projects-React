import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import CityPage from "./components/CityPage";
import MyCities from "./components/MyCities";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <CustomNavbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:name" element={<CityPage />} />
          <Route path="/your-cities" element={<MyCities />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
