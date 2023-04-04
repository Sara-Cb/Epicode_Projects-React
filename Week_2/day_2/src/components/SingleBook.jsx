import { Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Card
      className={`bgCard h-100 d-flex flex-column ${
        selected ? "border border-danger" : ""
      }`}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        className="flex-grow-1"
        key={book.asin}
      />
      <Card.Body className="d-flex flex-column p-1 pt-3">
        <Card.Title className="fs-6">{book.title}</Card.Title>
        <Button onClick={() => setShowModal(true)}>Open Comments</Button>
        <CommentArea
          book={book}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
