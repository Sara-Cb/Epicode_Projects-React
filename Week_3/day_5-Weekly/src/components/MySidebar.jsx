import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaHome, FaBookOpen } from "react-icons/fa";
import logo from "../imgs/logo/Spotify_Logo.png";
import { Link } from "react-router-dom";
import MySearchBar from "./MySearchBar";

const MySidebar = () => {
  return (
    <Navbar bg="navbar" variant="light" fixed="left" expand="sm">
      <div className="nav-container">
        <Link to="/">
          <Navbar.Brand>
            <img
              src={logo}
              alt="Spotify_Logo"
              width="131"
              height="40"
              className="mb-5"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Link to="/">
              <FaHome size={20} className="me-2" /> Home
            </Link>
            <Link to="/your-library">
              <FaBookOpen size={20} className="me-2" /> Your Library
            </Link>
          </Nav>
        </Navbar.Collapse>
        <MySearchBar />
      </div>
      <div className="nav-btn">
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn">Login</button>
        <div className="ml-2">
          <span>Cookie Policy</span> | <span>Privacy</span>
        </div>
      </div>
    </Navbar>
  );
};

export default MySidebar;
