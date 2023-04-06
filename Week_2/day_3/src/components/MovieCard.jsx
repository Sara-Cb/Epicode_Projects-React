import React from "react";
import { Card } from "react-bootstrap";
import "./MovieCard.css";

class MovieCard extends React.Component {
  render() {
    const movie = this.props.theMovie;
    return (
      <Card className="mx-1 border-0">
        <div className="cardImg">
          <Card.Img src={movie.Poster} alt={`${movie.Title} poster`} />
        </div>
        <Card.Body>
          <section className="d-flex justify-content-between">
            <div>
              <i className="bi bi-play-circle-fill card-icon me-2"></i>
              <i className="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i className="bi bi-arrow-down-circle card-icon me-2"></i>
            </div>
          </section>
          <section className="d-flex align-items-center justify-content-between details">
            <p className="card-text yourMatch m-0">97% match</p>
            <p className="m-2 card-text text-white">Movie</p>
          </section>
        </Card.Body>
      </Card>
    );
  }
}

export default MovieCard;
