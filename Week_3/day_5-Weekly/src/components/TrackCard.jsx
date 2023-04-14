import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../redux/actions/favourites";

const TrackCard = ({ track }) => {
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);

  const favourites = useSelector((state) => state.favourite.favourite.list);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourite(track));
      setIsFavourite(false);
    } else {
      dispatch(addToFavourite(track));
      setIsFavourite(true);
    }
  };

  useEffect(() => {
    setIsFavourite(favourites.some((fav) => fav.id === track.id));
  }, [favourites, track]);

  return (
    <Col xs={12} md={6} className="mb-4 rounded bg-dark p-2">
      <Row>
        <Col xs={4}>
          <Image src={track.album.cover_medium} style={{ width: "90%" }} />
        </Col>
        <Col xs={8} className="d-flex flex-column justify-content-between">
          <div>
            <h4
              className="text-light"
              onClick={() =>
                dispatch({ type: "SET_CURRENT_TRACK", payload: track })
              }
            >
              {track.title}
            </h4>
            <div>
              <p>
                <Link to={`/album/${track.album.id}`} className="albumLink">
                  Album: {track.album.title}
                </Link>
              </p>
              <Link to={`/artist/${track.artist.id}`} className="artistLink">
                Artist: {track.artist.name}
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs={3}>
          <Button
            variant={isFavourite ? "success" : "light"}
            onClick={toggleFavourite}
          >
            {isFavourite ? "Remove from favourites" : "Add to favourites"}
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default TrackCard;
