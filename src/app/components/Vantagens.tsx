// Módulos
import Link from "next/link";
import Image from "next/image";
// Componentes
import { vantagens } from "../fields/ListaVantagens";

export default function Vantagens() {
  return (
    <section
      className="max-w-[1200px] mx-auto  py-8"
      aria-label="Lista de vantagens oferecidas"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 gap-6">
        {vantagens.map((card, index) => (
          <article
            key={`vantagem-${index}-${card.title}`}
            className="flex items-center bg-slate-100 hover:bg-slate-200 hover:scale-105 rounded-lg shadow-md gap-4 lg:p-4 transition duration-300 ease-in-out"
          >
            <figure className="flex-shrink-0 bg-slate-200 p-2 md:p-4 rounded-md">
              <Image
                src={card.imageSrc}
                alt={`Ícone representando: ${card.title}`}
                width={50}
                height={50}
                quality={100}
              />
            </figure>
            <div className="flex-1">
              <Link
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Mais informações sobre ${card.title}`}
                className="text-base font-semibold text-slate-900 hover:underline block"
              >
                {card.title}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
