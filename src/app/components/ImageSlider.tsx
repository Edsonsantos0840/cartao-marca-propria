'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'


const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
];

const ImageSlider: React.FC = () => {
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
    <div className="relative w-full max-w-full mx-auto overflow-hidden">
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

export default ImageSlider;
