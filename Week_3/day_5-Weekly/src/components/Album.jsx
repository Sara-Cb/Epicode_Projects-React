import { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TrackCard from "../components/TrackCard";

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
});

function Album() {
  const params = useParams();
  const [album, setAlbum] = useState({});

  useEffect(() => {
    async function fetchAlbum() {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/album/" +
            params.id,
          {
            method: "GET",
            headers,
          }
        );
        const data = await response.json();
        setAlbum(data);
      } catch (error) {
        // ex.: Url is not correct, Internal Server Error
        console.log(error);
      }
    }

    fetchAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {album.title && (
        <div className="mb-4">
          <Image src={album.cover_medium} fluid />
          <h1 className="sectionTitle">{album.title}</h1>
          <h2>
            <Link to={`/artist/${album.artist.id}`}>{album.artist.name}</Link>
          </h2>
        </div>
      )}
      {album.tracks &&
        album.tracks.data.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onClick={() => {
              // dispatch della track
            }}
          />
        ))}
    </Container>
  );
}

export default Album;
