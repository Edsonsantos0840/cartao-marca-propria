"use client";

// Componentes e hooks
import { videos } from "../fields/ListaVideos";
import UseVideoSlide from "../function/UseVideoSlide";

export default function CardVideos() {
  const { currentIndex, sliderRef, handleNext, handlePrev } = UseVideoSlide();

  return (
    <section
      className="relative overflow-hidden w-full bg-blue "
      aria-label="Carrossel de vídeos BrasilCard"
    >
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {videos.map((video) => (
          <article key={video.id} className="w-full flex-shrink-0">
            <div className="max-w-5xl mx-auto">
              <video
                className="w-full h-auto rounded-md shadow-md"
                controls
                preload="metadata"
                poster={`/${video.id}.png`}
                aria-label={`Vídeo: ${video.title}`}
              >
                <source src={video.src} type="video/mp4" />
                <track kind="captions" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </article>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        type="button"
        onClick={handlePrev}
        className="btn3 absolute top-1/2 left-2 -translate-y-1/2 z-10"
        aria-label="Vídeo anterior"
      >
        ◀
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="btn3 absolute top-1/2 right-2 -translate-y-1/2 z-10"
        aria-label="Próximo vídeo"
      >
        ▶
      </button>
    </section>
  );
}
