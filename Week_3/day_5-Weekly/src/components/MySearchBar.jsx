import { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { fetchSearch } from "../redux/actions/search";
import { useNavigate } from "react-router-dom";

const MySearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(query));
    navigate("/search-results");
  };

  return (
    <Container fluid className="my-4">
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 rounded-pill"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          className="rounded-pill"
          variant="outline-primary"
          type="submit"
        >
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default MySearchBar;
