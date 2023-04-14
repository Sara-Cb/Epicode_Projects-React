import { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TrackCard from "../components/TrackCard";

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
});

function Artist() {
  const params = useParams();
  const [artist, setArtist] = useState({});
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchArtist() {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
            params.id,
          {
            method: "GET",
            headers,
          }
        );
        const data = await response.json();
        setArtist(data);
      } catch (error) {
        // ex.: Url is not correct, Internal Server Error
        console.log(error);
      }
    }

    fetchArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchTracks() {
      try {
        let response = await fetch(artist.tracklist, {
          method: "GET",
          headers,
        });
        const data = await response.json();
        setTracks(data.data);
        console.log(tracks);
      } catch (error) {
        console.log(error);
      }
    }

    if (artist.tracklist) {
      fetchTracks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist]);

  return (
    <Container>
      {artist.name && (
        <div className="mb-4">
          <Image src={artist.picture_medium} fluid />
          <h1 className="sectionTitle">{artist.name}</h1>
        </div>
      )}
      {tracks &&
        tracks.map((track) => <TrackCard key={track.title} track={track} />)}
    </Container>
  );
}

export default Artist;
