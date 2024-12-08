import React, { useState } from 'react';

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const moveSlide = (direction) => {
    let nextSlide = currentSlide;
    
    if (direction === 'right') {
      nextSlide = currentSlide + 1 >= totalSlides ? 0 : currentSlide + 1;
    } else {
      nextSlide = currentSlide - 1 < 0 ? totalSlides - 1 : currentSlide - 1;
    }
    
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="works">
      <div className="carousel">
        <div className="carousel__nav">
          <span id="moveLeft" className="carousel__arrow" onClick={() => moveSlide('left')}>
            <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
            </svg>
          </span>
          <span id="moveRight" className="carousel__arrow" onClick={() => moveSlide('right')}>
            <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
          </span>
        </div>

        {[
          {
            subtitle: "The grand moment",
            title: "Le tour",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            btnText: "Explore the tour",
            imageClass: "carousel-item--1"
          },
          {
            subtitle: "The big window",
            title: "Minimal window",
            description: "Clear Glass Window With Brown and White Wooden Frame iste natus error sit voluptatem accusantium doloremque laudantium.",
            btnText: "Read the article",
            imageClass: "carousel-item--2"
          },
          {
            subtitle: "Tropical palms",
            title: "Palms",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            btnText: "Explore the palms",
            imageClass: "carousel-item--3"
          },

        ].map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-item ${slide.imageClass} ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="carousel-item__image"></div>
            <div className="carousel-item__info">
              <div className="carousel-item__container">
                <h2 className="carousel-item__subtitle">{slide.subtitle}</h2>
                <h1 className="carousel-item__title">{slide.title}</h1>
                <p className="carousel-item__description">{slide.description}</p>
                <a href="#" className="carousel-item__btn">{slide.btnText}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='carousel-text'>
        <h1>Works</h1>
        <p>Here can you see all my works</p>
      </div>
    </div>
  );
}

export default Works;