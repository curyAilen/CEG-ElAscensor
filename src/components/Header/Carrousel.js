import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img  src="/imagenes/banner.jpg" className='carouselBanner'/>
        </Carousel.Item>
     
    </Carousel>
  );
}

export default UncontrolledExample;