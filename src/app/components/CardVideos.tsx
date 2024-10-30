"use client"; // Caso esteja usando App Router no Next.js 13+

import { useRef, useState } from "react";

const CardVideos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const videos = [
    { id: 1, src: "Quer Aumentar Suas Vendas lojista.mp4", title: "Quer Aumentar Suas Vendas" },
    { id: 2, src: "/abradilan.mp4", title: "Abradilan" },
    { id: 3, src: "/brasil.mp4", title: "Grupo Adriano Cobuccio"},
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden w-full bg-[var(--indigo)]  mx-auto">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {videos.map((video) => (
          <div key={video.id} className="w-full flex-shrink-0">
            { 
              video.id === 1 && 
               <video
              className="w-full h-auto max-w-[58rem] m-auto mt-5 mb-0"
              controls
              poster="/3 (2).png"
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video> 

            }
            { 
              video.id === 2 && 
               <video
              className="w-full h-auto max-w-[58rem] m-auto mt-5 mb-0"
              controls
              poster="/2.png"
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video> 

            }
            { 
              video.id === 3 && 
               <video
              className="w-full h-auto max-w-[58rem] m-auto mt-5 mb-0"
              controls
              poster="/1.png"
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video> 

            }
            <h3 className="text-center text-2xl text-white mt-2">{video.title}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
};

export default CardVideos;
