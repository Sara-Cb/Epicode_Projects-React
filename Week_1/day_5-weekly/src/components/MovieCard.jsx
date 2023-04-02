import React from "react";
import { Card } from "react-bootstrap";
import "./MovieCard.css";

class MovieCard extends React.Component {
  render() {
    const movie = this.props.theMovie;
    console.log(movie);
    return (
      <Card className="mx-1 border-0">
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt={`${movie.Title} poster`}
        />
        <Card.Body>
          <section className="d-flex justify-content-between">
            <div>
              <i className="bi bi-play-circle-fill card-icon"></i>
              <i className="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i className="bi bi-arrow-down-circle card-icon"></i>
            </div>
          </section>
          <section className="d-flex align-items-center justify-content-between details">
            <p className="card-text yourMatch m-0">97% match</p>
            <p className="m-2 card-text text-white">Limited Series</p>
            <span className="border card-text p-1 text-white">HD</span>
          </section>
          <p className="card-text text-white adjectives">
            <span className="btn btn-dark">Funny</span>
            <span className="btn btn-dark">Rom-com</span>
            <span className="btn btn-dark">Thriller</span>
          </p>
        </Card.Body>
      </Card>
    );
  }
}

export default MovieCard;
