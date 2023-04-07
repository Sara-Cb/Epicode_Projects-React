import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { format, isToday, isTomorrow } from "date-fns";

function convertDegrees(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius * 100) / 100;
}

function formatDayTime(date) {
  if (isToday(date)) {
    return `Today, ${format(date, "HH:mm")}`;
  } else if (isTomorrow(date)) {
    return `Tomorrow, ${format(date, "HH:mm")}`;
  } else {
    return format(date, "EEEE, d MMMM, HH:mm");
  }
}

function ForecastToday({ forecast }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Row className="mb-4 h-100">
      <Col>
        <Slider {...sliderSettings} className="mb-3">
          {forecast.map((item, index) => (
            <div key={index}>
              <div className="mx-auto">
                <h3>{formatDayTime(new Date(item.dt * 1000))}</h3>
                <p>{Math.round(convertDegrees(item.main.temp))}°C</p>
                <p>
                  {item.weather &&
                  item.weather[0] &&
                  item.weather[0].description
                    ? item.weather[0].description
                    : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </Col>
    </Row>
  );
}

export default ForecastToday;
