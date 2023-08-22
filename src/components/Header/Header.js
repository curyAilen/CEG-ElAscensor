import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap/';


const Header = () =>{
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Actividades</Nav.Link>
            <Nav.Link href="#link">Alquiler de salas</Nav.Link>
            <Nav.Link href="#link">Novedades</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}

export default Header;