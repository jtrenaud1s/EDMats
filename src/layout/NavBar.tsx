import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          EDMats
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/raw">
              Raw Materials
            </Nav.Link>
            <Nav.Link as={NavLink} to="/manufactured">
              Manufactured Materials
            </Nav.Link>
            <Nav.Link as={NavLink} to="/encoded">
              Encoded Materials
            </Nav.Link>
            <Nav.Link as={NavLink} to="/guardian">
              Guardian Materials
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
