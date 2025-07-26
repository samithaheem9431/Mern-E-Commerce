// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import '../css/Navbar.css'; // Import custom CSS

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm" variant="light">
      <Container fluid className="px-3">
        <Navbar.Brand href="#" className="custom-brand fw-bold">
          <span className="brand-text">Navbar</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="navbarSupportedContent" 
          className="custom-toggler border-0"
        />
        
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0 custom-nav">
            <Nav.Link href="#" className="custom-nav-link active-link">
              Home
            </Nav.Link>
            <Nav.Link href="Dashboard" className="custom-nav-link">
              Admin
            </Nav.Link>
          </Nav>
          
          <Form className="d-flex search-form">
            <FormControl 
              type="search" 
              placeholder="Search..." 
              className="me-2 custom-search-input" 
              aria-label="Search" 
            />
            <Button 
              variant="outline-success" 
              type="submit" 
              className="custom-search-btn"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;