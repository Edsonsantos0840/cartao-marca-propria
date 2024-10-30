'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import img1 from '../assets/PROPOSTA1.jpg'
import img2 from '../assets/PROPOSTA2.jpg'
import img3 from '../assets/PROPOSTA3.jpg'
import img4 from '../assets/PROPOSTA4.jpg'
import img5 from '../assets/PROPOSTA5.jpg'
import img6 from '../assets/PROPOSTA6.jpg'
import img7 from '../assets/PROPOSTA7.jpg'
import img8 from '../assets/PROPOSTA8.jpg'
import img9 from '../assets/PROPOSTA9.jpg'
import img10 from '../assets/PROPOSTA10.jpg'
import img11 from '../assets/PROPOSTA11.jpg'
import img12 from '../assets/PROPOSTA12.jpg'
import img13 from '../assets/PROPOSTA13.jpg'
import img14 from '../assets/PROPOSTA14.jpg'
import img15 from '../assets/PROPOSTA15.jpg'
import img16 from '../assets/PROPOSTA16.jpg'
import img17 from '../assets/PROPOSTA17.jpg'
import img18 from '../assets/PROPOSTA18.jpg'

const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18 
];

const MobileSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avança automaticamente o slide a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden block md:hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full w-full ">
            <Image src={image.src} alt='Banner Carrocel' width={1500} height={450} className="w-full h-auto" />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-[var(--light)] p-2 rounded-full shadow-lg"
      >
        -
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-[var(--light)] p-2 rounded-full shadow-lg"
      >
     -
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-1 right-0 transform -translate-x-1/2 flex space-x-2 bg-[#0000001f] p-2 rounded-md">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-[#fcfcfc0e]'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSlide;
