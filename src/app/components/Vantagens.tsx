// Módulos
import Link from "next/link";
import Image from "next/image";
// Componentes
import { vantagens } from "../fields/ListaVantagens";

export default function Vantagens() {
  return (
    <section
      className="max-w-[1100px] mx-auto  py-8 "
      aria-label="Lista de vantagens oferecidas"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-6 lg:mx-0">
        {vantagens.map((card, index) => (
          <article
            key={`vantagem-${index}-${card.title}`}
            className="flex items-center bg-slate-100 hover:bg-slate-200 hover:scale-105 rounded-lg  shadow-md gap-3 transition duration-300 ease-in-out"
          >
            <figure className="flex-shrink-0 bg-slate-200 p-4 rounded-tl-xl rounded-bl-xl w-[73px] h-[73px] lg:w-[70px] lg:h-[70px] ">
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
                className="text-base font-semibold text-blue hover:underline block"
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
