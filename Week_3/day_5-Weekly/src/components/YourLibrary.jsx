import { useEffect } from "react";
import { Container } from "react-bootstrap";
import TrackCard from "../components/TrackCard";
import { useSelector } from "react-redux";

function YourLibrary() {
  const favs = useSelector((state) => state.favourite.favourite.list);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="mb-4">
        <h1 className="sectionTitle">Your Library</h1>
      </div>
      {favs.lenght > 0 ? (
        favs.map((track) => <TrackCard key={track.id} track={track} />)
      ) : (
        <h3>Still nothing here!</h3>
      )}
    </Container>
  );
}

export default YourLibrary;
