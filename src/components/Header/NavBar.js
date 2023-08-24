import {Container, Nav, Navbar} from 'react-bootstrap/';
import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <Navbar expand="lg" className=" fondoNav">
    <Container>
    <Link as={Link} to="/">
        <img
            src="/imagenes/logo2.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo CEG El Ascensor"
        />
        </Link>   
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
  )
}
export default NavBar;