import { ListGroup, Row, Col, Button } from "react-bootstrap";

const CommentList = ({ comments, myAuth, myUrl, getComments }) => {
  /*
  const editComment = async (commentId) => {
    try {
      let response = await fetch(`${myUrl}${commentId}`, {
        headers: {
          Authorization: myAuth,
          "Content-Type": "application/json",
        },
        method: "PUT",
      });
      if (response.ok) {
        console.log("Comment deleted");
        alert("Comment deleted correctly");
        getComments();
      } else {
        console.log("Error deleting item");
      }
    } catch (error) {
      console.log(error);
    }
  };*/

  const delComment = async (commentId) => {
    try {
      let response = await fetch(`${myUrl}${commentId}`, {
        headers: {
          Authorization: myAuth,
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Comment deleted");
        alert("Comment deleted correctly");
        getComments();
      } else {
        console.log("Error deleting item");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-3">
      <h5>Reviews</h5>
      <ListGroup>
        {comments.map((comment) => {
          return (
            <ListGroup.Item key={comment._id}>
              <Row>
                <Col className="col-2 d-flex align-items-center">
                  <p className="text-center">
                    <b>{comment.rate}/5</b>
                    <br />
                    stars
                  </p>
                </Col>
                <Col>
                  <p>
                    <b>{comment.comment}</b>
                  </p>
                  <p>by: {comment.author}</p>
                  <div className="text-end">
                    <Button className="btn-warning">Edit</Button>
                    <Button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this comment?"
                          )
                        ) {
                          delComment(comment._id);
                        }
                      }}
                      className="btn-danger"
                    >
                      Delete
                    </Button>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default CommentList;
