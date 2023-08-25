import {Card,ListGroup } from "react-bootstrap";

const clases = {
  titulo: 'PEQUEÑO ASCENSOR PROGRAMA RECREATIVO ',
  descripcion: 'Este programa es especial para descubrir la gimnasia de trampolín y aprender jugando. Con clases para todas las edades y niveles, desde bebes de 6 meses hasta adultos buscamos guiar y acompañar a los alumnos en el desarrollo de sus capacidades a través de juegos, actividades, ejercicios adaptados a la edad, nivel y objetivos de cada uno. Todas las clases están dirigidas por un profesor capacitado y especializado en el deporte.',
  item1: 'ITEM 1 ',
  item2: 'ITEM 2 ',
  item3: 'ITEM 3 ',
  
};


const CardItem = () =>{
      return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/imagenes/banner.jpg"/>
        <Card.Body>
          <Card.Title>{clases.titulo}</Card.Title>
          <Card.Text>{clases.descripcion}
          
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{clases.item1}</ListGroup.Item>
          <ListGroup.Item>{clases.item2}</ListGroup.Item>
          <ListGroup.Item>{clases.item3}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Ver más</Card.Link>
        </Card.Body>
      </Card>
      );
    }    

export default CardItem;
