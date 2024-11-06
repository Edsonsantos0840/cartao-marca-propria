"use client";
// Módulos
import Image from "next/image";
// Componentes
import { images } from "./listas/ListaSlideMobile";
//hokks
import UseSlide from "../components/funções/UseSlide";

const MobileSlide: React.FC = () => {
  // Hook personalizado com a função carrossel.
  const { currentIndex, handlePrevious, handleNext, setCurrentIndex } =
    UseSlide();

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden block lg:hidden">
      <div
        className="
        flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full w-full ">
            <Image
              src={image.src}
              alt="Banner Carrocel"
              width={1500}
              height={450}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button onClick={handlePrevious} className="btn4 left-[2px]">
        ◀
      </button>
      <button onClick={handleNext} className="btn4 right-[2px]">
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-[1px] right-0 transform -translate-x-1/2 flex space-x-2  p-2 rounded-md">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full 
            ${currentIndex === index ? "bg-white" : "bg-[#30303031]"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSlide;
