import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const myAuth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzY2IyY2M1NmIzNjAwMTMzZmU1N2QiLCJpYXQiOjE2ODA1MjQ5MTgsImV4cCI6MTY4MTczNDUxOH0.nyDH36JUhrfHhjGDSX3MFGh4IUh9InTbQw9qxSeD1j8";
const myUrl = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentArea = ({ book, showModal, setShowModal }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      let response = await fetch(`${myUrl}${book.asin}`, {
        headers: {
          Authorization: myAuth,
        },
      });
      if (response.ok) {
        let fetchedComments = await response.json();
        if (fetchedComments) {
          setComments(fetchedComments);
        }
      } else {
        console.log("ERROR : Something went wrong in the API call");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <CommentForm
              book={book}
              myAuth={myAuth}
              myUrl={myUrl}
              getComments={getComments}
            />
            {comments.length > 0 && (
              <CommentList
                comments={comments}
                myAuth={myAuth}
                myUrl={myUrl}
                getComments={getComments}
              />
            )}
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CommentArea;
