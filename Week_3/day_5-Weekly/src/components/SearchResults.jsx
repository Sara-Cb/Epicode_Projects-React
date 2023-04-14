import { useSelector } from "react-redux";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import TrackCard from "./TrackCard";

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
              <TrackCard key={track.id} track={track} />
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default SearchResults;
