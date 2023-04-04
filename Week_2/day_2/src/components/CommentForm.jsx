import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CommentForm = ({ book, myAuth, myUrl, getComments }) => {
  const [comment, setComment] = useState({
    rate: 1,
    comment: "",
    elementId: book.asin,
  });

  const addComment = async (newComment) => {
    try {
      let response = await fetch(`${myUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: myAuth,
        },
        body: JSON.stringify(newComment),
      });
      if (response.ok) {
        alert("Thanks for your review!");
        setComment({ rate: 1, comment: "", elementId: book.asin });
        getComments();
      } else {
        console.log("ERROR : Something went wrong in the API call");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      id="reviewForm"
      onSubmit={(e) => {
        e.preventDefault();
        addComment(comment);
      }}
    >
      <Form.Group>
        <Form.Label>Rate from 1 to 5:</Form.Label>
        <Form.Control
          as="select"
          name="rate"
          value={comment.rate}
          onChange={(e) => {
            setComment({
              ...comment,
              rate: e.target.value,
            });
          }}
        >
          {[1, 2, 3, 4, 5].map((rate) => (
            <option key={rate} value={rate}>
              {rate}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Write your review:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comment"
          value={comment.comment}
          onChange={(e) => {
            setComment({
              ...comment,
              comment: e.target.value,
            });
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send Review
      </Button>
    </Form>
  );
};

export default CommentForm;
