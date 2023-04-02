import React from "react";
import { Form } from "react-bootstrap";

class GenreSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: "saga" };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    const selectedOption = event.target.value;
    this.setState({ selectedOption });
    if (this.props.onOptionChange) {
      this.props.onOptionChange(selectedOption);
    }
  }
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center py-2 px-4  mb-3 text-white">
        <div className="d-flex justify-content-between">
          <h1 className="me-4">{this.props.page}</h1>
          <Form className="d-flex align-items-center">
            <Form.Select
              name="genre"
              id="genre"
              className="bg-black text-light border-0"
              onChange={this.handleSelectChange}
              value={this.state.selectedOption}
            >
              <option value="saga">Popular Sagas</option>
              <option value="horror">Horror</option>
              <option value="animation" disabled>
                Animation
              </option>
              <option value="drama" disabled>
                Drama
              </option>
              <option value="comedy" disabled>
                Comedy
              </option>
              <option value="sci-fi" disabled>
                Sci-Fi
              </option>
              <option value="action" disabled>
                Action
              </option>
            </Form.Select>
          </Form>
        </div>
        <div className="w-20">
          <span className="p-1 border border-white mx-0">
            <i className="bi bi-text-left"></i>
          </span>
          <span className="p-1 border border-white mx-0">
            <i className="bi bi-grid"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default GenreSelector;
