import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CardCarousel from "../CardCarousel";

class Horror extends Component {
  zombie = { endpoint: "zombie", title: "Zombies" };
  exorcism = { endpoint: "exorcism", title: "Exorcisms" };
  splatter = { endpoint: "saw", title: "Splatter" };

  render() {
    return (
      <Container fluid>
        <CardCarousel
          myEndpoint={this.zombie.endpoint}
          title={this.zombie.title}
        />
        <CardCarousel
          myEndpoint={this.exorcism.endpoint}
          title={this.exorcism.title}
        />
        <CardCarousel
          myEndpoint={this.splatter.endpoint}
          title={this.splatter.title}
        />
      </Container>
    );
  }
}

export default Horror;
