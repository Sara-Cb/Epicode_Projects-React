import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentArea extends Component {
  comments = null;

  myAuth =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzY2IyY2M1NmIzNjAwMTMzZmU1N2QiLCJpYXQiOjE2ODA1MjQ5MTgsImV4cCI6MTY4MTczNDUxOH0.nyDH36JUhrfHhjGDSX3MFGh4IUh9InTbQw9qxSeD1j8";
  myUrl = "https://striveschool-api.herokuapp.com/api/comments/";

  getComments = async (elementId) => {
    try {
      let response = await fetch(`${this.myUrl}${elementId}`, {
        headers: {
          Authorization: this.myAuth,
        },
      });
      if (response.ok) {
        let myComments = await response.json();
        if (myComments) {
          this.comments = myComments;
          console.log(this.comments);
        }
      } else {
        console.log("ERROR : Something went wrong in the API call");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    await this.getComments(this.props.bookAsin);
  }

  render() {
    return (
      <ListGroup>
        <ListGroup.Item>commento</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default CommentArea;
