import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarrouselImg = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img  src="/imagenes/banner-1.png" className='carouselBanner'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img  src="/imagenes/banner-2.png" className='carouselBanner'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img  src="/imagenes/banner-3.png" className='carouselBanner'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img  src="/imagenes/banner-4.png" className='carouselBanner'/>
       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselImg;