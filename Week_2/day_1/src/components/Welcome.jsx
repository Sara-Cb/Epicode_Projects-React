import React from "react";

import Container from "react-bootstrap/Container";

function Welcome() {
  return (
    <Container >
        <div className="mt-5">
            <br />
        </div>
      <div className="mt-2 p-2 bg-light text-dark rounded border">
        <h1>Scavalcacinghie's Bookstore</h1>
        <p>Where you can consciously lose track of time and hallucinate while reading paper</p>
      </div>
    </Container>
  );
}

export default Welcome;
