"use client";

// Módulos
import Image from "next/image";
// Componentes
import { images2 } from "../fields/ListaImageSlider";
// Hooks
import UseSlide from "../function/UseSlide";

export default function ImageSlider(){
  const { currentIndex, handlePrevious, handleNext, setCurrentIndex } = UseSlide();

  return (
    <section
      className="relative w-full overflow-hidden hidden lg:block "
      aria-label="Galeria de imagens do carrossel"
    >
 <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{
      width: `${images2.length * 100}%`,
      transform: `translateX(-${currentIndex * (100 / images2.length)}%)`,
       transition: "transform 3s ease-in-out",
    }}
    role="region"
    aria-live="polite"
  >
    {images2.map((image, index) => (
      <figure
        key={`slide-${index}`}
        className="w-full flex-shrink-0 transition-transform duration-700 ease-in-out"
        style={{ width: `${100 / images2.length}%` }}
      >
        <Image
          src={image}
          alt={`Slide ${index + 1} do carrossel`}
          width={1500}
          height={450}
          quality={100}
          priority={index === 0}
        />
      </figure>
    ))}
  </div>

      {/* Botões de navegação */}
      <nav className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2" aria-label="Controles do carrossel">
        <button
          onClick={handlePrevious}
          className="btn4 left-1"
          aria-label="Slide anterior"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="btn4 right-1"
          aria-label="Próximo slide"
        >
          ▶
        </button>
      </nav>

      {/* Indicadores */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2"
        role="tablist"
        aria-label="Indicadores de slide"
      >
        {images2.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
              currentIndex === index ? "bg-white" : "bg-[#fcfcfc42]"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
            aria-current={currentIndex === index}
          />
        ))}
      </div>
    </section>
  );
};

 
