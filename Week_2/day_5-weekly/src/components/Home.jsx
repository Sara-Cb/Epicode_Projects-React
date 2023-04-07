import { Container } from "react-bootstrap";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";
import CityCards from "./CityCard";
import ForecastToday from "./ForecastToday";
const myKey = "c4351c24a44bd1a44e14c1ff36ed6da1";

const Home = () => {
  const [city, setCity] = useState(null);
  const [forecast, setForecast] = useState([]);

  const getCityDetails = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Rome,it&appid=${myKey}`
      );
      if (response.ok) {
        let details = await response.json();
        setCity(details);
      } else {
        console.log("error happened with the request");
      }
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  const getCityForecast = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Rome,it&appid=${myKey}`
      );
      if (response.ok) {
        let details = await response.json();
        const now = new Date();
        const firstDayForecast = details.list.filter((item) => {
          const itemDate = new Date(item.dt * 1000);
          const hoursDiff = (itemDate - now) / 1000 / 60 / 60;
          return hoursDiff >= 0 && hoursDiff <= 24;
        });
        setForecast(firstDayForecast);
      } else {
        console.log("error happened with the request");
      }
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  useEffect(() => {
    getCityDetails();
    getCityForecast();
  }, []);

  return (
    <Container fluid>
      <Searchbar />
      <CityCards city={city} />
      <ForecastToday forecast={forecast} />
    </Container>
  );
};

export default Home;
