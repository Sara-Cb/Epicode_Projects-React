import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import { useState } from "react";
const myKey = "c4351c24a44bd1a44e14c1ff36ed6da1";

const SearchBar = function () {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`
      );
      const data = await response.json();
      if (data.cod === "404") {
        setError("City not found");
      } else {
        setWeatherData({ data });
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setError("City not found");
    }
  };

  return (
    <>
      <Form
        className="d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      {error && <p>{error}</p>}
      {weatherData.length > 0 && (
        <ListGroup>
          {weatherData.map((data) => (
            <ListGroup.Item key={data.id}>
              <h2>{data.name}</h2>
              <p>Temperature: {data.main.temp}</p>
              <p>Humidity: {data.main.humidity}</p>
              <p>Description: {data.weather[0].description}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default SearchBar;
