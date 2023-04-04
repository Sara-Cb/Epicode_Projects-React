import React, { useState } from "react";
import { Container, Row, Col, FormControl, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

import fantasyColl from "../data/fantasy.json";
import historyColl from "../data/history.json";
import horrorColl from "../data/horror.json";
import romanceColl from "../data/romance.json";
import scifiColl from "../data/scifi.json";

const BookList = () => {
  const [search, setSearch] = useState("");
  const [selectedCollection, setSelectedCollection] = useState(fantasyColl);
  const [filteredBooks, setFilteredBooks] = useState(fantasyColl);

  const filterBookList = (filter) => {
    setSearch(filter);
    setFilteredBooks(
      selectedCollection.filter((book) =>
        book.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const selectCategory = (e) => {
    const collection = e.target.value;

    switch (collection) {
      case "history":
        setSelectedCollection(historyColl);
        setFilteredBooks(historyColl);
        break;
      case "horror":
        setSelectedCollection(horrorColl);
        setFilteredBooks(horrorColl);
        break;
      case "romance":
        setSelectedCollection(romanceColl);
        setFilteredBooks(romanceColl);
        break;
      case "scifi":
        setSelectedCollection(scifiColl);
        setFilteredBooks(scifiColl);
        break;
      default:
        setSelectedCollection(fantasyColl);
        setFilteredBooks(fantasyColl);
    }

    setSearch("");
  };

  return (
    <Container className="mt-3">
        <h3 className="font-weight-light">Select book Category</h3>
      <Form>
        <Form.Select
          className="mr-2"
          onChange={selectCategory}
          defaultValue="fantasy"
        >
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="scifi">Sci-fi</option>
        </Form.Select>

        <br />

        <h4>Search for name:</h4>
        <FormControl
          type="text"
          placeholder="Search books"
          value={search}
          onChange={(e) => filterBookList(e.target.value)}
        />
      </Form>

        <br />

      <Row className="justify-content-evenly align-items-stretch mt-3">
        {filteredBooks.map((book) => {
          return (
            <Col
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className="mb-4 d-flex"
              key={book.asin}
            >
              <SingleBook book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;