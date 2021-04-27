import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">NOTE BOOK</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Profile">Profile</Nav.Link>
         
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
