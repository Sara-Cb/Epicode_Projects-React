import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";
const myKey = "53bd1a91";
const myUrl = `http://www.omdbapi.com/?apikey=${myKey}&s=`;

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </div>
  );
}
class CardCarousel extends Component {
  // inizializza l'array come vuoto
  state = {
    loading: true,
    movies: [],
  };

  sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  getMovies = async (Endpoint) => {
    try {
      let response = await fetch(`${myUrl}${Endpoint}`);
      if (response.ok) {
        let data = await response.json();
        let fetchedMovies = data.Search;
        if (fetchedMovies) {
          this.setState({
            movies: fetchedMovies,
            loading: false,
          });
        } else {
          this.setState({
            movies: [],
            loading: true,
          });
        }
      } else {
        console.log("ERROR : Something went wrong in the API call");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    await this.getMovies(this.props.myEndpoint);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.myEndpoint !== this.props.myEndpoint) {
      await this.getMovies(this.props.myEndpoint);
    }
  }

  render() {
    return (
      <Container fluid>
        <h2 className="carouselTitle">{this.props.title}</h2>
        {this.state.loading === true && (
          <Spinner animation="border" role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Slider {...this.sliderSettings} className="mb-3">
          {this.state.movies.map((movie) => (
            <MovieCard key={movie.imdbID} theMovie={movie} />
          ))}
        </Slider>
      </Container>
    );
  }
}

export default CardCarousel;
