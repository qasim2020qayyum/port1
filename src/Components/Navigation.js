import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import img from "../Assets/imgs/logo.png";

const Navigation = () => {
  return (
    <>
    <div>
    <Navbar className='my_nav' collapseOnSelect expand="lg" >
  <Container className='my_nav'>
  <Navbar.Brand href="#home" style={{color: 'white'}}> <img src={img} alt="Logo" /> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"> 
      <Nav.Link href="#features">Home</Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Web Applications</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Web Designing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Custom Themes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Make Your Website</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Work</Nav.Link>
      <Nav.Link href="#deets">Blog</Nav.Link>
      <Nav.Link href="#deets">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>

    



  
</>
  )
}

export default Navigation
