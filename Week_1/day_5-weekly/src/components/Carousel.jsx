import Carousel from "react-bootstrap/Carousel";
import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
const myKey = '53bd1a91';
const myUrl = `http://www.omdbapi.com/?apikey=${myKey}&s=`;


class FilmCarousel extends Component {
    // inizializza l'array come vuoto
    state = {
      filmSaga: [],
    };
  
    // Funzione di fetch dall'API basato sull'endpoint
    getMovies = async (Endpoint) => {
      try {
        let response = await fetch(
          `${myUrl}${Endpoint}`
        );
        if (response.ok) {
          let data = await response.json();
          if (data.Search) {
            this.setState({
              filmSaga: data.Search,
            });
          } else {
            this.setState({
              filmSaga: [],
            });
          }
        } else {
          console.log("ERROR : Something went wrong in the API call");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    // Chiamato una volta che il component è montato
    async componentDidMount() {
      await this.getMovies(this.props.myEndpoint);
    }
  
    // Chiamato all'aggiornamento del component
    async componentDidUpdate(prevProps) {
      if (prevProps.myEndpoint !== this.props.myEndpoint) {
        await this.getMovies(this.props.myEndpoint);
      }
    }
  
    render() {
      return (
          <Container fluid>
            <Carousel
              nextIcon={
                <span aria-hidden="true" className="carousel-control-next-icon" />
              }
              prevIcon={
                <span aria-hidden="true" className="carousel-control-prev-icon" />
              }
              indicators={false}
            >
              {/* Mappa attraverso filmSaga e crea i Carousel Items*/}
              {this.state.filmSaga.map((Search, index) => {
                if (index % 6 === 0) {
                  return (
                    <Carousel.Item key={index}>
                      <Row className="d-flex flex-nowrap overflow-hidden  gx-5">
                        {/* Mappa attraverso filmSaga NUOVAMENTE e crea i movie Items*/}
                        {this.state.filmSaga.map((data) => (
                          <Col
                            xs={6}
                            sm={4}
                            md={3}
                            lg={2}
                            key={data.imdbID}
                            className="p-0 d-flex justify-content-center"
                          >
                            {/* Mostra i poster dei film*/}
                            <img
                              className="d-block w-100 m-2"
                              src={data.Poster}
                              alt={`${data.Title} poster`}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  );
                } else {
                  return null;
                }
              })}
            </Carousel>
          </Container>
      );
    }
  }
  
  export default FilmCarousel;