import { useSelector } from "react-redux";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";

const SearchResults = () => {
  const tracks = useSelector((state) => state.search.tracks);
  const loading = useSelector((state) => state.search.loading);

  return (
    <Container className="my-4">
      {loading ? (
        <Row>
          <Col className="d-flex justify-content-center">
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      ) : (
        <>
          <h2 className="sectionTitle">Tracks</h2>
          <Row>
            {tracks.map((track) => (
              <Col key={track.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={track.album.cover_medium} />
                  <Card.Body>
                    <Card.Title>{track.title}</Card.Title>
                    <Card.Text>{track.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default SearchResults;
