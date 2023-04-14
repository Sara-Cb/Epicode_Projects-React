import { Container, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

function Home() {
  return (
    <Container>
      <Row>
        <h2>Rock</h2>
        {/* mi servono 4 album rock qui*/}
      </Row>
      <Row>
        <h2>Pop</h2>
        {/* mi servono 4 album pop qui*/}
      </Row>
      <Row>
        <h2>Hip-hop</h2>
        {/* mi servono 4 album hip-hop qui*/}
      </Row>
    </Container>
  );
}

export default Home;
