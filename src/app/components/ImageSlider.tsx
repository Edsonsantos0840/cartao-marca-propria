'use client';
// Módulos
import Image from 'next/image';
// Componentes
import { images2 } from './arquivos/ArquivoImageSlider';
//hokks
import UseSlide from './funções/UseSlide';

const ImageSlider: React.FC = () => {
  // Hook personalizado com a função carrossel.
  const {currentIndex, handlePrevious, handleNext, setCurrentIndex} = UseSlide()
  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden hidden lg:block">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images2.map((image , index) => (
          <div key={index} className="min-w-full w-full ">
            <Image src={image.src} alt='Banner Carrocel' width={1500} height={450} className="w-full h-auto" />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={handlePrevious}
        className="btn4 left-1"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="btn4 right-1"
      >
     ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-1 right-0 transform -translate-x-1/2 flex space-x-2 ">
        {images2.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-[#fcfcfc42]'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
