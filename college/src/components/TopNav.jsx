import React from "react";
import {Container,Nav,Navbar,NavDropdown} from "react-bootstrap"
const TopNav = () => {
  return (
    <> 
    <Navbar expand="lg" className="bg-body-tertiary fixed-top bg-light">
      <Container>
        <Navbar.Brand href="/home">College Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navLinks" href="/home">Home</Nav.Link>
            <Nav.Link className="navLinks" href="/about">About</Nav.Link>
            <Nav.Link className="navLinks" href="/courses">Course</Nav.Link>
            <Nav.Link className="navLinks" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default TopNav;
