import React from "react"; //quindi estendo react.component invece che solo component
import { Form } from "react-bootstrap";

class GenreSelector extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center py-2 px-4  mb-3 text-white">
        <div className="d-flex justify-content-between">
          <h1 className="me-4">Movies</h1>
          <Form className="d-flex align-items-center">
            <Form.Select
              name="genere"
              id="genere"
              className="bg-black text-light border-0"
            >
              <option value="saga">Movie Sagas</option>
              <option value="horror">Horror</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="comedy">Comedy</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="action">Action</option>
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
