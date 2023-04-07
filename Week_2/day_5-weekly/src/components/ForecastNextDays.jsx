import { Row, Col, Card } from "react-bootstrap";

function convertDegrees(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius * 100) / 100;
}

function formatDate(dateString) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

function ForecastNextDays({ averages }) {
  return (
    <Row className="g-4">
      {averages.map((item, index) => (
        <Col xs={12} key={index}>
          <Card className="mx-auto">
            <Card.Body>
              <Card.Title>{formatDate(item.date)}</Card.Title>
              <Card.Text>
                {Math.round(convertDegrees(item.avgTemp))}°C,
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                {Math.round(item.avgHumidity)}% humidity,{" "}
                {Math.round(item.avgWindSpeed)} m/s wind
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ForecastNextDays;
