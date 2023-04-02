import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CardCarousel from "../CardCarousel";

class Sagas extends Component {
  harryPotter = { endpoint: "harry%20potter", title: "Harry Potter Saga" };
  marvel = { endpoint: "marvel", title: "Marvel Cinematic Universe" };
  starWars = { endpoint: "star%20wars", title: "Star Wars Saga" };

  render() {
    return (
      <Container fluid>
        <CardCarousel
          myEndpoint={this.harryPotter.endpoint}
          title={this.harryPotter.title}
        />
        <CardCarousel
          myEndpoint={this.marvel.endpoint}
          title={this.marvel.title}
        />
        <CardCarousel
          myEndpoint={this.starWars.endpoint}
          title={this.starWars.title}
        />
      </Container>
    );
  }
}

export default Sagas;
