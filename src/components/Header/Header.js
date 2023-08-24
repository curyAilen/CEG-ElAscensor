import React from 'react';
import {Container, Row, Col} from 'react-bootstrap/';
import '.././estilos.css';
import Navbar from './NavBar';
import Carrousel from './Carrousel';
import CarrouselImg from './CarrouselImg';

const Header = () =>{
  return (
    <>  
    <Navbar></Navbar>
    <Carrousel></Carrousel>   
    <Container>
    <Row>
      <Col>
        <h2 className='titulo'>¿Quienes Somos?</h2>
        <p className='parrafo'>Somos un centro de especializado en gimnasia de trampolín. Generamos un espacio de aprendizaje y desarrollo para todas las edades, haciendo énfasis en la diversión, dicimplina y pasión por la gimnasia. Transmitimos y acompañamos a niños y adultos en el descubrimiento de este hermoso deporte. Contamos con un espacio exclusivo para el entrenamiento físico a cargo de profesores especializados para que todos puedan poner en movimiento el cuerpo.</p>
      </Col>
    </Row>
    </Container>
    <CarrouselImg></CarrouselImg>
    
    </>
  );


}

export default Header;