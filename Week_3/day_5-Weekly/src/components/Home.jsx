import { Container, Row, Spinner } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums } from "../redux/actions/fetchAlbums";
import { useEffect } from "react";

function Home() {
  const fetchedAlbums = useSelector((state) => state.fetchAlbums.fetchedAlbums);
  const loading = useSelector((state) => state.fetchAlbums.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
    console.log(fetchedAlbums);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className="mainPage">
      {loading ? (
        <div
          className="w-100 d-flex align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <Spinner
            animation="border"
            role="status"
            variant="success"
            style={{ width: "100px", height: "100px" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Container>
          <Row>
            <h2 className="sectionTitle">Pop albums</h2>
            {fetchedAlbums.popAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </Row>
          <Row>
            <h2 className="sectionTitle">Rock albums</h2>
            {fetchedAlbums.rockAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </Row>
          <Row>
            <h2 className="sectionTitle">Hip hop albums</h2>
            {fetchedAlbums.hiphopAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default Home;
