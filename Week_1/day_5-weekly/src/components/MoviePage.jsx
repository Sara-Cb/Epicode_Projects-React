import React, { Component } from "react";
import { Container } from "react-bootstrap";
import GenreSelector from "./GenreSelector";
import Sagas from "./MovieCategories/Sagas";
import Horror from "./MovieCategories/Horror";

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: "saga" };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(selectedOption) {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <Container fluid>
        <GenreSelector page="Movies" onOptionChange={this.handleOptionChange} />
        {selectedOption === "saga" && <Sagas />}
        {selectedOption === "horror" && <Horror />}
      </Container>
    );
  }
}

export default MoviePage;
