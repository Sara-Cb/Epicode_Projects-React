import React from "react";
import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";
import logo from "..//logo/Spotify_Logo.png";

function Sidebar() {
  return (
    <div className="col-2">
      <Navbar
        expand="md"
        bg="navbar"
        variant="white"
        fixed="left"
        className="justify-content-between"
        id="sidebar"
      >
        <div className="nav-container">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNavAltMarkup"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav>
              <Nav.Link href="#">ICONA Home</Nav.Link>
              <Nav.Link href="#">ICONA Your Library</Nav.Link>
              <li>
                <InputGroup className="mt-3">
                  <FormControl
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      id="button-addon1"
                      onClick={search}
                    >
                      GO
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="nav-btn">
          <Button variant="outline-light" className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button variant="outline-light" className="login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
        </div>
      </Navbar>
    </div>
  );
}

function search() {
  // implementazione di ricerca
}

export default Sidebar;
