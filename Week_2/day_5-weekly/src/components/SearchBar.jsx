import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ListGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom/dist";

const myKey = "c4351c24a44bd1a44e14c1ff36ed6da1";

function convertKelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius * 100) / 100;
}

const Searchbar = function () {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${myKey}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchSuggestions();
  };

  const onSelectCity = async (cityName, country) => {
    setCity(`${cityName}, ${country}`);
    setSuggestions([]);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}`
      );
      const data = await response.json();
      setWeatherData([data]);
      setError(null);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError("City not found");
      setWeatherData([]);
    }
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
      {suggestions.length > 0 && (
        <Dropdown.Menu show>
          {suggestions.map((suggestion) => (
            <Dropdown.Item
              key={suggestion.id}
              onClick={() => onSelectCity(suggestion.name, suggestion.country)}
            >
              {suggestion.name}, {suggestion.country}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
      {error && <p>{error}</p>}
      {weatherData.length > 0 && (
        <ListGroup>
          {weatherData.map((data, i) => (
            <ListGroup.Item key={data.id + i}>
              <h2>{data.name}</h2>
              <h3 className="fs-1">
                {data.main && data.main.temp
                  ? Math.round(convertKelvinToCelsius(data.main.temp)) + "°C"
                  : "N/A"}
              </h3>
              <p>
                Description:{" "}
                {data.weather && data.weather[0] && data.weather[0].description
                  ? data.weather[0].description
                  : "N/A"}
              </p>
              <Link to={"/city/" + data.id}>
                <Button className="bg-white text-primary px-4 border border-2 border-primary">
                  See More
                </Button>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default Searchbar;
