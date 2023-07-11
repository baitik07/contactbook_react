import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>ContactBook</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Contacts</Nav.Link>
          <Nav.Link onClick={() => navigate("/add")}>Add Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
