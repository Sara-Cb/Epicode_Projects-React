import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="d-flex align-items-center justify-content-center py-2 px-4 mt-5 text-secondary fs-7">
      <Container fluid>
        <Row className="mt-1 " xs={2} md={4}>
          <Col>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact us</p>
          </Col>
          <Col>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </Col>
          <Col>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </Col>
          <Col>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Informations</p>
          </Col>
        </Row>
        <Row className="text-center">
          <div className="mb-2">Service code</div>
          <div>
            © 1997-2023 Netflix Inc. Copyright:
            <a
              className="ps-2 text-white"
              href="https://github.com/Sara-Cb"
              rel="noreferrer"
              target="_blank"
            >
              Sara.cb
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
