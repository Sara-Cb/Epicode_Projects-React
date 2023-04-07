import { Container, Button, Row, Col } from "react-bootstrap";
import CityCards from "./CityCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import ForecastToday from "./ForecastToday";
import ForecastNextDays from "./ForecastNextDays";

const myKey = "c4351c24a44bd1a44e14c1ff36ed6da1";

function averageTemperatures(forecast) {
  const dailyTemps = {};
  forecast.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dateString = date.toISOString().split("T")[0];
    if (!dailyTemps[dateString]) {
      dailyTemps[dateString] = {
        temps: [],
        humidities: [],
        windSpeeds: [],
      };
    }
    dailyTemps[dateString].temps.push(item.main.temp);
    dailyTemps[dateString].humidities.push(item.main.humidity);
    dailyTemps[dateString].windSpeeds.push(item.wind.speed);
  });

  const dailyAverages = [];
  for (const date in dailyTemps) {
    const temps = dailyTemps[date].temps;
    const avgTemp = temps.reduce((a, b) => a + b) / temps.length;
    const humidities = dailyTemps[date].humidities;
    const avgHumidity = humidities.reduce((a, b) => a + b) / humidities.length;
    const windSpeeds = dailyTemps[date].windSpeeds;
    const avgWindSpeed = windSpeeds.reduce((a, b) => a + b) / windSpeeds.length;
    dailyAverages.push({ date, avgTemp, avgHumidity, avgWindSpeed });
  }

  return dailyAverages;
}

function CityPage() {
  const params = useParams();
  console.log(params);
  const [city, setCity] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [nextDaysForecast, setNextDaysForecast] = useState([]);
  const nextDaysAverages = averageTemperatures(nextDaysForecast);

  const getCityDetails = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params.name}&appid=${myKey}`
      );
      if (response.ok) {
        let details = await response.json();
        setCity(details);
        console.log(details);
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
        `https://api.openweathermap.org/data/2.5/forecast?q=${params.name}&appid=${myKey}`
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

        const nextDaysForecast = details.list.filter((item) => {
          const itemDate = new Date(item.dt * 1000);
          const hoursDiff = (itemDate - now) / 1000 / 60 / 60;
          return hoursDiff > 24 && hoursDiff <= 24 * 5;
        });
        setNextDaysForecast(nextDaysForecast);
      } else {
        console.log("error happened with the request");
      }
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getCityDetails();
    getCityForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {city !== null && <CityCards city={city} />}
      <Row>
        <Col>
          <Button
            className="btn-dark mb-3"
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAV",
                payload: params.name,
              });
            }}
          >
            Add to your cities!
          </Button>
        </Col>
      </Row>
      {forecast.length > 0 && <ForecastToday forecast={forecast} />}
      {nextDaysAverages.length > 0 && (
        <ForecastNextDays averages={nextDaysAverages} />
      )}
    </Container>
  );
}

export default CityPage;
