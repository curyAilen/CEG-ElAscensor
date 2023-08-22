import React from 'react';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap/';
import '.././estilos.css'
import Carrousel from './Carrousel'


const Header = () =>{
  return (
    <>
    <Navbar expand="lg" className=" fondoNav">
      <Container>
        <Navbar.Brand href="#home">
          <img
              src="/imagenes/logo2.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo CEG El Ascensor"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home" className='itemNav'>Inicio</Nav.Link>
            <Nav.Link href="#actividades" className='itemNav'>Actividades</Nav.Link>
            <Nav.Link href="#alquiler" className='itemNav'>Alquiler de salas</Nav.Link>
            <Nav.Link href="#novedades" className='itemNav'>Novedades</Nav.Link>
            <Nav.Link href="#contacto" className='itemNav'>Contacto</Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carrousel></Carrousel>
    <Container>
<Row>
  <Col>
  <h2 className='titulo'>¿Quienes Somos?</h2>
    <p className='parrafo'>Somos un centro de especializado en gimnasia de trampolín. Generamos un espacio de aprendizaje y desarrollo para todas las edades, haciendo énfasis en la diversión, dicimplina y pasión por la gimnasia. Transmitimos y acompañamos a niños y adultos en el descubrimiento de este hermoso deporte. Contamos con un espacio exclusivo para el entrenamiento físico a cargo de profesores especializados para que todos puedan poner en movimiento el cuerpo.</p></Col>
</Row>
    </Container>
    
    </>
  );


}

export default Header;