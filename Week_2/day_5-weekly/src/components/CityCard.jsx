import { Container, Row, Col } from "react-bootstrap";

function convertDegrees(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius * 100) / 100;
}

function CityCards({ city }) {
  if (!city) {
    return null;
  }

  return (
    <Container>
      <Row>
        <Col className="col-8 mt-3 mb-5 mx-auto bg-light p-4 border border-dark">
          <div>
            <h1>
              <b>{city.name}</b>
            </h1>
            <h2>{convertDegrees(city.main.temp)}°C</h2>
            <h4>{city.weather[0].main}</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CityCards;
