import { Component } from "react";
// le parentesi graffe servono quando dovete importare un qualcosa
// che NON È l'export di default del pacchetto

// import MIGLIORE per un componente react-bootstrap

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import fantasyColl from "../data/fantasy.json";
import SingleBook from './SingleBook'; 


class AllTheBooks extends Component {
  render() {
    return (
      <Container className="mt-3">

        {/*FANTASY BOOKS */}
        <h3>Fantasy Books</h3>
        <Row className="justify-content-evenly align-items-stretch">
          {fantasyColl.map((fantasy) => {
            return (
              <Col key={fantasy.id} xs={6} sm={4} md={3} lg={2} className="mb-4 d-flex">
                <Card className="h-100 d-flex flex-column">
                  <div className="imgContainer bgCard">
                    <Card.Img
                      variant="top"
                      src={fantasy.img}
                      alt={fantasy.title}
                      className="flex-grow-1"
                    />
                  </div>

                  <Card.Body className="d-flex flex-column p-1 pt-3  bgCard">
                    <Card.Title className="fs-6">{fantasy.title}</Card.Title>
                    <Card.Text className="flex-grow-1 m-0">
                      {fantasy.price} €
                    </Card.Text>
                    <p variant="contained" size="large" className="learnMore"> Learn More </p>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
