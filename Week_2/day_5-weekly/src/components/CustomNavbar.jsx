import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white d-flex align-items-center">
          <img
            src="https://m.media-amazon.com/images/I/61nuuPxUvaL.png"
            alt="logo"
            height={"40px"}
            className="me-2"
          />
          Meteo<span className="text-warning">.cb</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/your-cities">Your Cities</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
