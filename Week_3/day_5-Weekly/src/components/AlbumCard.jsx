import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  const myAlbum = album.album;
  const myArtist = album.artist;
  return (
    <Col xs={6} md={3} className="text-center albumCard">
      <Link to={`/album/${myAlbum.id}`}>
        <img className="img-fluid" src={myAlbum.cover_medium} alt="1" />
      </Link>
      <p>
        <Link to={`/album/${myAlbum.id}`} className="albumLink">
          {myAlbum.title.length < 16
            ? `${myAlbum.title}`
            : `${myAlbum.title.substring(0, 16)}...`}
          <br />
        </Link>
        <Link to={`/artist/${myArtist.id}`} className="artistLink">
          {myArtist.name}
        </Link>
      </p>
    </Col>
  );
};

export default AlbumCard;
