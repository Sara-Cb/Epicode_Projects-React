import { Row, Col, Nav, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import MySearchBar from "./MySearchBar";

function MyNavbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 935px)" });

  return (
    <Row xs={2} md={1}>
      <Col>
        <Navbar expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/">HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">PODCAST</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">NEW RELEASES</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">DISCOVER</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col>{isMobile && <MySearchBar />}</Col>
    </Row>
  );
}

export default MyNavbar;
