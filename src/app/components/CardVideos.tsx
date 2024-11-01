"use client";
import { videos } from "./arquivos/ArquivoVideos";
import UseVideoSlide from "./funções/UseVideoSlide";

const CardVideos: React.FC = () => {
  const { currentIndex, sliderRef, handleNext, handlePrev } = UseVideoSlide();

  return (
    <div className="relative overflow-hidden w-full bg-[var(--indigo)]  mx-auto">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {videos.map((video) => (
          <div key={video.id} className="w-full flex-shrink-0">
              <video
                className="w-full h-auto max-w-[58rem] m-auto mt-5 mb-0"
                controls
                poster={`/${video.id}.png`}
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            <h3 className="text-center text-2xl text-white mt-2">
              {video.title}
            </h3>
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
