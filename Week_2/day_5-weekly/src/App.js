import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyHome from "./components/MyHome";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHome />
    </div>
  );
}

export default App;
