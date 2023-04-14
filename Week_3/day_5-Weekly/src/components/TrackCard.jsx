import React from "react";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const TrackCard = ({ track }) => {
  const dispatch = useDispatch();

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
    </Col>
  );
};

export default TrackCard;
