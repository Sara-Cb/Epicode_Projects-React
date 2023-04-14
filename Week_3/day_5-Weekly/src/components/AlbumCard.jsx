import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <Col xs={6} md={3} className="text-center">
      <a href={`/album/${album.id}`}>
        <img className="img-fluid" src={album.cover_medium} alt="1" />
      </a>
      <p>
        <Link to={`/album_page.html?id=${album.id}`}>
          Album:{" "}
          {album.title.length < 16
            ? `${album.title}`
            : `${album.title.substring(0, 16)}...`}
          <br />
        </Link>
        <Link to={`/artist/${album.artist.id}`}>
          Artist: {album.artist.name}
        </Link>
      </p>
    </Col>
  );
};

export default AlbumCard;
