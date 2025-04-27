import { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "COURS GÉNIE ÉLECTRIQUE",
      description: "Cours électricité, électronique et informatique industrielle, microcontrôleurs, microprocesseurs et automates programmables, VHDL, maintenance, Mesure, Schéma électrique...",
      background: "url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    },
    {
      title: "PROJETS FIN D'ÉTUDES",
      description: "Découvrez des projets complets pour l'électronique, l'automatisme et l'informatique industrielle avec schémas, codes sources et documentation.",
      background: "url('https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    },
    {
      title: "MONTAGES ÉLECTRONIQUES",
      description: "Tutoriels, schémas et explications pour réaliser vos propres montages électroniques, programmation PIC, Arduino et bien plus.",
      background: "url('https://images.pexels.com/photos/3912982/pexels-photo-3912982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-section" style={{ backgroundImage: slides[currentSlide].background }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].description}</p>
        <button className="cta-button">En savoir plus</button>
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;