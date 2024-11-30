import React, { useState, useEffect } from 'react';
import carrosel from '../../components/Logo/carrosel.png';


const images = [carrosel, carrosel, carrosel, carrosel];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <img src={src} alt={`Slide ${index}`} className="carousel-image" />
            <button className="carousel-button">Ver Ofertas</button>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            role="button"
            aria-label={`Ir para o slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
