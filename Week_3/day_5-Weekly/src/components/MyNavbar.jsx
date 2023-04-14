import { Row, Col, Nav, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import MySearchBar from "./MySearchBar";
import { Link } from "react-router-dom";

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
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link">PODCAST</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link">MOODS AND GENRES</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link">NEW RELEASES</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link">DISCOVER</Link>
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
