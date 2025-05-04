"use client";

// Módulos
import Image from "next/image";
// Componentes
import { images } from "../fields/ListaSlideMobile";
// Hooks
import UseSlide from "../function/UseSlide";

export default function MobileSlide(){
  const { currentIndex, handlePrevious, handleNext, setCurrentIndex } = UseSlide();

  return (
    <section
      className="relative w-full max-w-full mx-auto overflow-hidden block lg:hidden"
      aria-label="Carrossel de imagens para dispositivos móveis"
    >
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        role="region"
        aria-live="polite"
      >
        {images.map((image, index) => (
          <figure key={`mobile-slide-${index}`} className="min-w-full w-full transition-transform duration-700">
            <Image
              src={image}
              alt={`Slide ${index + 1} do carrossel mobile`}
              width={1500}
              height={450}
              quality={100}
              className="w-full h-auto"
              priority={index === 0}
            />
          </figure>
        ))}
      </div>

      {/* Botões de navegação */}
      <nav
        className="absolute top-1/2 left-0 right-0 flex justify-between px-2 -translate-y-1/2"
        aria-label="Controles do carrossel mobile"
      >
        <button
          onClick={handlePrevious}
          className="btn4 left-[2px]"
          aria-label="Slide anterior"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="btn4 right-[2px]"
          aria-label="Próximo slide"
        >
          ▶
        </button>
      </nav>

      {/* Indicadores */}
      <div
        className="absolute bottom-[1px] left-1/2 transform -translate-x-1/2 flex space-x-2 p-2 rounded-md"
        role="tablist"
        aria-label="Indicadores do carrossel"
      >
        {images.map((_, index) => (
          <button
            key={`mobile-indicator-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
              currentIndex === index ? "bg-white" : "bg-[#30303031]"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
            aria-current={currentIndex === index}
          />
        ))}
      </div>
    </section>
  );
};


