import React, { useState } from 'react';
import './App.css';
import iphone from './iphone.png';
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };


  return (
    <div className='container'>
      <header>
        <h1>APPSTORE.UZ</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/news">News</a>
          <a href="/about">About us</a>
          <a href="/contact" id='shop'>🛒</a>
        </nav>
      </header>


      <section>
        <div className='main'>
          <h2>iPhone 12 pro</h2>
          <p>The iPhone 12 Pro and iPhone 12 Pro Max are part of Apple’s latest generation of smartphones, offering 5G connectivity, the A14 chip for better performance.</p>
          <button>Order now</button>
          <button>Learn more</button>
          <div className='slider-container'>
            <button onClick={prevSlide} className='arrow-button'>&lt;</button>
            <div className='slider'>
              {slides.map((slide, index) => (
                <span
                  key={index}
                  className={index === currentSlide ? 'slide active' : 'slide'}
                >
                  {slide}
                </span>
              ))}
            </div>
            <button onClick={nextSlide} className='arrow-button'>&gt;</button>
          </div>
        </div>

        <div className='image'>
          <img src={iphone} alt="iPhone 12 Pro"/>
        </div>
      </section>
    </div>
  );
}

export default App;