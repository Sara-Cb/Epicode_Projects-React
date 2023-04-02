import { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";
const myKey = "53bd1a91";
const myUrl = `http://www.omdbapi.com/?apikey=${myKey}&s=`;

class CardCarousel extends Component {
  // inizializza l'array come vuoto
  state = {
    movies: [],
  };

  sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
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
          });
        } else {
          this.setState({
            movies: [],
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
        <Slider {...this.sliderSettings}>
          {this.state.movies.map((movie) => (
            <MovieCard key={movie.imdbID} theMovie={movie} />
          ))}
        </Slider>
      </Container>
    );
  }
}

export default CardCarousel;
